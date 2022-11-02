<script setup lang="ts">

import Button from './Button.vue'
import Text from './Text.vue'

defineProps<{ msg: string }>()

</script>

<template>
  <h1>{{ msg }}</h1>

  <Button />
  <Text />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
