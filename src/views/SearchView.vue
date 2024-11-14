<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const searchText = ref('')
const afterSearch = ref(false)

const paperList = ref(["Exploring the Impact of Artificial Intelligence on Modern Workforce: A Comprehensive Analysis",
"Sustainable Urban Development: Strategies for Reducing Carbon Footprint in Metropolitan Areas",
"The Role of Social Media in Shaping Public Opinion: A Case Study Approach",
"Innovative Approaches to Enhancing Renewable Energy Integration in Power Systems",
"The Effects of Climate Change on Biodiversity: Patterns and Predictions",
"The Role of Social Media in Shaping Public Opinion: A Case Study Approach",
"Innovative Approaches to Enhancing Renewable Energy Integration in Power Systems",
"The Effects of Climate Change on Biodiversity: Patterns and Predictions",
"Sustainable Urban Development: Strategies for Reducing Carbon Footprint in Metropolitan Areas",
"Exploring the Impact of Artificial Intelligence on Modern Workforce: A Comprehensive Analysis",
"The Role of Social Media in Shaping Public Opinion: A Case Study Approach"]);

const search = ()=>{
  if(searchText.value.trim() === ''){
    afterSearch.value = false;
    return;
  }
  //这里应该有请求
  afterSearch.value = true
}
</script>

<template>
  <div class="page-container">
    <div class="fake-header">
    </div>
    <div class="search-container">
      <div class="search-bar">
        <el-input placeholder="Enter Search Text" v-model="searchText" />
        <div class="search-btn">
          <span class="search-btn-text" @click="search">Search</span>
        </div>
      </div>
      <div class="content-container">
        <div class="welcome-text" v-if="!afterSearch">
          <div class="title">
            Welcome to PaperHub!
          </div>
          <div class="detail">
            Search for papers, articles, and more.
          </div>
          <div class="detail">
            Start typing in the search bar to get started.
          </div>
        </div>
        <div class="no-result-text" v-if="afterSearch && paperList.length === 0">
          No Results Found.
        </div>
        <div class="paper-list" v-if="afterSearch">
          <div class="paper-item" v-for="paper in paperList" @click="router.push('/paper')">
            {{ paper }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  .fake-header {
    margin-top: 72px;
  }
  .search-container {
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    .search-bar {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;

      .el-input {
        width: 100%;
        height: 60px;
        margin-top: 30px;
        --el-input-text-color: #fff;
      }

      .el-input >>> .el-input__wrapper {
        border-radius: 25px;
        box-shadow: none;
        font-size: 20px;
        background-color: #181d29;
      }

      .search-btn {
        width: 12%;
        height: 50px;
        margin-top: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 20px;
        border-radius: 25px;
        cursor: pointer;
        position: absolute;
        right: 5px;
        top: 0;
        /*background-color: rgb(4,4,25);*/
        background: linear-gradient(to right, #EE82EE, #00D1FF);

        .search-btn-text {
          /*background: linear-gradient(to right, #EE82EE, #00D1FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;*/
          color: #fff;
          font-weight: bold;
        }
      }

      .search-btn:hover {
        box-shadow: 0 0 20px #888;
      }
    }

    .content-container {
      width: 100%;
      height: 85%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;

      .welcome-text {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 50px;

        .title {
          font-size: 36px;
          font-weight: bold;
          color: #fff;
          margin-bottom: 20px;
        }

        .detail {
          font-size: 24px;
          color: #fff;
        }
      }

      .paper-list {
        width: 75%;
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
  }
}
</style>