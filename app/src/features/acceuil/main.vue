<template>
    <div>

        <!--navbar-->
        <header>
            <navbar/>
        </header>

        <div>  
            <v-parallax dark src="@/assets/cover.jpg">
                <v-row align="center" justify="center">
                    <v-col class="text-center" cols="12">
                        <h1 class="text-h4 font-weight-thin mb-4">
                            Bienvenu dans notre studio
                        </h1>
                        <h4 class="subheading">
                            C'EST UN PLAISIR DE VOUS RENCONTRER
                        </h4>
                    </v-col>
                </v-row>
            </v-parallax>

           <div class="label-Services text-h4 mb-4 text-center">
             <v-label>SERVICES</v-label>
           </div>
            <div class="cards">
                <div class="card1">
                    <v-card class="mx-auto" max-width="344" elevation="8" outlined shaped>
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>
                        <v-card-title class="justify-center">
                            Villa
                        </v-card-title>

                        <v-card-subtitle>

                        </v-card-subtitle>
                    </v-card>
                </div>

                <div class="card2">
                    <v-card class="mx-auto" max-width="344" elevation="8" outlined shaped>
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>
                        <v-card-title class="justify-center">
                            Appartement
                        </v-card-title>

                        <v-card-subtitle>
                        
                        </v-card-subtitle>
                    </v-card>
                </div>

                <div class="card3">
                    <v-card class="mx-auto" max-width="344" elevation="8" outlined shaped>
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>
                        <v-card-title class="justify-center">
                            Studio
                        </v-card-title>

                        <v-card-subtitle>

                        </v-card-subtitle>
                    </v-card>
                </div>
            </div>
            <div>
                <div class="label-Services text-h4 mb-4 text-center">
                    <v-label>À PROPOS</v-label>
                </div>
                <div class="text-Apropos">
                    <p class="text-justify">
                        Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.

                        Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
                    </p>
                </div>
            </div>

            <div>

                <div class="label-Services text-h4 mb-4 text-center">
                    <v-label>NOTRE FORMIDABLE EQUIPE</v-label>
                </div>

                <div class="cardteam">

                    <div class="avatar">
                        <v-avatar color="teal" size="200" >
                            <img src="@/assets/anis.jpg" alt="John">
                        </v-avatar>

                        <v-title>
                            <h2>Anis KETAM</h2>
                        </v-title>

                        <v-subtitle>
                            software engineer
                        </v-subtitle>
                    </div>

                    <div class="avatar">

                        <v-avatar color="teal" size="200">
                            <img src="@/assets/missi.jpg" alt="John">
                        </v-avatar>

                        <v-title class="font-weight-black">
                            <h2> Micipsa ADEL</h2>
                        </v-title>

                        <v-subtitle>
                            software engineer
                        </v-subtitle>

                    </div>

                </div>
            </div>

            <div>
                <v-parallax dark src="@/assets/contact.jpeg" >
                    <div class="text-h4 text-center">
                        <v-label>CONTACTE-NOUS</v-label>
                    </div>
                    <v-row align="center" justify="center">
                            <v-form class="form">
                                <div class="formcontact">    
                                    <div>
                                        <v-text-field label="Your Name*" style="width: 400px; height: 50px; padding-right: 10px;" solo></v-text-field>
                                        <v-text-field label="Your Email*" style="width: 400px; height: 50px; padding-right: 10px;" solo></v-text-field>
                                        <v-text-field label="Your Phone*" style="width: 400px; height: 50px; padding-right: 10px;" solo></v-text-field>
                                    </div>
                                    <div>
                                        <v-textarea solo name="input-10-4" label="Your Message*" style="width: 400px; padding-left: 10px;" ></v-textarea>
                                    </div>
                                </div>    
                                <div class="button">
                                    <v-btn
                                        color="#335c67"
                                        elevation="7"
                                        rounded
                                        style="align-items: center;"
                                    >Envoyer</v-btn>
                                </div>
                            </v-form>
                        
                    </v-row>
                </v-parallax>
            </div>
        </div>

        <footer>
            <Footer/>
        </footer>
    </div>
</template>

<script>
import navbar from "@/components/global-components/layout/app-navbar.vue"
import Footer from "@/components/global-components/layout/app-footer.vue"
export default {
    name: 'MonAcceuil',
     data: () => ({
        elevations: [6, 12, 18],
    }),

    components:{
        navbar,
        Footer
    },

}
</script>

<style scoped>
    header {
        box-sizing: border-box;
        padding: 0px;
        margin: 0px;
    }

    .label-Services {
        padding: 10px;
        color: #FFFFFF;
    }

    .cards {
        display:flex;
        justify-content: center;
    }

    .card1 {
        padding-left: 10px;
        padding-right: 10px;
    }

    .card3 {
        padding-left: 10px;
        padding-right: 10px;
    }

    .text-Apropos p {
        margin-left: 120px;
        margin-right: 120px;
    }

    .cardteam {
        display:flex;
        justify-content: space-around; 
    }

    .avatar{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .formcontact {
        display: flex;
        justify-content: space-around;
        padding: 20px;
    }

    .button {
        align-items: center;
    }

    .form {
        display:flex;
        flex-direction:column;
        align-items: center;
    }
</style>
