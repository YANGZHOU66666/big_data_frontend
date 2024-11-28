<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {login,isVIP} from "@/service/userService";
import { ElMessage } from 'element-plus';

const router = useRouter();

const email = ref('');
const password = ref('');

const hasEmptyFields = () => {
     return email.value.trim() === '' || password.value.trim() === '';
}

const handleLogin = () => {
  if(hasEmptyFields()){
    ElMessage.error("Please fill in all fields.")
    return;
  }
  if(!isValidEmail(email.value)){
    ElMessage.error('Invalid Email');
    return;
  }
  login(email.value, password.value).then(res=>{
    if(res.status === 200) {
      ElMessage.success("Login success.");
      sessionStorage.setItem('token', res.data.token);
      sessionStorage.setItem('userId', res.data.userId);
      isVIP(res.data.userId).then(res=> {
        if (res.data) {
          sessionStorage.setItem("isVIP", "true");
        }
      }).finally(()=>{
        router.push({name: 'Search'});
      })
    }
  }).catch(err=>{
    ElMessage.error("Login failed, please check your email or password.");
  })
}

const isValidEmail = (email: string)=>{
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}
</script>

<template>
  <div class="page-container">
    <div class="login-container">
      <div class="login-img">
        <div class="title">
          PaperHub
        </div>
        <div class="content">
          Your Personal Paper Search Engine
        </div>
      </div>
      <div class="login-form">
        <div class="title-and-form">
          <div class="title">
            Log In
          </div>
          <div class="content">
            Email Address: <span v-if="email.length > 0&&!isValidEmail(email)" style="color:red;margin-left:5px"> Invalid Email</span>
          </div>
          <el-input v-model="email" placeholder="Email Address" size="large" clearable/>
          <div class="content">
            Password:
          </div>
          <el-input placeholder="Password" size="large" type="password" v-model="password" clearable/>
        </div>
        <div class="btn" @click="handleLogin">
          GO
        </div>
      </div>
    </div>
    <div class="prompt">
      Don't have an account? <router-link to="/register">Sign Up</router-link>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .login-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 10px;
    height:55%;
    width: 45%;
    box-shadow: 0 0 15px #888;
    border-radius: 15px;
    .login-img {
      width:55%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      user-select: none;
      .title {
        font-size: 48px;
        font-weight: bold;
        background: linear-gradient(to right, #EE82EE, #00D1FF); /*设置渐变的方向从左到右 颜色从ff0000到ffff00*/
        -webkit-background-clip: text;/*将设置的背景颜色限制在文字中*/
        -webkit-text-fill-color: transparent;/*给文字设置成透明*/
        background-clip: text;
      }
      .content {
        font-size: 20px;
        color: #fff;
        text-align: center;
        font-weight: bold;
        margin-top: 10px;
      }
    }
    .login-form {
      width:45%;
      height:100%;
      background-color: #181d29;
      border-radius: 10px;
      display: flex;
      justify-content:space-between;
      align-items: center;
      flex-direction: column;
      padding: 20px;
      box-sizing: border-box;
      user-select: none;
      .title-and-form {
        width: 100%;
        color: #fff;
        .title {
          font-size: 36px;
          font-weight: bold;
          color: #fff;
          text-align: center;
        }
        .content {
          font-size: 16px;
          padding: 5px;
        }
        .el-input {
          --el-input-text-color: #fff;
        }
        .el-input >>> .el-input__wrapper{
          background-color: rgb(4,4,25);
          box-shadow: none;
        }
      }
      .btn{
        width: 100%;
        height: 40px;
        background: linear-gradient(to right, #EE82EE, #00D1FF);
        border-radius: 10px;
        color: #fff;
        font-size: 24px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      .btn:hover{
        box-shadow: 0 0 15px #fff;
      }
    }
  }
  .prompt {
    margin-top: 20px;
    font-size: 18px;
    color: #fff;
    text-align: center;
  }
}

</style>