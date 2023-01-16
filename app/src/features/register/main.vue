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
                        <v-form v-model="valid">
                            <v-container class="flex-colomn">
                                <v-row>
                                    <v-col cols="6">
                                        <v-row>
                                            <v-col cols="6">
                                                <v-text-field v-model="user.firstName" :rules="nameRules" :counter="10" label="Prénom" required></v-text-field>
                                            </v-col>
                                            <v-col cols="6">
                                                <v-text-field v-model="user.lastName" :rules="nameRules" :counter="10" label="Nom" required></v-text-field> 
                                            </v-col>
                                        </v-row>
                                    </v-col>

                                    <v-col cols="6">
                                        <v-row>
                                            <v-col cols="12">
                                                <v-text-field v-model="user.email" :rules="emailRules" label="E-mail" required></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-form>
 
                        <!-- <v-row class="d-flex justify-content-center"> 
                            <v-col cols="6" class="formGauche"> 
                                <v-form> 
                                    <v-col clos="6"> 
                                        <div class="champs"> 
                                            <input type="text" maxlength="25" class="form-control"  :class="isLastNameValid()" required v-model="user.lastName"> 
                                            <label>Nom</label> 
                                        </div> 
                                    </v-col> 
 
                                    <div class="col-6"> 
                                        <div class="champs"> 
                                            <input type="text" maxlength="25" class="form-control" :class="isFirstNameValid()" required v-model="user.firstName"> 
                                            <label>Prénom</label> 
                                        </div> 
                                    </div> 
                                </v-form> 
 
                                <v-row> 
                                    <div class="col"> 
                                        <div class="champs"> 
                                            <input type="text" maxlength="25" class="form-control" :class="isPhoneNumberValid()" required v-model="user.phoneNumber"> 
                                            <label>Numéro de téléphone</label> 
                                        </div> 
                                    </div> 
                                </v-row> 
 
                                <label class="dateNaissance">Date de naissance :</label>                                   
                            </v-col>-->
 
                            <!-- <div class="formGauche col-6"> 
                                <v-row> 
                                    <div class="col"> 
                                        <div class="champs"> 
                                            <input type="text" maxlength="25" class="form-control" :class="isEmailValid()" required v-model="user.email"> 
                                            <label>E-mail</label> 
                                        </div> 
                                    </div> 
                                </v-row> 
 
                                <v-row> 
                                    <div class="col">  
                                        <div class="champs"> 
                                            <input type="password" maxlength="25" class="form-control" :class="isPasswordValid()" required v-model="user.password"> 
                                            <label>Mot de passe</label> 
                                        </div> 
                                    </div> 
                                </v-row> 
 
                                <label class="genre">Genre :</label> 
 
                                <v-row class="text-center justify-content-center pt-2"> 
                                    <div class="genres m-auto"> 
                                        <input type="radio" class="btn-check" name="inlineRadioOptions" id="homme" value="HOMME" required v-model="user.gender"> 
                                        <label class="homme labelGenre form-control" for="homme">Homme</label> 
                                     
                                        <input type="radio" class="btn-check" name="inlineRadioOptions" id="femme" value="FEMME" required v-model="user.gender"> 
                                        <label class="femme labelGenre form-control" for="femme">Femme </label> 
                                    </div> 
                                </v-row> 
 
                            </div>
                        </v-row>  -->
 
                        <v-btn type="button" class="bouttonInscription btn" @click="register()">Créer un Compte</v-btn> 
                    
                </v-row>



                <!-- Connexion --> 
                    <!-- Connexion -->
                <!-- Connexion --> 
                <v-row class="d-flex align-end pa-5">
                    <v-col class="connexion"> 
                        <p class="question">Vous possédez déja un compte ?</p> 
                        <v-btn @click="$router.push('./login')" type="boutton" class="bouttonConnexion btn">Se connecter</v-btn> 
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
import { utils } from '@/utils'

export default{

    name: 'RegisterAccount',
    data(){
        return{
            valid: false,

            user: {
                login: "missi",
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
                v => !!v || 'Name is required',
                v => v.length <= 25 || 'Name must be less than 25 characters',
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
        }
    },

    methods: {
        register() {
            axios
                .post('http://localhost:8080/api/register', this.user)
                .catch((error)=>{ console.log('registration Error', error) })
                .then(()=>{ console.log('registration succes'), this.getData })
        },

        isFirstNameValid() {
            return utils.isNameValid(this.user.firstName)
        },

        isLastNameValid() {
            return utils.isNameValid(this.user.lastName)
        },

        isEmailValid() {
            return utils.isEmailValid(this.user.email)
        },

        isPhoneNumberValid() {
            return utils.isPhoneNumberValid(this.user.phoneNumber)
        },

        isPasswordValid() {
            return utils.isPasswordValid(this.user.password)
        }
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
        background: #335c67;
        color: #fff;
        font-weight: 400;
        font-size: 18px;
    }

    .bouttonInscription:hover{
        color:#000;
        background: #eaf8bf;
    }

    .question{
        font-size: 24px;
        font-weight: 500;
    }

    .bouttonConnexion{
        border: solid #335c67 2px;
        width: 150px;
        background: #eaf8bf;
        color: #335c67;
        font-weight: 400;
        font-size: 18px;
    }

    .bouttonConnexion:hover{
        color:#fff;
        background: #335c67;
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

    .is-invalid:focus{
        border-color: red;
    }

    .is-invalid{
        border-color: red;
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