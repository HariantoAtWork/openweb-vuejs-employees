<template>
    <div>
        <header>
            <Markdown file="coffeeipsum"></Markdown>
        </header>
        <main class="layout u-fill u-box" :class="[ ieVersion ]">
            <textarea class="u-flex" v-model="source"></textarea>
            <iframe class="u-flex" v-iframe="source" frameborder="0"></iframe>
        </main>
    </div>
</template>

<script>
    import './Layout.scss'

    export default {
        name: 'Layout',
        data: () => ({
            ieVersion: "",
            source: ''
        }),
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
            }

        },
        methods: {
            getPage () {
                return this.activePage;
            },
            setPage (string) {
                this.activePage = string;
            }
        },
        created() {
            let ie = "";
            try { ie = "ie-v" + navigator.userAgent.match( /(MSIE |Trident.*rv[ :])([0-9]+)/ )[ 2 ]; }
            catch(e) {}
            this.ieVersion = ie;
        },
        watch: {
            '$route' (to, from) {
                let params = { name: to.params[0].substr(1) };
                this.$store.dispatch("appSetActivePage", params);
            }
        }
    }
</script>