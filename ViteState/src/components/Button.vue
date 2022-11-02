<template>
  <div>
    <button type="button" @click="increase">increase</button>
  </div>
  <div>{{double}}</div>
</template>
<script lang="ts" setup>
import { useCounter } from './counter'

const {increase, double} = useCounter()

</script>
