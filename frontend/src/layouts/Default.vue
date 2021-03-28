<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-dark text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-toolbar-title>
          <q-avatar><img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg"></q-avatar>
        </q-toolbar-title>
        <q-btn to="/" flat>Home</q-btn>
        <q-input dark dense standout v-model="text" input-class="text-right" class="q-mx-md">
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
          </template>
        </q-input>
        <q-btn flat v-if="!user" to="/login">Login</q-btn>
        <q-btn-dropdown v-else flat :label="user.username">
          <div class="row no-wrap q-pa-md">
            <div class="column">
              <div class="text-h6 q-mb-md">Settings</div>
              <q-btn to="/profile" flat>Profile</q-btn>
            </div>
            <q-separator vertical inset class="q-mx-lg" />
            <div class="column items-center">
              <q-avatar size="72px">
                <img src="http://localhost:1337/uploads/c1uh18_V8_I48_Gq1o_N9_X_w1u_HCV_4_Pdgosw5_G_Bs_WZH_z8g_YO_8_LUMUH_Hup_SH_1_Qe2_Amku_958bae01f0.jpeg">
              </q-avatar>
              <div class="text-subtitle1 q-mt-md q-mb-xs">{{user.surname}}</div>
              <q-btn color="black" label="Logout" glossy size="sm" @click="logout" v-close-popup/>
            </div>
          </div>
        </q-btn-dropdown>
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
import { mapGetters, mapActions } from "vuex";
export default {
  data () {
    return {
      left: false,
      text: ''
    }
  },
  methods: {
    ...mapActions({
      logout: 'logout'
    })
  },
  computed: {
    ...mapGetters({
      user: 'user',
    })
  }
}
</script>
