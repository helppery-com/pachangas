<template>
  <q-card class="login" flat>
    <form method="post" @submit.prevent="registration">
      <q-card-section>
        <div class="title">
        <label class="text-h6">Registration</label><span v-if="error" class="text-red">Input error</span>
        </div>
      </q-card-section>
      <q-card-section class="q-gutter-y-md">
        <q-input name="username" label="Username" type="text" outlined v-model="user.username" dense autocomplete="off" />
        <q-input name="email" label="Email" type="email" outlined v-model="user.email" dense  autocomplete="off"/>
        <q-input name="password" label="Password" type="password" outlined v-model="user.password" dense autocomplete="off" />
      </q-card-section>
      <q-card-section>
        <q-btn class="full-width" label="Registration" type="submit" color="primary" :loading="loading" />
      </q-card-section>
      <q-card-section>
      <div>If you registered? <q-btn to="/login" flat dense color="info">Login</q-btn> </div>
    </q-card-section>
    </form>
  </q-card>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      user: {
        username: '',
        email: '',
        provider: '',
        password: '',
        resetPasswordToken: '',
        confirmationsToken: '',
        confirm: false,
        block: false,
        role: ''
      },
      error: false,
      loading: false
    }
  },
  methods: {
    async registration() {
      this.loading = true;
      setTimeout(async() => {
        try {
          const response = await axios.post(`${this.$project.CMS}auth/local/register`, this.user);
          if(response.data) {
            this.loading = false;
            this.$router.push('/login');
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