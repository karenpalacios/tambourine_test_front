<template>
  <div class="home col-5 mx-auto py-5 mt-2">
    <div class="row justify-content-center px-3 mb-3">
        <img id="logo" class="img-thumbnail" src="https://media.glassdoor.com/sql/922389/tambourine-squarelogo-1495210428848.png">
    </div>
    <h1 class="text-center">Reset Password</h1>
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
        <div class="row justify-content-center my-3 px-3">
        <button @click.prevent="sendPasswordReset" class="btn btn-primary btn-block">
          Send Password Reset Link
        </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Auth from '../store/auth'
export default {
  data () {
    return {
      email: '',
      errors: []
    }
  },
  methods: {
    sendPasswordReset () {
      Auth.sendPasswordReset(this.email)
        .then((response) => {
          alert(response.data.message)
          this.$router.push({ name: 'Login' })
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
