<template>
    <div class="container-fluid">
        <v-row>
            
            <div class="gauche col-7">
                <v-row class="bande">
                    <div class="col-9 bleu"></div>
                    <div class="col-3 vert"></div>
                </v-row>

                <div class="container">
                    <v-row class="justify-content-center">
                        <img @click="$router.push('./')" class="logo" src="@/assets/logo.svg" alt="logo">
                    </v-row >

                    <!-- Incription -->
                    <div class="inscription">
                        <h2 class="titre">Inscription</h2>

                        <v-form class="row justify-content-center">
                            <div class="formGauche col-6">
                                <v-row>
                                    <div class="col-6">
                                        <div class="champs">
                                            <input type="text" maxlength="25" class="form-control"  :class="isLastNameValid()" required v-model="user.lastName">
                                            <label>Nom</label>
                                        </div>
                                    </div>

                                    <div class="col-6">
                                        <div class="champs">
                                            <input type="text" maxlength="25" class="form-control" :class="isFirstNameValid()" required v-model="user.firstName">
                                            <label>Prénom</label>
                                        </div>
                                    </div>
                                </v-row>

                                <v-row>
                                    <div class="col">
                                        <div class="champs">
                                            <input type="text" maxlength="25" class="form-control" :class="isPhoneNumberValid()" required v-model="user.phoneNumber">
                                            <label>Numéro de téléphone</label>
                                        </div>
                                    </div>
                                </v-row>

                                <label class="dateNaissance">Date de naissance :</label>

                                <v-date-picker></v-date-picker>

                                <!-- <div class="row">
                                    <div class="col-4">
                                        <div class="champs">
                                            <input type="number" min=1 max="31" required v-model="date.day">
                                            <label class="text-center">Jour</label>
                                        </div>
                                    </div>

                                    <div class="col-4">
                                        <div class="champs">
                                            <select placeholder="Mois" required v-model="date.month">
                                                <option class="text-gray" value="" selected>Mois</option>
                                                <option value="01">Janvier</option>
                                                <option value="02">Février</option>
                                                <option value="03">Mars</option>
                                                <option value="04">Avril</option>
                                                <option value="05">Mai</option>
                                                <option value="06">Juin</option>
                                                <option value="07">Juillet</option>
                                                <option value="08">Août</option>
                                                <option value="09">Septembre</option>
                                                <option value="10">Octobre</option>
                                                <option value="11">Novembre</option>
                                                <option value="12">Décembre</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-4">
                                        <div class="champs">
                                            <input type="number" min=1900 max="2022" required v-model="date.year">
                                            <label>Année</label>
                                        </div>
                                    </div>
                                </div> -->
                            </div>

                            <div class="formGauche col-6">
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
                        </v-form>

                        <button type="button" class="bouttonInscription btn" @click="register()">Créer un Compte</button>
                    </div>

                    <!-- Connexion -->
                    <div class="connexion">
                        <p class="question">Vous possédez déja un compte ?</p>
                        <button @click="$router.push('./login')" type="boutton" class="bouttonConnexion btn">Se connecter</button>
                    </div>
                </div>
            </div>



            <div class="droite col-5">
                <img src="" alt="">
            </div>
        </v-row>
    </div>
</template>

<script>

import axios from 'axios'
import { utils } from '@/utils'

export default{

    name: 'RegisterAccount',
    data(){
        return{
            due: null,

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
        },

        isDayValid(){
            return utils.isDayValid(this.user.dateOfBirth.day)
        },
        
        isMonthValid(){
            return utils.isMonthValid(this.user.dateOfBirth.month)
        },

        isYearValid(){
            return utils.isYearValid(this.user.dateOfBirth.year)
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
        min-height: 100vh;
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
        color: #335c67;
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

    input:checked + .labelGenre{
        background-color: #335c67;
        color:#fff;
    }

    input + .labelGenre{
        color: Gray;
    }

</style>