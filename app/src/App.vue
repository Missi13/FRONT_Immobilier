<template>
  <v-app>
    <DevTools/>
    <router-view/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import DevTools from "@/components/global-components/app-devtool.vue"
import { RouterView } from 'vue-router';

export default Vue.extend({
  name: 'App',

  components: {
    DevTools,
    RouterView
},

  data: () => ({
    //
  }),
});
</script>
