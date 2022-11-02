<template>
  <div>
    {{data.foo}} - {{data.bar}}
  </div>
</template>
<script setup lang="ts">
import { MyData } from './model';


defineProps<{
  data: MyData
}>()
</script>
