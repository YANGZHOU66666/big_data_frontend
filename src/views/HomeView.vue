<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const isVIP = ref(false);
const dialogVisible = ref(false);
</script>

<template>
  <div class="header">
    <div class="title" @click="router.push('/search')">
      PaperHub
    </div>
    <div class="prompt" v-if="!isVIP" @click="dialogVisible = true">
      Get PaperHub Pro
    </div>
    <div class="text" v-if="isVIP">
      Already have PaperHub Pro
    </div>
  </div>
  <RouterView />
  <el-dialog
    title="Get PaperHub Pro"
    v-model="dialogVisible"
    width="30%"
    >
    <div class="btn-group">
      <div class="white-btn" @click="dialogVisible = false">No</div>
      <div class="empty"></div>
      <div class="black-btn" @click="isVIP = true; dialogVisible = false">Yes</div>
    </div>
  </el-dialog>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  box-shadow: 0 0 15px #888;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: rgb(4,4,25);
  .title {
    margin-left: 24px;
    font-size: 32px;
    font-weight: bold;
    background: linear-gradient(to right, #EE82EE, #00D1FF); /*设置渐变的方向从左到右 颜色从ff0000到ffff00*/
    -webkit-background-clip: text;/*将设置的背景颜色限制在文字中*/
    -webkit-text-fill-color: transparent;/*给文字设置成透明*/
    background-clip: text;
    user-select: none;
    cursor: pointer;
  }
  .prompt {
    margin-right: 24px;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    border-radius: 10px;
    border: 1px solid #fff;
    padding: 10px 20px;
    user-select: none;
  }
  .prompt:hover {
    background: #fff;
    color: rgb(4,4,25);
    cursor: pointer;
  }
  .text {margin-right: 24px;
    font-size: 18px;
    color: #fff;
    padding: 10px 20px;
    user-select: none;
  }
}
.btn-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  .white-btn {
    background: #fff;
    color: rgb(4,4,25);
    border-radius: 10px;
    border: 1px solid rgb(4,4,25);
    padding: 10px 20px;
    margin-right: 10px;
    cursor: pointer;
    flex:2;
    text-align: center;
    font-size: 16px;
  }
  .white-btn:hover {
    background: rgb(4,4,25);
    color: #fff;
    cursor: pointer;
  }
  .empty{
    flex:8;
  }
  .black-btn {
    background: rgb(4,4,25);
    color: #fff;
    border-radius: 10px;
    border: 1px solid rgb(4,4,25);
    padding: 10px 20px;
    cursor: pointer;
    flex:2;
    text-align: center;
    font-size: 16px;
  }
  .black-btn:hover {
    background: #333;
    color: #fff;
    cursor: pointer;
  }
}

</style>