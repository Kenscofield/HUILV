// pages/HuiLv/末页/pages/check/check.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [
          {
            id: 'view',
            name: '视图容器',
            open: false,
            pages: ['view', 'scroll-view', 'swiper', 'movable-view', 'cover-view']
          }, {
            id: 'content',
            name: '基础内容',
            open: false,
            pages: ['text', 'icon', 'progress', 'rich-text']
          }
        ]
    },
    kindToggle(e) {
        const id = e.currentTarget.id
        const list = this.data.list
        for (let i = 0, len = list.length; i < len; ++i) {
          if (list[i].id === id) {
            list[i].open = !list[i].open
          } else {
            list[i].open = false
          }
        }
        this.setData({
          list
        })
        wx.reportAnalytics('click_view_programmatically', {})
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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