<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import {getHomogeneousPaper} from "@/service/paperService";

const router = useRouter()
const route = useRoute()
const homogeneousPaper = ref<Paper[]>([])
const isLoading = ref(true);

type Paper = {
  id: number,
  title: string
}

onMounted(() => {
  const paperId = parseInt(route.query.paperId as string)
  getHomogeneousPaper(paperId).then(res => {
    console.log(res)
    homogeneousPaper.value = res.data.homogeneities
    isLoading.value = false
  })
})

const goBack = () => {
  router.back()
}

const goPaper = (paperId: number) => {
  router.push({ name: 'Paper', query: { paperId: paperId } })
}

const noResult = () => {
  return homogeneousPaper.value.length == 0
}
</script>

<template>
  <div class="paper-view">
    <div class="fake-header">
    </div>
    <div class="back-btn" @click="goBack">← Back</div>
    <div class="title">
      Homogeneous Paper
    </div>
    <div class="loading-container" v-if="isLoading">
      Loading...
    </div>
    <div class="no-result-container" v-if="(!isLoading)&&noResult()">
      No result
    </div>
    <div class="paper-list">
      <div v-for="(paper, index) in homogeneousPaper" :key="index" class="paper-item" @click="goPaper(paper.id)">
        {{ paper.title }}
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
  .loading-container {
    font-size: 24px;
    color: #fff;
  }
  .no-result-container {
    font-size: 24px;
    color: #ccc;
  }
  .paper-list {
    width: 70%;
    height: 90%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
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