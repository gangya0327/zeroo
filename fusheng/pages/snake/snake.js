var startX = 0
var startY = 0
var endX = 0
var endY = 0
var moveX = 0
var moveY = 0
var offsetX = 0
var offsetY = 0

var snakeHead = {
  x: 0,
  y: 0,
  color: "red",
  width: 15,
  height: 15
}
var direction = null
var snakeDirection = "right"
var snakeBodys = []
var foods = []
var windowWidth = 0
var windowHeight = 0;


Page({
  data: {

  },
  onReady: function () {
    var context = wx.createContext()
    var frameNum = 0
    function draw(obj) {
      context.setFillStyle(obj.color)
      context.beginPath()
      context.rect(obj.x, obj.y, obj.width, obj.height)
      context.closePath()
      context.fill()
    }
    //碰撞函数
    function collide(obj1, obj2) {
      var l1 = obj1.x
      var r1 = l1 + obj1.width
      var t1 = obj1.y
      var d1 = t1 + obj1.height

      var l2 = obj2.x
      var r2 = l2 + obj2.width
      var t2 = obj2.y
      var d2 = t2 + obj2.height

      if (r1 > l2 && l1 < r2 && d1 > t2 && t1 < d2) {
        return true
      } else {
        return false
      }

    }

    function animate() {
      frameNum++
      if (frameNum % 40 == 0) {
        //向身体添加上一个蛇头的位置
        snakeBodys.push({
          x: snakeHead.x,
          y: snakeHead.y,
          width: snakeHead.width,
          height: snakeHead.height,
          color: "blue"
        })
        if (snakeBodys.length > 5) {
          snakeBodys.shift()
        }

        switch (snakeDirection) {
          case "left":
            snakeHead.x -= snakeHead.width
            break
          case "right":
            snakeHead.x += snakeHead.width
            break
          case "up":
            snakeHead.y -= snakeHead.height
            break
          case "down":
            snakeHead.y += snakeHead.height
            break
        }
      }

      //蛇头部
      draw(snakeHead)

      //蛇的身体
      for (var i = 0; i < snakeBodys.length; i++) {
        var snakeBody = snakeBodys[i]
        draw(snakeBody)
      }

      //食物
      for (var i = 0; i < foods.length; i++) {
        var foodObj = foods[i]
        draw(foodObj)
      }

      wx.drawCanvas({
        canvasId: "snake",
        actions: context.getActions()
      })

      requestAnimationFrame(animate)
    }

    function rand(min, max) {
      return parseInt(Math.random() * (max - min))
    }
    function Food() {
      this.x = rand(0, windowWidth)
      this.y = rand(0, windowHeight)
      var w = rand(10, 20)
      this.width = w
      this.height = w
      this.color = "rgb(" + rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255) + ")"

    }
    wx.getSystemInfo({
      success: function (res) {
        windowWidth = res.windowWidth
        windowHeight = res.windowHeight

        for (var i = 0; i < 20; i++) {
          var foodObj = new Food()
          foods.push(foodObj)
        }

        animate()
      }
    })

  },
  touchStart: function (e) {
    startX = e.touches[0].x
    startY = e.touches[0].y
  },
  touchEnd: function (e) {
    snakeDirection = direction
  },
  touchMove: function (e) {
    moveX = e.changedTouches[0].x
    moveY = e.changedTouches[0].y
    offsetX = moveX - startX
    offsetY = moveY - startY
    if (Math.abs(offsetX) > Math.abs(offsetY) && offsetX < 0) {
      direction = "left"
    }
    if (Math.abs(offsetX) > Math.abs(offsetY) && offsetX > 0) {
      direction = "right"
    }
    if (Math.abs(offsetX) < Math.abs(offsetY) && offsetY > 0) {
      direction = "down"
    }
    if (Math.abs(offsetX) < Math.abs(offsetY) && offsetY < 0) {
      direction = "up"
    }
  },
  drawRect: function (x, y) {
    var context = wx.createContext("snake")
    context.setStrokeStyle("#fff")
    context.rect(x, y, 10, 10)
    context.stroke()
    context.fill()
    wx.drawCanvas({
      canvasId: "snake",
      actions: context.getActions()
    })
  }
})