<template>
    <div>
        <!--navbar-->
        <header>
            <navbar/>
        </header>

            <v-container fluid class="container">
                <v-row>
                    <v-col cols="3" class="d-flex flex-column gauche">
                        <div>
                            <v-card class="carte" variant="outlined">
                                <v-card-title class="titre">
                                    VOS CRITERES
                                </v-card-title>
                                <div>
                                    <div class="d-flex justify-space-between mb-6 critere">
                                        <v-card-text>
                                            2 chambres
                                        </v-card-text>
                                        <a class="iconclose">
                                            <v-icon>mdi-close</v-icon>
                                        </a>
                                    </div>
                                    <div class="d-flex justify-space-between mb-6 critere">
                                        <v-card-text>
                                            Bni ksila
                                        </v-card-text>
                                        <a class="iconclose">
                                            <v-icon>mdi-close</v-icon>
                                        </a>
                                    </div>
                                </div>
                                <v-card-actions>
                                    <v-btn>Réinitialiser</v-btn>
                                </v-card-actions>
                            </v-card>                
                        </div>
                        
                        <div class="btn">
                            <v-btn color="error">
                                RECHERCHER
                            </v-btn>
                        </div>

                        <div>
                            <v-card class="carte" title="Card title" text="..." variant="outlined">
                                <v-card-title class="titre">
                                    VOTRE SEJOUR
                                </v-card-title>
                                <div>
                                    <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field
                                                v-model="user.startDate"
                                                label="Date d'arrivée"
                                                solo
                                                v-bind="attrs"
                                                v-on="on"
                                                color="#335c67"
                                                >
                                            </v-text-field>
                                        </template>
                                        <v-date-picker v-model="user.startDate" :active-picker.sync="activePicker" 
                                            :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)" 
                                            min="1950-01-01" @change="save">
                                        </v-date-picker>
                                    </v-menu>
                                </div>
                                    
                                <div>
                                    <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field
                                                v-model="user.endDate"
                                                label="Date de départ"
                                                solo
                                                v-bind="attrs"
                                                v-on="on"
                                                color="#335c67"
                                                >
                                            </v-text-field>
                                        </template>
                                        <v-date-picker v-model="user.endDate" :active-picker.sync="activePicker" 
                                            :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)" 
                                            min="1950-01-01" @change="save1">
                                        </v-date-picker>
                                    </v-menu>
                                </div>
                                
                                <div>
                                    <v-select
                                        :items="items"
                                        label="Solo field"
                                        solo
                                    ></v-select>
                                </div>

                            </v-card>                
                        </div>

                        <div>
                            <v-card class="carte" variant="outlined">
                                <v-card-title class="titre">
                                    BUDGET (Par mois)
                                </v-card-title>

                                <v-slider
                                    v-model="value"
                                    label="How many?"
                                    persistent-hint
                                    step="100"
                                    thumb-label="always"
                                    ticks
                                ></v-slider>
                                <v-text-field v-model="value" variant="solo">
                                    <span>DA</span>
                                </v-text-field>
                                
                            </v-card>                
                        </div>

                    </v-col>

                    <v-col cols="9" class="d-flex flex-column droite">
                        <div class="d-flex justify-space-between mb-6">
                            <div>
                                <h4>Trier par </h4>
                                <v-chip-group multiple active-class="primary--text" >
                                    <v-chip v-for="tag in tags" :key="tag" >
                                        <span>{{ tag }}</span>
                                    </v-chip>
                                </v-chip-group>
                            </div>

                            <div class="btncarteliste">
                                <v-btn>
                                    <v-icon>mdi-format-align-justify</v-icon>
                                    <span class="hidden-sm-and-down">Liste</span>
                                </v-btn>

                                <v-btn>
                                    <v-icon></v-icon>
                                    <span class="hidden-sm-and-down">Carte</span>
                                </v-btn>
                            </div>

                        </div>

                        <h4>22 Appartement trouvés</h4>

                        <v-row dense>
                            <v-col
                            v-for="card in cards"
                            :key="card.title"
                            :cols="card.flex"
                            >
                            <v-card>
                                <v-img
                                :src="card.src"
                                class="white--text align-end"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                height="200px"
                                >
                                <v-card-title v-text="card.title"></v-card-title>
                                </v-img>

                                <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn icon>
                                    <v-icon>mdi-heart</v-icon>
                                </v-btn>

                                <v-btn icon>
                                    <v-icon>mdi-bookmark</v-icon>
                                </v-btn>

                                <v-btn icon>
                                    <v-icon>mdi-share-variant</v-icon>
                                </v-btn>
                                </v-card-actions>
                            </v-card>
                            </v-col>
                        </v-row>

                        <v-row dense>
                            <v-col
                            v-for="card in cards"
                            :key="card.title"
                            :cols="card.flex"
                            >
                            <v-card>
                                <v-img
                                :src="card.src"
                                class="white--text align-end"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                height="200px"
                                >
                                <v-card-title v-text="card.title"></v-card-title>
                                </v-img>

                                <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn icon>
                                    <v-icon>mdi-heart</v-icon>
                                </v-btn>

                                <v-btn icon>
                                    <v-icon>mdi-bookmark</v-icon>
                                </v-btn>

                                <v-btn icon>
                                    <v-icon>mdi-share-variant</v-icon>
                                </v-btn>
                                </v-card-actions>
                            </v-card>
                            </v-col>
                        </v-row>
                
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
                value: 0,
                cards: [
                    { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
                    { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
                    { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
                ],
                tags: [
                    'Prix',
                    'Surface',
                    'Nouveautée',
                    'Dates',
                    'Zone',
                ],
                items: ['1 personne', '2 personnes', '3 personnes', '4 personnes', 'Plus'],
                user: {
                    startDate : "",
                    endtDate : "",
                },

                activePicker: null,
                menu: false,
                menu1: false
            }
    },

    methods: {
        save (date) {
            this.$refs.menu.save(date)
        },
        save1 (date) {
            this.$refs.menu1.save(date)
        }
    },
    
    watch: {
        menu (val) {
            val && setTimeout(() => (this.activePicker = 'YEAR'))
        },
        menu1 (val) {
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
        

    }
    .titre{
        background: #335c67;
    }
    .btn{
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .btn button{
        width: 100%;
        color: #eaf8bf;
    }
    .carte{
        padding-bottom: 10px;
    }
    .btncarteliste {
        padding: 25px;
    }
    .iconclose {
        padding-right: 10px;
        padding-top: 10px;
    }
</style>