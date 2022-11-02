<template>
  <div>
    {{double}}
  </div>
</template>
<script lang="ts" setup>
import { useCounter } from './counter'

const {double} = useCounter()
</script>
