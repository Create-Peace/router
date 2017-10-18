//构造函数
function Router() {
    this.routes = {}
    this.toUrl = ''
    this.currentUrl = ''
    this.fromUrl = ''
    this.routeFlag = true
}
// Router.prototype.replace = function () {
//     this.replaceArr.splice()
// }
Router.prototype.route = function(path, callback) {
    this.routes[path] = callback || function(){};//给不同的hash设置不同的回调函数
};
Router.prototype.trasition = function (elm) {
    
    var tmpUrl = elm.replace('/', '#')
    this.trasitionEntry(tmpUrl)
    for(var index  in this.routes) {
        console.log(index)
        if (elm !== index){
            console.log('遍历路由：', index)
            index = index.replace('/', '#')
            this.trasitionOut(index)
        }
    }
}

Router.prototype.trasitionEntry = function (elm) {
    console.log('trasitionEntry:', elm )
    // $(elm).animate({'right':'0'}, 'fast')
    $(elm).fadeIn()
}
Router.prototype.trasitionOut = function (elm) {
    // $(elm).animate({'right': '-100%'}, 100)
    $(elm).fadeOut()
}
Router.prototype.refresh = function() {
    console.log('当前路由from：', this.fromUrl)
    if (this.routeFlag) {
        this.currentUrl = location.hash.slice(1) || '/first';//如果存在hash值则获取到，否则设置hash值为/
        console.log('当前路由是：', this.currentUrl);//获取到相应的hash
        this.trasition(this.currentUrl)
        this.routes[this.currentUrl]();//根据当前的hash值来调用相对应的回调函数
    } else {
        window.location.href = '#' + this.currentUrl
        return
    }
    this.fromUrl = this.currentUrl
};
Router.prototype.initRouter = function() {
    window.addEventListener('load', this.refresh.bind(this), false);
    window.addEventListener('hashchange', this.refresh.bind(this), false);
}
