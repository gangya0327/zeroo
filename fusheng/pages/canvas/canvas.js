var rectX = 0
Page({
  data: {

  },
  touchMove: function(e){
    console.log(e)
  },
  touchStart: function(e){
    console.log(e)
  },
  touchEnd: function(e){
    console.log(e)
  },
  onReady: function () {
    var context = wx.createContext("canvasTest")
    var frameNum = 0  //帧数
    function drawRect() {
      context.setStrokeStyle("#fff")
      context.rect(rectX, 50, 100, 100)
      context.stroke()
      context.fill()
      wx.drawCanvas({
        canvasId: "canvasTest",
        actions: context.getActions()
      })
    }
    function animation() {
      frameNum++
      if (frameNum % 2 == 0) {
        rectX += 5
        if (rectX > 250) return
        drawRect()
      }
      if (frameNum > 1000) {
        frameNum = 0
      }
      requestAnimationFrame(animation)
    }
    animation()
  }
})