<template>
  <q-card class="login" flat>
    <form method="post" @submit.prevent="login">
    <q-card-section>
      <div class="title">
      <label class="text-h6">Login</label><span v-if="error" class="text-red">Credentials error</span>
      </div>
    </q-card-section>
    <q-card-section class="q-gutter-y-md">
      <q-input name="userid" type="text" outlined v-model="user.identifier" dense />
      <q-input name="password" type="password" outlined v-model="user.password" dense />
    </q-card-section>
    <q-card-section>
      <q-btn class="full-width" label="Login" type="submit" :loading="loading" color="primary"/>
    </q-card-section>
    <q-card-section>
      <div>Don't have an account? <q-btn dense to="/registration" flat color="info">Registration</q-btn> </div>
    </q-card-section>
    </form>
  </q-card>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return{
      user: {
        identifier: '',
        password: ''
      },
      error: false,
      loading: false
    }
  },
  methods: {
    async login() {
      this.loading = true;
      setTimeout(async() => {
        try {
          const response = await axios.post(`${this.$project.CMS}auth/local`, this.user);
            if(response.data){
              this.$store.commit('SET_USER', response.data);
              this.$router.push('/');
              this.loading = false;
            }
        } catch (error) {
          console.log(error.message);
          this.error = true;
          this.loading = false;
        }
      }, 2000);
    }
  }
}
</script>

<style scoped>
.login{
  width: 100%;
  max-width: 300px;
}
.title{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>