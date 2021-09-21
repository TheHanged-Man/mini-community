<template>
  <view class="index">
    <!-- <nut-swiper :init-page="0" :pagination-visible="true" pagination-color="#426543" auto-play="3000"> -->
      <!-- <nut-swiper-item>
        <img src="http://flagnet.imu.edu.cn/Upload/Default1.jpg" alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img src="http://flagnet.imu.edu.cn/Upload/20201127/big_202011271558012696.jpg" alt="" />
      </nut-swiper-item> -->
    <!-- </nut-swiper> -->
    <view>
      <img src="" alt="">
    </view>
    {{ msg }}
    <view class="btn">
      <nut-button type="primary" @click="handleClick('text', msg2, true)">点我</nut-button>
    </view>
    <nut-toast :msg="msg" v-model:visible="show" :type="type" :cover="cover" />
  </view>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
export default {
  name: 'Index',
  components: {
    
  },
  setup(){
    const state = reactive({
      msg: '欢迎使用 NutUI3.0 开发小程序',
      msg2: '你成功了～',
      type: 'text',
      show: false,
      cover: false
    });

    const handleClick = (type: string, msg: string, cover: boolean = false) => {
      state.show = true;
      state.msg2 = msg;
      state.type = type;
      state.cover = cover;
    };

    return {
      ...toRefs(state),
      handleClick
    }
  }
}
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
