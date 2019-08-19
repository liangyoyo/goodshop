// pages/search_list/index.js
import request from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
     keyword:'',
     pagesize:10,
     pagenum:1,
     goods:[],
     goodstitle:["综合","销量","价格"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  this.setData({
    keyword:options.keyword
  })
  //q请求货物的数据
    const {keyword,pagenum,pagesize} = this.data
     request({
       url:'/goods/search',
       data:{
        query:keyword,
         pagenum,
         pagesize
       }
     }).then(res=>{
       console.log(res)
       const {goods}=res.data.message
      //  循环给每个价格加样式，保留两位小数
       const newGoods=goods.map(v=>{
         v.goods_price = Number(v.goods_price).toFixed(2);
         return v;
       })
      this.setData({
        //合并新旧数据
        goods:[...this.data.goods,...newGoods]
      })

     })
  },
  handlechange(event){
    const {index} =event.currentTarget.dataset
    this.setData({
      current:index
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})