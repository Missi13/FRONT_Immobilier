<template>
    <v-container fluid class="container">
        <v-row>
            
             <v-col cols="7" class="d-flex flex-column gauche">
                <v-row class="bande"> 
                    <v-col cols="8" class="bleu"></v-col> 
                    <v-col cols="4" class="vert"></v-col> 
                </v-row>

                <v-row class="d-flex align-start">
                    <v-col class="d-flex justify-center ma-0"> 
                        <img @click="$router.push('./')" class="logo" src="@/assets/logo.svg">
                    </v-col > 
                </v-row>


                <!--inscription-->
                <v-row class="inscription flex-column d-flex justify-center pa-5">
                    
                    <h2 class="titre">Inscription</h2>
                    <v-form v-model="valid" ref="form" lazy-validation>
                        <div class="flex-colomn pa-5">
                            <v-row>
                                <v-col cols="6">
                                    <v-row>
                                        <v-col cols="6">
                                            <v-text-field
                                                v-model="user.firstName"
                                                :rules= "nameRules"
                                                label="Prénom"
                                                color="#335c67"
                                                required>
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="6">
                                            <v-text-field
                                                v-model="user.lastName"
                                                :rules="nameRules"
                                                label="Nom"
                                                color="#335c67"
                                                required>
                                            </v-text-field> 
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col>
                                            <v-text-field
                                                v-model="user.phoneNumber"
                                                :rules="phoneRules"
                                                label="Télephone"
                                                color="#335c67"
                                                required>
                                            </v-text-field>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col>
                                            <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field
                                                        v-model="user.dateOfBirth"
                                                        :rules="dateRules"
                                                        label="Date de naissance"
                                                        readonly
                                                        v-bind="attrs"
                                                        v-on="on"
                                                        color="#335c67"
                                                        required>
                                                    </v-text-field>
                                                </template>
                                                <v-date-picker v-model="user.dateOfBirth" :active-picker.sync="activePicker" 
                                                    :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)" 
                                                    min="1950-01-01" @change="save">
                                                </v-date-picker>
                                            </v-menu>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col>
                                            <v-label v-model="user.phoneNumber" required>Genre</v-label>
                                        </v-col>
                                    </v-row>
                                </v-col>


                                

                                <v-col cols="6">
                                    <v-row>
                                        <v-col>
                                            <v-text-field
                                                v-model="user.email"
                                                :rules="emailRules"
                                                label="E-mail"
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
                                                :rules="passwordRules"
                                                color="#335c67"
                                                required
                                                @click:append="show1 = !show1">
                                            </v-text-field>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col>
                                            <v-text-field
                                                label="Confirmer le mot de passe"
                                                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                                                :type="show2 ? 'text' : 'password'"
                                                :rules="passworConfirmationdRules"
                                                color="#335c67"
                                                required
                                                @click:append="show2 = !show2">
                                            </v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </div>
                    </v-form>
 
                    <v-btn elevation="6" type="button" class="bouttonInscription" :disabled="!valid" @click="register()">Créer un Compte</v-btn> 
                   
                </v-row> 



                <!-- Connexion --> 
                <v-row class="d-flex align-end pa-5">
                    <v-col class="connexion"> 
                        <p class="question">Vous possédez déja un compte ?</p> 
                        <v-btn elevation="6" @click="$router.push('./login')" type="boutton" class="bouttonConnexion btn">Se connecter</v-btn> 
                    </v-col> 
                </v-row>
            </v-col>



            <v-col cols="5" class="d-flex flex-column droite">
                <img src="">
            </v-col>

        </v-row>
    </v-container>
</template>

<script>

import axios from 'axios'

export default{

    name: 'RegisterAccount',
    data(){
        return{
            valid: true,

            user: {
                login: "",
                firstName: "",
                lastName: "",
                phoneNumber: "",
                dateOfBirth : "",
                email: "",
                password: "",
                gender: "",
                accountType: "OWNER"
            },
            nameRules: [
                v => !!v || 'Ce champ est requis',
                v => /^(([a-zA-Z]*))$/.test(v) || 'Champ invalid',
                v => v.length <= 25 || 'Ce champ ne doit pas dépasser 25 caracrères',
            ],
            phoneRules: [
                v => !!v || 'Ce champ est requis',
                v => /^((0+([0-9]{9}))|(\+([0-9]{2,3} )+([1-9] )+[0-9]{8}))$/.test(v) || 'Champ invalid',
                v => v.length <= 25 || 'Ce champ ne doit pas dépasser 25 caracrères',
            ],
            emailRules: [
                v => !!v || 'Ce champ est requis',
                v => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/.test(v) || 'E-mail invalid',
            ],
            passwordRules: [
                v => !!v || 'Ce champ est requis',
                v => /^((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/.test(v) || 'Utilisez au moin une majuscule et une minuscule et un chiffre',
                v => v.length >= 8 || 'Ce champs doit contenir au moin 8 caractères',
            ],

            passworConfirmationdRules: [
                v => v == this.user.password || 'Le mot de passe est erroné'
            ],
            dateRules: [
                v => !!v || 'Ce champ est requis',
            ],

            activePicker: null,
            menu: false,
            show1: false,
            show2: false
        }
    },

    methods: {
        register() {
            if (this.$refs.form.validate()) {
                axios
                .post('http://localhost:8080/api/register', this.user)
                .catch((error)=>{ console.log('registration Error', error) })
                .then(()=>{ console.log('registration succes'), this.getData })
            }
        },
        
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
        position: relative;
    }

    
    .droite{
        background: #eaf8bf;
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

    .champs{
        position: relative;
        margin-bottom: 30px;
    }

    .formGauche{
        padding-right: 25px;
    }

    .formDroite{
        padding-left: 25px;
    }

    input, select{
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #000;
        letter-spacing: 1px;
        border: none;
        border-bottom: 1.5px solid #335c67;
        outline: none;
        background: transparent;
    }

    .champs label{
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: silver;
        pointer-events: none;
        transition: 0.4s;
    }

    .champs input:focus ~ label,
    .champs input:valid ~ label{
        top: -21px;
        font-size: 15px;
        color: #335c67;
    }

    .bouttonInscription{
        width: 200px;
        background: #335c67 !important;
        color: #fff !important;
        text-transform: none;
        font-weight: 500;
        font-size: 18px;
    }

    .bouttonInscription:hover{
        color:#000 !important;
        background: #eaf8bf !important;
    }

    .question{
        font-size: 24px;
        font-weight: 500;
    }

    .bouttonConnexion{
        border: solid #335c67 2px !important;
        width: 150px;
        background: #eaf8bf !important;
        color: #335c67 !important;
        text-transform: none;
        font-weight: 500;
        font-size: 18px;
    }

    .bouttonConnexion:hover{
        color:#fff !important;
        background: #335c67 !important;
    }

    .text-gray{
        color: gray
    }

    .form-control{
        border-radius: 0px;
        border-color: unset;
        box-shadow: none;
    }
    .form-control:focus {
        border-color: unset;
        box-shadow: none;
    }

    .genres{
        display: flex;
        justify-content: space-between;
    }

    .femme, .homme{
        width: 45%;
        font-size: 15px;
        padding: 5px;
        border-radius: 10px;
        font-weight: bold
    }

    .dateNaissance, .genre{
        font-weight: 800;
        color: #335c67;
    }

    .champs{
        color: #335c67;
    }


    input:checked + .labelGenre{
        background-color: #335c67;
        color:#fff;
    }

    input + .labelGenre{
        color: Gray;
    }

</style>