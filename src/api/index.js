import axios from '@/axios.js'

var api = {
  Login(params) { // 登陆
    return axios.get('/api/meituan/login', params)
  },
  Register(params) { // 注册
    return axios.get('/api/meituan/register', params)
  },
  searchHotWords(params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  search() {
    return axios.get('/api/meituan/header/search.json')
  },
  getmenuList() {
    return axios.get('/api/meituan/index/nav.json')
  },
  resultsByKeywords() { // 主页内容区有格调列表
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  getProvince() { // 获取省份列表
    return axios.get('/api/meituan/city/province.json')
  },
  getCityList() { // 获取城市列表
    return axios.get('/api/meituan/city/cityList.json')
  },
  getHotCity() { // 获取热门城市
    return axios.get('/api/meituan/city/hot.json')
  },
  getRecentsCity() { // 获取最近搜索城市
    return axios.get('/api/meituan/city/recents.json')
  },
  getGoodsList() { // 产品展示列表数据获取
    return axios.get('/api/meituan/list/goodsList.json')
  },
  getClassify() { // 获取分类列表
    return axios.get('/api/meituan/list/classify.json')
  },
  getAreaList() { // 获取区域列表
    return axios.get('/api/meituan/list/areaList.json')
  },
  getPosition() { // 获取当前位置信息
    return axios.get('/api/meituan/city/getPosition.json')
  }

}

export default api;