<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const citedPaper = ref([
    "Artificial Intelligence: A Modern Approach. Pearson Education Limited.",
    "The future of employment: How susceptible are jobs to computerisation? Technological Forecasting and Social Change.",
    "Why are there still so many jobs? The history and future of workplace automation."
])

const goBack = () => {
    router.back()
}
</script>

<template>
  <div class="paper-view">
    <div class="fake-header">
    </div>
    <div class="back-btn" @click="goBack">← Back</div>
    <div class="title">
      Cited Paper
    </div>
    <div class="paper-list">
      <div v-for="(paper, index) in citedPaper" :key="index" class="paper-item">
        {{ paper }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.paper-view {
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  .fake-header {
    margin-top: 72px;
  }
  .back-btn {
    position: fixed;
    top: 102px;
    left: 50px;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
    background-color: #0072ff;
    padding: 5px 15px;
    border-radius: 5px;
  }
  .back-btn:hover {
    background-color: #0057c7;
  }
  .title{
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #fff;
    width: 70%;
  }
  .paper-list {
    width: 70%;
    height: 90%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 20px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    .paper-item {
      margin-top: 20px;
      cursor: pointer;
      background-color: #181d29;
      font-size: 20px;
      color: #fff;
      padding: 10px;
      width: 100%;
      border-radius: 10px;
    }
  }
}
</style>