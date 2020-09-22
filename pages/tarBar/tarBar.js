// travel.js
let app = getApp()
Page({
  data: {
    currentTab: 0,
    items: [
      {
        "iconPath": "/pages/img/tab_icon_home@2x.png",
        "selectedIconPath": "/pages/img/tab_icon_home_sel@2x.png",
        "text": "首页"
      },
      {
        "iconPath": "/pages/img/tab_icon_my@2x.png",
        "selectedIconPath": "/pages/img/tab_icon_my_sel@2x.png",
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