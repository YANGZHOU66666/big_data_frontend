<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getPaperBase} from "@/service/paperService";
import { isVIP } from "@/service/userService";
import { ElMessage } from 'element-plus';

const router = useRouter();
const route = useRoute();

const VIP = ref(false);
const isLoading = ref(true);

const title = ref('Loading...');
const abstract = ref('')
const category = ref('');
const goBack = () => {
  router.back();
}

onMounted(() => {
  VIP.value = sessionStorage.getItem('isVIP') == 'true';
  const paperId = parseInt(route.query.paperId as string, 10);
  isVIP(parseInt(sessionStorage.getItem('userId') as string, 10)).then(res => {
    VIP.value = res.data;
    sessionStorage.setItem('isVIP', res.data.toString());
  })
  getPaperBase(paperId).then(res => {
    title.value = res.data.title;
    abstract.value = res.data.abstract;
    category.value = res.data.category;
    isLoading.value = false;
  })
})

const switchToCitedPapers = () => {
  if(isLoading.value){
    return;
  }
  router.push({name: 'CitedPapers', query: {paperId: route.query.paperId}});
}

const switchToHomogeneousPapers = () => {
  if(isLoading.value){
    return;
  }
  if(!VIP.value){
    ElMessage('You need to be a VIP member to access this feature.');
    return;
  }
  router.push({name: 'HomogeneousPapers', query: {paperId: route.query.paperId}});
}

const switchToSimilarPapers = () => {
  if(isLoading.value){
    return;
  }
  if(!VIP.value){
    ElMessage('You need to be a VIP member to access this feature.');
    return;
  }
  router.push({name: 'SimilarPapers', query: {paperId: route.query.paperId}});
}
</script>

<template>
  <div class="paper-view">
    <div class="fake-header">
    </div>
    <div class="back-btn" @click="goBack">
      ← Back
    </div>
    <div class="title">
      {{ title }}
    </div>
    <div class="abstract">
      {{ abstract }}
    </div>
    <div class="category" v-if="!isLoading">
      Category: {{ category }}
    </div>
    <div class="btn-group">
      <div class="available-btn" @click="switchToCitedPapers">
        View Cited Paper
      </div>
      <div :class="VIP? 'available-btn' : 'pro-btn'" @click="switchToHomogeneousPapers">
        View Homogeneous Paper
        <span class="pro-tag" v-if="!VIP">Pro</span>
      </div>
      <div :class="VIP? 'available-btn' : 'pro-btn'" @click="switchToSimilarPapers">
        View Similar Paper
        <span class="pro-tag" v-if="!VIP">Pro</span>
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
  .abstract {
    font-size: 18px;
    line-height: 1.5;
    color: #ccc;
    width: 70%;
  }
  .category {
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 30px;
    width: 70%;
  }
  .btn-group {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin-top: 50px;
    .available-btn {
      background: linear-gradient(to right, #EE82EE, #00D1FF); /*设置渐变的方向从左到右 颜色从ff0000到ffff00*/
      -webkit-background-clip: text;/*将设置的背景颜色限制在文字中*/
      -webkit-text-fill-color: transparent;/*给文字设置成透明*/
      background-clip: text;
      border: 1px solid #fff;
      color: #fff;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      width: 30%;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      user-select: none;
    }
    .available-btn:hover {
      box-shadow: 0 0 10px #fff;
    }
    .pro-btn {
      color: #888;
      padding: 10px 20px;
      border-radius: 5px;
      width: 30%;
      text-align: center;
      border: 1px solid #888;
      font-size: 18px;
      user-select: none;
      .pro-tag {
        font-size: 18px;
        font-weight: bold;
        background: linear-gradient(to right, #EE82EE, #00D1FF); /*设置渐变的方向从左到右 颜色从ff0000到ffff00*/
        -webkit-background-clip: text;/*将设置的背景颜色限制在文字中*/
        -webkit-text-fill-color: transparent;/*给文字设置成透明*/
        background-clip: text;
        margin-left: 10px;
        position: absolute;
        /*border: 1px solid #fff;
        border-radius: 5px;
        padding: 0 5px;*/
      }
    }
  }
}
</style>