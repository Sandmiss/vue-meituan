<template>
  <div :class="['choose-wrap', disabled ? 'disabled' : '']" 
    @click="showChoose" 
    v-document-click="domClick">
    <div class="choose">
      <span>{{ value }}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content': true, 'active': showList }">
        <h2>{{ title }}</h2>
        <div :class="['wrapper', className]">
          <div class="col" 
            v-for="(listData, index) in renderList"
            :key="index">
            <span :class="{'mt-item':true, 'active': item.name == value}"
              v-for="(item, index) in listData"
              :key="index" 
              @click="changeValue(item)"
              >{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['list','value','title','showList','disabled','className'],
  data() {
    return {

    }
  },
  computed: {
    renderList: function () {
      let col = Math.ceil(this.list.length / 12);
      let resultList = [];
      for(let i = 0; i < col; i++) {
        let data = this.list.slice(i * 12, i * 12 + 12);
        resultList.push(data);
      }
      return resultList;
    }
  },
  methods: {
    showChoose(e) {
      e.stopPropagation();
      // this.flag = true
      if (!this.disabled) {
        this.$emit('change_active', true)
      }

    },
    domClick () {
      // console.log('domClick')
      // this.flag = false
      this.$emit('change_active', false)
    },
    changeValue (item) {
      this.$emit('change', item);
    }
  },
}
</script>
<style lang="scss">
  @import "@/assets/css/changecity/select.scss"
</style>