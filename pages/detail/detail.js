// pages/detail/detail.js
Page({
  onLoad(options){
    console.log(options)
  },
    //页面退出销毁的时候调用
  onUnload(){
    //1、获取首页的页面对象
    //getCurrentPages函数获得当前所有活跃的页面
    //跳转到下一层，而上一层没有销毁时，两个页面都是活跃页面
    const pages = getCurrentPages()
    //pages是个数组，存着活跃页面对象，想把数据传到哪里就-多少
    const home = pages[pages.length - 2]
    //这时可以调用页面的方法和属性了
    home.setData({
      title:'嘿嘿嘿'
    })
  },
  back(){
    wx.navigateBack({
      //返回的层级 
      delta:1
    })
  }
})