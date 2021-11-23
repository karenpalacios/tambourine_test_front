<template>
  <div class="home col-5 mx-auto py-5 mt-5">
    <div class="row justify-content-center px-3 mb-3">
        <img id="logo" class="img-thumbnail" src="https://media.glassdoor.com/sql/922389/tambourine-squarelogo-1495210428848.png">
    </div>
    <h1 class="text-center">Tambourine Test</h1>
    <div class="card">
      <div class="card-body">
        <div class="form-group">
          <label for="email">Email address:</label>
          <input
            type="email"
            v-model="email"
            class="form-control"
            id="email"
          />
          <span class="text-danger" v-if="errors.email">
            {{ errors.email[0] }}
          </span>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            v-model="password"
            class="form-control"
            id="password"
          />
          <span class="text-danger" v-if="errors.password">
            {{ errors.password[0] }}
          </span>
        </div>
        <div class="row justify-content-center my-3 px-3">
        <button @click.prevent="login" class="btn btn-primary btn-block">
          Login
        </button>
        </div>
        <div class="row justify-content-center my-2"><router-link to="/password-recovery">Forgot Password?</router-link></div>
      </div>
      <div class="bottom text-center mb-5">
        <p href="#" class="sm-text mx-auto mb-3"><router-link to="/register">Create new account</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      errors: []
    }
  },
  methods: {
    login () {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'Dashboard' })
        })
        .catch(error => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors
          }
        })
    }
  }
}
</script>
