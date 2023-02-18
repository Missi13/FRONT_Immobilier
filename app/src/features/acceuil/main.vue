<template>
    <div>

        <!--navbar-->
        <header>
            <navbar/>
        </header>

    </div>
</template>

<script>
import navbar from "@/components/global-components/layout/app-navbar.vue"
export default {
    name: 'MonAcceuil',
    data(){
        return{

        }
    },

    components:{
        navbar
    },

}
</script>

<style>
    header {
        box-sizing: border-box;
        padding: 0px;
        margin: 0px;
    }

</style>
