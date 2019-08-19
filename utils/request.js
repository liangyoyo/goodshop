// 封装一个类似于axios的请求工具库
// axios例子

// 1.设置基准路径
// axios.defaults.baseURL
const request =function(config={}){
  // url为空
  if(!config.url){
    throw new Error("请输入URL地址")
    return
  }
  //拼接上baseURL
  config.url=request.defaults.baseURL+config.url
  //返回一个promise对象，resolve是成功时的回调，reject是失败时的回调
  return new Promise((resolve,reject)=> {
    //发起小程序的请求
    wx.request({
      //把传入的对象解构
    ...config,
    success(res){
      //成功之后触发then的回调函数
      resolve(res)
    },
    fail(){

    },
    complete(res){
     request.errors.forEach(fn=>{
       fn(res)
     })
    }
    })
  })
  }
/**
* 默认配置
*/
request.defaults = {
  baseURL: "https://api.zbztb.cn/api/public/v1",
}

/**
 * 错误监听函数集合
 */
request.errors = [];

/**
 * 错误拦截
 * @参数: 回调函数
 */
request.onError = (callback) => {
  request.errors.push(callback);
}

export default request;

