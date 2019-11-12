<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="6">
        <div class="left">
          <a href="/index">
            <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" />
          </a>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="center">
          <div class="wrapper">
            <el-input class="input" 
              v-model="searchWord" 
              placeholder="搜索商家或地点" 
              @focus="focusInput" 
              @blur="blurInput"
              @input="input"
            ></el-input>
            <el-button class="el-button" type="primary" icon="el-icon-search">

            </el-button>
            <dl class="hotPlace" v-if="isHotPlace">
              <dt>热门搜索</dt>
              <dd
              v-for="(item,index) in hotPlaceList"
              :key="index"
              ><router-link :to="{name: 'goods', params: {name: item}}"
              >{{item}}</router-link></dd>
            </dl>
            <dl class="searchList" v-if="isSearchList">
              <dd
              v-for="(item,index) in searchList"
              :key="index"
              ><router-link :to="{name: 'goods', params: {name: item}}"
              >{{item}}</router-link></dd>
            </dl>
          </div>
          <p class="suggest">
            <a href="#" v-for="(item, index) in suggestList" :key="index">{{item}}</a>
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      searchWord: '',
      isFocus: false,
      hotPlaceList: [],
      searchList: [],
      suggestList: []
    }
  },
  created() {
    api.searchHotWords().then( (res) => {
      this.hotPlaceList = res.data.data;
      this.suggestList = res.data.data;
    })
  },
  computed: {
    isHotPlace: function () {
      return !this.searchWord && this.isFocus
    },
    isSearchList: function () {
      return this.searchWord && this.isFocus
      // return this.searchWord
    }
  },
  watch: {
    "$route.params.name": function () {
        this.searchWord = this.$route.params.name;
    }
  },
  methods: {
    focusInput () {
      this.isFocus = true
    },
    blurInput () {
      let _this = this;
      setTimeout( function () {
        _this.isFocus = false;
      },200)
      // this.isFocus = false
    },
    input () {
      let val = this.searchWord;
      api.search().then( (res) => {
        this.searchList = res.data.data.list.filter( (item, index) => {
          return item.indexOf(val) > -1;
        })
      })
    }
  }
}
</script>
<style lang="scss">
  @import "@/assets/css/public/header/search.scss";
</style>
