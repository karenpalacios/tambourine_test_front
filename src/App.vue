<template>
  <div id="app">
   <div id="nav">
     <button type="button" @click="logout()" v-if="isLogged">
       Logout
     </button>
   </div>
   <router-view/>
    <div id="footer" class='mt-2+'>
      <a target="_blank" href="https://www.linkedin.com/in/karen-palacios-105bb722/">by Karen Palacios</a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'isLogged'
    ])
  },

  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
