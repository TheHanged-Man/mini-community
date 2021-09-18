<template>
  {{ message }}
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    message: {
      type: String,
      default: 'hello minapp!'
    }
  },
  setup(props) {
    const message = ref(props.message);

    return {
      message
    }
  }
})
</script>

<style>
</style>