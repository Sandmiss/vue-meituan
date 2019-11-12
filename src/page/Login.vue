<template>
  <div class="page-login">
    <div class="login-header">
      <a href="/index" class="logo"></a>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt />
      </div>
      <div class="form">
        <div v-if="error" class="tips">{{ error }}</div>
        <span>账号登陆</span>
        <el-input v-model="userName" 
          placeholder="用户名" 
          prefix-icon="profile"
          :class="{error: error && !userName}"></el-input>
        <el-input v-model="password" 
          placeholder="密码" 
          type="password" 
          prefix-icon="password"
          :class="{error: error && !userName}"></el-input>
        <div class="foot">
          <a href="#">忘记密码？</a>
        </div>
        <el-button class="btn-login" @click="submit">登录</el-button>
        <p class="reg">
          <span>还没有账号？</span>
         <router-link :to="{name: 'register'}">免费注册</router-link>
        </p>
        <div class="oauth-wrapper">
          <h3 class="title-wrapper">
            <span class="title">用合作网站账号登录</span>
          </h3>
          <div class="oauth cf">
            <span class="oauth__link oauth__link--qq"></span>
            <span class="oauth__link oauth__link--weibo"></span>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="site-info-nav cf">
        <ul>
          <li class="first">
            <a href="#">关于美团</a>
          </li>
          <li>
            <a href="#">加入我们</a>
          </li>
          <li>
            <a href="#">商家入驻</a>
          </li>
          <li>
            <a href="#">帮助中心</a>
          </li>
          <li class="last">
            <a href="#">美团手机版</a>
          </li>
        </ul>
      </div>
      <div class="copyright">
        <p>
          ©
          <span>2019</span>
          <a href="#">美团网团购</a>
          meituan.com
          <a href="#" target="_blank">京ICP证070791号</a>
          京公网安备11010502025545号
        </p>
      </div>
    </footer>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      userName: "",
      password: "",
      error: ""
    };
  },
  methods: {
    submit () {
      if(!this.userName) {
        this.error = '请输入账号';
        return false;
      }
      if(!this.password) {
        this.error = '请输入密码';
        return false;
      }
      api.Login({
        params: {
          userName: this.userName,
          password: this.password
        }
      }).then( (res) => {
        if(res.data.status == 'success') {
          this.$router.push({name: 'index'});
          this.$store.commit('setUserName', this.userName);
        }else {
          this.error = res.data.msg;
        }
    })
    }
  },
};
</script>
<style lang="scss">
@import "@/assets/css/login/index.scss";
</style>  