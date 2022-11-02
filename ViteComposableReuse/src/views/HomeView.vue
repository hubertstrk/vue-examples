<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";

import { useValue } from "../Composable";

const { value, setValue } = useValue();

setTimeout(() => {
  setValue(10);
}, 2000);
</script>

<template>
  <main>
    <div>{{ value }}</div>

    <TheWelcome />
  </main>
</template>
