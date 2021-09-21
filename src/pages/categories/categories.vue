<template>
  {{ mes }}
  <nut-button @click="handleClick">1234</nut-button>
</template>

<script lang="ts">
import Taro from '@tarojs/taro';
import { defineComponent, ref } from 'vue';
import routes from '@/routes';

export default defineComponent({
  props: {
    message: {
      type: String,
      default: 'hello minapp!'
    }
  },
  setup(props) {
    const mes = ref(props.message);

    const handleClick = () => {
      Taro.navigateTo({
        url: routes.secondGradePages.PostList + '?id=123'
      })
    }

    return {
      mes,
      handleClick
    }
  }
})
</script>

<style>
</style>