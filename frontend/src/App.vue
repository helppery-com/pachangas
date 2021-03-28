<template>
    <router-view/>
</template>

<script>
export default {
  created () {
    this.$q.dark.set(true)
  }
}
</script>