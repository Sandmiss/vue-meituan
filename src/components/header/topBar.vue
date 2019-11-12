<template>
  <div>
    <el-row class="m-header m-header-topbar">
      <el-col :span="10">
        <geo />
      </el-col>
      <el-col :span="14">
        <my-nav />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import geo from './geo.vue'
import MyNav from './nav.vue'

export default {
  components: {
    geo,
    MyNav
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/public/header/topbar.scss';

</style>
