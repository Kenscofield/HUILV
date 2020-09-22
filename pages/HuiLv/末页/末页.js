// pages/HuiLv/末页/末页.js
Component({
    /* 开启全局样式使用 */
    options: {
      addGlobalClass: true,
    },
  
    /* 组件的属性列表 */
    properties: {
      name: {
        type: String,
        value: ''
      }
    },
  
    /* 组件的初始数据 */
    data: {
        shows: false, //控制下拉列表的显示隐藏，false隐藏、true显示
        selectDatas: ['人民币', '美元', '英镑'], //下拉列表的数据
        indexs: 0, //选择的下拉列 表下标,
    },
    
  // 点击下拉显示框
  selectTaps() {
    this.setData({
      shows: !this.data.shows,
    });
  },
  // 点击下拉列表
  optionTaps(e) {
    let Indexs = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
    console.log(Indexs)
    this.setData({
      indexs: Indexs,
      shows: !this.data.shows
    })
  },
    /* 生命周期函数 */
    lifetimes: {
      attached: function () { },
      moved: function () { },
      detached: function () { },
    },
    
    
    /* 组件的方法列表 */
    methods: {     
    }
  })