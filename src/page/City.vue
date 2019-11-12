<template>
  <div class="page-changeCity">
    <el-row>
      <province />
    </el-row>
    <el-row>
      <hot-city title="热门城市：" :list="hotCityList"/>
    </el-row>
    <el-row>
      <hot-city title="最近访问：" :list="historyCityList"/>
    </el-row>
    <el-row>
      <categroy />
    </el-row>
  </div>
</template>

<script>
import api from '@/api/index.js'
import Province from '@/components/city/province.vue'
import HotCity from '@/components/city/hotCity.vue'
import Categroy from '@/components/city/categroy.vue'
export default {
  data() {
    return {
      hotCityList: [],
      historyCityList:[]
    }
  },
  created () {
    api.getHotCity().then( (res) => {
      this.hotCityList = res.data.data.map( (item) => item.name)
    })
    api.getRecentsCity().then( (res) => {
      this.historyCityList = res.data.data.map( (item) => item.name)
    })
  },
  components: {
    Province,
    HotCity,
    Categroy
  }
}
</script>