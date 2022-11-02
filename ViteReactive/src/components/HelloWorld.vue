<script setup lang="ts">

import Button from './Button.vue'

defineProps<{ msg: string }>()

</script>

<template>
  <h1>{{ msg }}</h1>

  <Button />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
