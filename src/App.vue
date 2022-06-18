<template>
  <p>{{ greeting }} World</p>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const greeting = ref('greeting');
</script>

<style>
  p {
    font-size: 16px;
    font-weight: bold;
    color: black;
    text-align: center;
  }
</style>
