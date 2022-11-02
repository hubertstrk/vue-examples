<template>
  <div class="about">
    <div>{{ value }}</div>
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts" setup>
import { useValue } from "../Composable";

const { value } = useValue();
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
