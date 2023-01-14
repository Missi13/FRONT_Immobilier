<template>
    
    <div class="devtool">

        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="gray" dark v-bind="attrs" v-on="on">DEV</v-btn>
            </template>
                <v-list>
                    <v-list-item>
                        <router-link to="/">Acceuil</router-link>
                    </v-list-item>

                    <v-list-item>
                        <router-link to="/register">Inscription</router-link>
                    </v-list-item>

                    <v-list-item>
                        <router-link to="/login">connexion</router-link>
                    </v-list-item>
                </v-list>
        </v-menu>
    </div>
</template>


<script>
export default {
    name:"app-devtool",

    data: () => ({
      items: [
        { title: 'Acceuil' },
        { title: 'Inscription' },
        { title: 'connexion' }
      ],
    }),
}
</script>


<style lang="css" scoped>

    .devtool {
        position: fixed;
        top: 15px;
        right: 10px;
        width: 100px;
        z-index: 1;
    }
    
</style>
