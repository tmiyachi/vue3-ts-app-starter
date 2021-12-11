<template>
  <p>{{ greeting }} World</p>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const greeting = ref('greeting');

      return {
        greeting,
      };
    },
  });
</script>

<style>
  p {
    font-size: 16px;
    font-weight: bold;
    color: black;
    text-align: center;
  }
</style>
