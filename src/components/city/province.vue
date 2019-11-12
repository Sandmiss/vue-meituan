<template>
  <div class="m-iselect">
    <span class="name">按省份选择：</span>
    <my-select
      :list="provinceList" 
      :value="province" title="省份"
      :showList="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
      className="province"/>
    <my-select class="city"
      :list="cityList" 
      :value="city" title="城市"
      :showList="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled="cityDisabled"
      className="city"/>

    <span class="search">直接搜索：</span>
    <el-select
      v-model="searchWorld"
      filterable
      remote
      reserve-keyword
      placeholder="请输入城市中文或拼音"
      :remote-method="remoteMethod"
      :loading="loading">
      <el-option
        v-for="item in searchCity"
        :key="item"
        :label="item"
        :value="item">
      </el-option>
    </el-select>
  </div>
</template>


<script>
import MySelect from './select.vue'
import api from '@/api/index.js'
export default {
  data() {
    return {
      provinceList: [],
      province: '省份',
      cityList: [],
      city: '城市',
      provinceActive: false,
      cityActive: false,
      searchCity: [],
      searchWorld: '',
      loading: false,
      cityDisabled: true
    }
  },
  created () {
    api.getProvince().then( (res) => {
      this.provinceList = res.data.data.map( (item) => {
        item.name = item.provinceName;
        return item;
      })
    })
  },
  components: {
    MySelect
  },
  methods: {
    changeProvinceActive (flag) {
      this.provinceActive = flag;
      if(flag) {
        this.cityActive = false
      }
    },
    changeCityActive (flag) {
      this.cityActive = flag;
      if(flag) {
        this.provinceActive = false
      }
    },
    changeProvince (item) {
      this.province = item.name;
      this.cityDisabled = false;
      this.cityList = item.cityInfoList
    },
    changeCity (item) {
      this.city = item.name;
      this.$store.dispatch('setPosition', item);
      this.$router.push({name: 'index'})
    },
    remoteMethod (val) {
      // 请求后端接口
    },
  },
}
</script>
<style lang="scss">
  @import "@/assets/css/changecity/iselect.scss"
</style>
