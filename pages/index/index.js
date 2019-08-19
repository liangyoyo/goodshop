//index.js
//获取应用实例
import request from "../../utils/request.js"
Page({
  data: {
    // 轮播图图案
    imgUrls: [],
    // 菜单栏导航
    menus: [],
    floors: [],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },
  onLoad() {
    // 轮播图数据
    request({
        url: '/home/swiperdata'
      }).then(res => {
        const {
          message
        } = res.data
        this.setData({
          imgUrls: message
        })
      }),
      // 导航栏数据
      request({
        url: "/home/catitems"
      }).then(res => {
        const {
          message
        } = res.data
        this.setData({
          menus: message
        })
      }),
      request({
        url: "/home/floordata"
      }).then(res => {
        console.log(res)
        const {
          message
        } = res.data
        this.setData({
          floors: message
        })
      })
  },
})