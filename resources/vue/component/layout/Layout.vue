<template>
    <div class="layout u-box u-box--column vp">
        <header class="layout-header">
            <img class="logo" src="img/logo-tr.png" alt="logo">
            <h1 class="layout-title">Employees</h1>
        </header>
        <div class="search u-box u-flex--shrink">
            <input 
                v-model="query"
                class="input input-default u-flex" type="text" placeholder="Search">
            
            <button class="button">
                <span class="fa fa-search" aria-hidden="true"></span>
            </button>
        </div>
        <div class="searchbytag u-box u-box--align-center u-flex--shrink">
            <span class="searchbytag-label">Search By Tag: </span>
            <span class="u-flex"><span class="searchbytag-counter">#{{ querySkills.length }}</span></span>
            <button 
                @click="onToggleTagDrawer"
                class="button">
                <span v-if="!showTagDrawer" class="fa fa-tags"></span>
                <span v-else class="fa fa-close"></span>
            </button>
        </div>
        <main 
            ref="main-overflow"
            v-scrollbar 
            class="u-flex main-overflow u-overflow-y scrollbar">
            <!-- tagDrawer -->
            <div 
                ref="tagDrawer"
                v-if="showTagDrawer"
                class="tagDrawer u-box u-flex u-fill-width">
                <div class="u-flex u-flex--shrink" style="width: 50%">
                    <ul class="list skilltags-list">
                        <li 
                            @click="onRemoveSkillFromFilter(skillname)"
                            class="skilltags-item" 
                            v-for="skillname in querySkills">{{skillname}} <span class="fa fa-minus-square"></span></li>
                    </ul>
                </div>
                <div class="u-flex u-flex--shrink" style="width: 50%">
                    <ul class="list skilltags-list">
                        <li 
                            @click="onAddSkillToFilter(skillname)"
                            class="skilltags-item" 
                            v-for="skillname in filteredSkills">{{skillname}} <span class="fa fa-plus-square"></span></li>
                    </ul>
                </div>
            </div>

            <!-- employees-view -->
            <div 
                ref="employees-view"
                v-show="!showTagDrawer"
                class="u-flex u-box  employees-view">
                <ul class="list employees-list u-flex">
                    <li 
                        class="u-box u-box--align-center employees-item"
                        v-for="item in filteredEmployees">
                        <div class="avatar">
                            <img class="avatar-circle" :src="item.profileImage" alt="">
                        </div>
                        <div class="u-flex">
                            <div class="employer-name">{{ item.name }}</div>
                            <div class="employer-role">{{ item.role }}</div>
                        </div>
                        <div>
                            <span class="fa fa-chevron-right"></span>
                        </div>
                    </li>
                </ul>
            </div>

        </main>
        
    </div>
</template>

<script>
    import './Layout.scss'

    var $ = require('jquery'),
        Promise = require("bluebird"),
        _ = require('lodash');

    export default {
        name: 'Layout',
        data: () => ({
            query: '',
            querySkills: [],
            showTagDrawer: false
        }),
        watch: {
            '$route' (to, from) {
                let params = { name: to.params[0].substr(1) };
                this.$store.dispatch("SET_ACTIVEPAGE", params);
            },
            showTagDrawer (newValue, oldValue) {
                console.log('watch - showTagDrawer')
                this.$refs['main-overflow'].scrollTop = 0;
            }
        },
        computed: {
            showOverlay () {
                return this.$store.state.showOverlay
            },
            
            activePage: {
                get () {
                    return this.$store.state.activePage
                },
                set (string) {
                    this.$store.dispatch("SET_ACTIVEPAGE", string);
                }
            },

            employees: {
                get () {
                    return this.$store.state.employees
                },
                set (list) {
                    this.$store.dispatch('SET_EMPLOYEES', list)
                }
            },


            skills () {
                var list = this.filteredEmployees;
                var skills = [];

                // iterate list and for attribute `skills` and 
                _(list).forEach(function (obj, key) {
                    if(obj.hasOwnProperty('skills') 
                        && Array.isArray(obj.skills)) {

                        skills = skills.concat(obj.skills)
                    }
                })

                // remove duplicate kills
                skills = _.uniq(skills)
                

                return skills;
            },

            // filters
            filteredEmployees () {
                var query       = this.query,
                    querySkills = this.querySkills;

                return this.employees.filter(function (item) {
                    let foundByQuery = this.foundByQuery(query, item);
                    let foundBySkills = this.foundBySkills(querySkills, item);
                    return Boolean(foundByQuery * foundBySkills);
                }.bind(this));
            },

            filteredSkills () {
                return _.difference(this.skills, this.querySkills)
            },

        },
        methods: {
            getEmployees () {
                var url = 'https://sys4.open-web.nl/employees.json';

                return $.ajax({
                    dataType: "json",
                    url: url
                })
                    .then(function (data) {
                        // console.log(JSON.stringify(data, null, 2))
                        this.employees = data.employees;
                    }.bind(this))
                    .fail(function (error) {
                        console.error("layout - getEmployees | ","SERVER ERROR:", error)
                    })
                    ;
            },

            foundByQuery (query, employeeItem) {
                var found = false;
                var keysList = Object.keys(employeeItem);

                for (var i = keysList.length - 1; i >= 0; i--) {
                    let object = employeeItem[keysList[i]]

                    // check if object is a string
                    if(typeof object === "string"
                        && object.toLowerCase().indexOf(query.toLowerCase()) > -1) {
                        found = true;
                        break; // break for-loop
                    }
                }
                return Boolean(found);
            },

            foundBySkills (querySkills, employeeItem) {
                var found = true;
                if(employeeItem.hasOwnProperty('skills') 
                    && Array.isArray(employeeItem.skills)) {

                    _.forEach(querySkills, function (skill) {
                        let foundIndex = employeeItem.skills.indexOf(skill);
                        found *= (foundIndex > -1)
                    })
                }
                return Boolean(found);
            },

            // Events
            onAddSkillToFilter (skillname) {
                let foundIndex = this.querySkills.indexOf(skillname);

                if(!(foundIndex > -1)) {
                    this.querySkills.push(skillname);
                }
            },

            onRemoveSkillFromFilter (skillname) {
                let foundIndex = this.querySkills.indexOf(skillname);
                if(foundIndex > -1) {
                    this.querySkills.splice(foundIndex,1);
                }
            },

            onToggleTagDrawer () {
                this.showTagDrawer = !this.showTagDrawer;
            }

        },
        // LifeCycle Hooks
        mounted () {
            this.getEmployees();
        }

    }
</script>