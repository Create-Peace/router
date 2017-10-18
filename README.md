# router


### 这个路由使用了简单hash来控制逻辑

#### 如何使用这个路由：

 ``` js
function start () {
    var app = new App()
    
}

function App () {
    Router.call(this)
    this.nextStepBtn = $('#practise_btn')  // 点击立刻体验
    this.sure_pay = $('.pay_guide')
    this.init()
}
App.prototype = new Router()
App.prototype.constructor = App
App.prototype.init = function () {
    this.routes = {
        '/first': function () {console.log('first')},
        '/second': function () {console.log('second')},
        '/third': function () {console.log('third')}
    }
    this.initRouter()
    this.clickNext()
}
App.prototype.clickNext = function () {
    this.nextStepBtn.on('click', postMessage2Parent)
    this.sure_pay.on('click', postMessage2Parent)
}
 ```
