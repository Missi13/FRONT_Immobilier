<template>
    <div>
        <!--navbar-->
        <header>
            <navbar/>
        </header>

            <v-container fluid class="container">
                <v-row>
                    <v-col cols="3" class="d-flex flex-column gauche">
                        <v-row>
                            <v-col cols="12">
                                <v-card class="carte" title="Card title" text="..." variant="outlined">
                                    <v-card-title class="titre">
                                        VOS CRITERES
                                    </v-card-title>
                                    <v-card-text>
                                        2 chambres
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn>Click me</v-btn>
                                    </v-card-actions>
                                </v-card>                
                            </v-col>
                        </v-row>
                        
                        <v-row>
                            <v-col cols="12">
                                <v-btn>
                                    RECHERCHER
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-card class="carte" title="Card title" text="..." variant="outlined">
                                    <v-card-title class="titre">
                                        VOTRE SEJOUR
                                    </v-card-title>

                                    <v-row>
                                        <v-col>
                                            <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field
                                                        v-model="user.startDate"
                                                        :rules="requiredRule"
                                                        label="Date d'arrivée"
                                                        readonly
                                                        v-bind="attrs"
                                                        v-on="on"
                                                        color="#335c67"
                                                        required>
                                                    </v-text-field>
                                                </template>
                                                <v-date-picker v-model="user.startDate" :active-picker.sync="activePicker" 
                                                    :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)" 
                                                    min="1950-01-01" @change="save">
                                                </v-date-picker>
                                            </v-menu>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col>
                                            <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field
                                                        v-model="user.endtDate"
                                                        :rules="requiredRule"
                                                        label="Date de départ"
                                                        readonly
                                                        v-bind="attrs"
                                                        v-on="on"
                                                        color="#335c67"
                                                        required>
                                                    </v-text-field>
                                                </template>
                                                <v-date-picker v-model="user.endtDate" :active-picker.sync="activePicker" 
                                                    :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)" 
                                                    min="1950-01-01" @change="save">
                                                </v-date-picker>
                                            </v-menu>
                                        </v-col>
                                    </v-row>

                                </v-card>                
                            </v-col>
                        </v-row>
                    </v-col>

                    <v-col cols="9" class="d-flex flex-column droite">
                
                    </v-col>
                </v-row>
            </v-container>

        <footer>
            <Footer/>
        </footer>
    </div>
</template>

<script>
    import navbar from "@/components/global-components/layout/app-navbar.vue"
    import Footer from "@/components/global-components/layout/app-footer.vue"
    export default {
        name: 'HomeAcceuil',
        components:{
            navbar,
            Footer
        },
        data(){
            return{
                user: {
                    startDate : "",
                    endtDate : "",
                },

                requiredRule: [
                    v => !!v || 'Ce champ est requis',
                ],

                activePicker: null,
                menu: false,
                show1: false,
                show2: false
            }
    },

    methods: {
        save (date) {
            this.$refs.menu.save(date)
        }
    },
    
    watch: {
        menu (val) {
            val && setTimeout(() => (this.activePicker = 'YEAR'))
        },
    }

    }
</script>

<style scoped>
    .container{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .gauche{
        background: #eaf8bf;
        min-height: 100vh;
    }
    .droite{
        position: relative;
        background: #335c67;

    }
    .titre{
        background: #335c67;
    }
    .btn{
        background: #335c67;
        padding-top: 100px;
    }
    .carte{
        padding-bottom: 10px;
    }
</style>