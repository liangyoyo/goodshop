// pages/category/index.js
import request from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 总的数据
    navs: [],
    // 索引
    current: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    request({
      url: '/categories',
    }).then(res => {
      console.log(res)
      const {
        message
      } = res.data
      this.setData({
        navs: message
      })
    })
  },
  handlechange(event) {
    const { index } = event.currentTarget.dataset;
    this.setData({
      current: index
    })
  },
})