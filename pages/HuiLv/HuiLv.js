// 该页面的 JS 仅仅只用来控制 tabbar 的 icon 选择，和传递一个 index 
// 告诉页面该隐藏和显示哪一个 component 组件
let app = getApp()

Page({
  data: {
    currentTab: 0,
    items: [
      {
        "iconPath": "/pages/img/tab_icon_home_sel@2x.png",
        "selectedIconPath": "/pages/img/tab_icon_home@2x.png",
        "text": "首页"
      },
      {
        "iconPath": "/pages/img/tab_icon_my_sel@2x.png",
        "selectedIconPath": "/pages/img/tab_icon_my@2x.png",
        "text": "末页"
      }
    ]
  },
  //事件处理函数
  bindChange: function (e) {
    let that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //跳转
  bindViewTap: function() {
    wx.navigateTo({
      //url: '../logs/logs'
      url:'/HuiLv/末页/pages/check/check'
    });
    wx.switchTab({
      url:'/HuiLv/末页/pages/check/check'
    })
  },
  
  swichNav: function (e) {
    let that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  onLoad: function () {
    let that = this
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })
  }
})