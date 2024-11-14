<script setup lang="ts">
import { ref } from 'vue';
const title = ref('Exploring the Impact of Artificial Intelligence on Modern Workforce: A Comprehensive Analysis');
const abstract = ref('The rapid advancement of artificial intelligence (AI) technologies has led to significant transformations in various sectors, with the modern workforce being no exception. This paper provides a comprehensive analysis of the impact of AI on the contemporary workforce, examining both the challenges and opportunities it presents. The study begins by reviewing the current state of AI technologies and their integration into different industries. It then delves into the effects of AI on job displacement, skill requirements, and the nature of work itself. The paper identifies key areas where AI is likely to create new job opportunities, such as data analysis, machine learning, and automation. Additionally, it discusses the potential for AI to enhance productivity and efficiency in the workplace. The challenges posed by AI, including ethical considerations, job security concerns, and the need for a skilled workforce, are also addressed. The paper concludes with a set of recommendations for policymakers, educators, and industry leaders to harness the benefits of AI while mitigating its negative impacts on the modern workforce. This research aims to contribute to a deeper understanding of the evolving relationship between AI and the workforce, informing strategies for a sustainable and inclusive future.\n')
const isVIP = ref(false);
import { useRouter } from 'vue-router';
const router = useRouter();

const goBack = () => {
  router.back();
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
    <div class="category">
      Category: AI and Workforce
    </div>
    <div class="btn-group">
      <div class="available-btn" @click="router.push('/citedPapers')">
        View Cited Paper
      </div>
      <div :class="isVIP? 'available-btn' : 'pro-btn'">
        View Homogeneous Paper
        <span class="pro-tag" v-if="!isVIP">Pro</span>
      </div>
      <div :class="isVIP? 'available-btn' : 'pro-btn'">
        View Similar Paper
        <span class="pro-tag" v-if="!isVIP">Pro</span>
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
    color: #fff;
    width: 70%;
  }
  .category {
    font-size: 18px;
    color: #ccc;
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
      cursor: pointer;
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