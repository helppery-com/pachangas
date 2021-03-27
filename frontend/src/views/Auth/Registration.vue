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
      <q-btn class="full-width" label="Submit" type="submit" color="primary"/>
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
        identifier: '',
        password: ''
      },
      error: false
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:1337/auth/local', {
          identifier: this.user.identifier,
          password: this.user.password,
        });
        if(response.data) {
          this.$store.commit('SET_USER', response.data);
          this.$router.push('/');
        }
      } catch (error) {
        console.log(error.message);
        this.error = true;
      }
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