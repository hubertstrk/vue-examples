<template>
  <!-- <button type="button" @click="random()">{{foo}}</button> -->

  <Bar v-bind="{data}" />

</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import Bar from './Bar.vue'

const data = ref({})

const create = computed(() => {
  return {foo: Math.random(), bar: Math.random()}
})

onMounted(() => {
  setTimeout(() => {
    console.log('setTimeout')
    data.value = {
      foo: 1000, bar: 1000
    }
  }, 3000)
})

data.value = create.value

</script>

<style scoped>
</style>
