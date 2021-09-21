<template>
  {{ routerParams }}
</template>

<script lang="ts">
import Taro from '@tarojs/taro';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const { router } = Taro.getCurrentInstance();

    const routerParams = computed(() => router?.params);

    return {
      routerParams
    };
  },
});
</script>

<style>
</style>