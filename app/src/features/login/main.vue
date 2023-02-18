<template>
    <v-container fluid class="container">
        <v-row>

            <v-col cols="7" class="d-flex flex-column gauche">
                <img src="">
            </v-col>
            
             <v-col cols="5" class="d-flex flex-column droite">
                <v-row class="bande"> 
                    <v-col cols="8" class="bleu"></v-col> 
                    <v-col cols="4" class="vert"></v-col> 
                </v-row>

                <v-row class="d-flex align-start">
                    <v-col class="d-flex justify-center ma-0"> 
                        <img @click="$router.push('./')" class="logo" src="@/assets/logo.svg">
                    </v-col> 
                </v-row>


                <!--connexion-->
                <v-row class="flex-column d-flex justify-center pa-5">
                    
                    <h2 class="titre">Connexion</h2>
                    <v-form v-model="valid" ref="form" lazy-validation>
                        <div class="flex-colomn pa-5">
                            <v-row>
                                <v-col>
                                    <v-row>
                                        <v-col>
                                            <v-text-field
                                                v-model="user.username"
                                                :rules="requiredRule"
                                                label="Login"
                                                color="#335c67"
                                                required>
                                            </v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col>
                                            <v-text-field
                                                v-model="user.password"
                                                label="Mot de passe"
                                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                                :type="show1 ? 'text' : 'password'"
                                                :rules="requiredRule"
                                                color="#335c67"
                                                required
                                                @click:append="show1 = !show1">
                                            </v-text-field>
                                        </v-col>
                                    </v-row>

                                </v-col>
                            </v-row>
                        </div>
                    </v-form>
 
                    <v-btn elevation="6" type="button" class="bouttonConnexion" :disabled="!valid" @click="authenticate()">Se connecter</v-btn> 
                   
                </v-row> 


                <!-- Inscirption --> 
                <v-row class="d-flex align-end pa-5">
                    <v-col> 
                        <p class="question">Vous ne possédez pas encore de compte ?</p> 
                        <v-btn elevation="6" @click="$router.push('./register')" type="boutton" class="bouttonInscription btn">Créer un Compte</v-btn> 
                    </v-col> 
                </v-row>
            </v-col>

        </v-row>
    </v-container>
    
</template>

<script>

import axios from 'axios'

export default {
    name: 'LoginConnexion',
    data(){
        return{
            valid: true,

            user: {
                username: "",
                password: ""
            },

            requiredRule: [
                v => !!v || 'Ce champ est requis',
            ],

            show1: false,
        }
    },

    methods: {
        authenticate() {
            if (this.$refs.form.validate()) {
                axios
                .post('http://localhost:8080/api/authenticate', this.user)
                .catch((error)=>{ console.log('authenticate Error', error) })
                .then((response)=>{ console.log('authenticate success', response.data) })
            }
        }
    },
}   

</script>

<style scoped>

    .bande{
        position: absolute;
        width: 100%;
        height: 10px;
        top: 0px;
    }

    .bleu{
        background: #335c67;
    }

    .vert{
        background: #eaf8bf;
    }

    .gauche{
        background: #eaf8bf;
        min-height: 100vh;
    }
    
    .droite{
        position: relative;
    }

    .container{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    
    .logo{
        width: 200px;
        cursor: pointer;
        margin-top: 15px;
    }


    .titre{
        margin-bottom: 15px;
        color:#335c67;
    }

    .bouttonInscription{
        border: solid #335c67 2px !important;
        width: 200px;
        background: #eaf8bf !important;
        color: #335c67 !important;
        text-transform: none;
        font-weight: 500;
        font-size: 18px;
    }

    .bouttonInscription:hover{
        color:#fff !important;
        background: #335c67 !important;
    }

    .question{
        font-size: 24px;
        font-weight: 500;
    }

    .bouttonConnexion{
        width: 150px;
        background: #335c67 !important;
        color: #fff !important;
        text-transform: none;
        font-weight: 500;
        font-size: 18px;
    }

    .bouttonConnexion:hover{
        color:#335c67 !important;
        background: #eaf8bf !important;
    }

</style>