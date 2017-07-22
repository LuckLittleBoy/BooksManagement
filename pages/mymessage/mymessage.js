//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    showBadge:false,
    meList:[
      {
        text:'正在借阅',
        icon:'/images/iconfont-dingdan.png',
        url:'../bookList/bookList'
      },
      {
        text:'预约历史',
        icon:'/images/iconfont-icontuan.png',
        url:''
      },
      {
        text:'借阅完成',
        icon:'/images/iconfont-tuihuo.png',
        url:''
      },
    ]
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
