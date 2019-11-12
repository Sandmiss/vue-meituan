<template>
  <div class="m-menu" @mouseleave="menuLeave">
    <dl  class="nav">
      <dt>全部分类</dt>
      <dd v-for="(item, index) in menuList"
      :key="index"
      @mouseenter="menuEnter(item)">
        <i :class="item.type"></i>
        {{ item.name }}
        <span class="arrow"></span>
      </dd>
    </dl>
    <dl class="detail"
      v-if="curDetail"
    >
      <template v-for="(item, index) in curDetail.items">
          <h4 :key="index">{{ item.title }}</h4>
          <span v-for="(v, i) in item.items"
          :key="v + '_' + i">{{ v }}</span>
      </template>
    </dl>

  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      curDetail: null,
      menuList: []
    }
  },
  created () {
    api.getmenuList().then( (res) => {
      this.menuList = res.data.data
    })
  },
  methods: {
    menuEnter (item) {
      this.curDetail = item
    },
    menuLeave () {
      this.curDetail = null
    }
  }
}
</script>
