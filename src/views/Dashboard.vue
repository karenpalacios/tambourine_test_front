<template>
  <div class='home col-8 mx-auto py-5 mt-2'>
    <h1>Dashboard</h1>
    <div class='card'>
      <div class='card-body' v-if='user'>
        <h3>Hello, {{ user.name }}</h3>
        <span>{{ user.email }}</span>
      </div>
    </div>
  </div>
</template>

<script>
/* import Auth from '../store/auth' */
export default {
  data () {
    return {
      user: null
    }
  },
  mounted () {
    const userInfo = localStorage.getItem('user')
    if (userInfo) {
      const userData = JSON.parse(userInfo)
      this.user = userData.user
    }
    /* Auth.auth().then(response => {
      this.user = response.data;
    }); */
  }
}
</script>
