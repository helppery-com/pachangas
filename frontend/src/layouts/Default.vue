<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-dark text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-toolbar-title>
          <q-avatar><img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg"></q-avatar>
        </q-toolbar-title>
        <div><router-link to="/profile">Profile</router-link> </div>
        <q-input dark dense standout v-model="text" input-class="text-right" class="q-mx-md">
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
          </template>
        </q-input>
        <q-btn flat v-if="!user">Login</q-btn>
        <q-avatar v-else>
          <img src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left" overlay bordered>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data () {
    return {
      left: false,
      text: ''
    }
  },
  computed: {
    ...mapGetters({
      user: 'user',
    })
  }
}
</script>
