<template>
    <div class="layout u-box u-box--column vp">
        <header class="layout-header">
            <img class="logo" src="img/logo-tr.png" alt="logo">
            <h1 class="layout-title">Employees</h1>
        </header>

        <!-- is-mobile -->
        <main class="layout-main u-flex u-overflow-x u-relative is-mobile">
            <div class="u-absolute-full u-fill">
                <div class="panel-view">
                    <div
                        class="panel-list"
                        :style="{ transform: `translateX(${left})` }">
                        <!-- Employees -->
                        <div class="panel-tab">
                            <SectionEmployees
                                class="u-fill"
                                ref="section-employees"
                                :onViewEmployee="onViewEmployee"></SectionEmployees>
                        </div>
                        <!-- Employee -->
                        <div class="panel-tab">
                            
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
        
    </div>
</template>

<script>
    import './Layout.scss'

    export default {
        name: 'Layout',
        data: () => ({
            list: {
                total: 2,
                current: 0,
                repeat: true
            }
        }),
        watch: {
            '$route' (to, from) {
                let params = { name: to.params[0].substr(1) };
                this.$store.dispatch("SET_ACTIVEPAGE", params);
            },
        },
        computed: {
            activePage: {
                get () {
                    return this.$store.state.activePage
                },
                set (string) {
                    this.$store.dispatch("SET_ACTIVEPAGE", string);
                }
            },
            left () {
                var current = this.list.current;
                var result = current * -100;

                return `${result}%`;
            },

            employee: {
                get () {
                    return this.$store.state.employee
                },
                set (data) {
                    this.$store.dispatch('SET_EMPLOYEE', data)
                }
            },
        },
        methods: {
            onViewEmployee (data) {
                console.log(JSON.stringify(data, null, 2))
                this.employee = data;
                this.list.current = 1
            },
            onViewEmployees () {
                this.list.current = 0
            }
        }

    }
</script>