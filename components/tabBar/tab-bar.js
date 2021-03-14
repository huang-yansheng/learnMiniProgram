// components/tabBar/tab-bar.js
Component({
  properties: {
    texts:{
      type:Array,
      value:[],
    },
  },
  data: {
    currentIndex:0
  },
  methods: {
    btnClick(event){
      let {index} = event.currentTarget.dataset
      console.log(index)
      this.setData({
        currentIndex:index
      })
      //通知页面点击事件
      this.triggerEvent('itemclick',{index,title:this.properties.texts[index]})
    }
  }
})
