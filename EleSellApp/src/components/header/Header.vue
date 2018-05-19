<template>
    <div class="header">
        <!-- 
            wrapper 只关心对外的padding和margin，整体元素的高度和宽度由内部元素决定
         -->
        <div class="content-wrapper">
            <div class="avatar">
                <img width="64" height="64" src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <div class="store-name">粥品香坊（回龙观）</div>
                </div>
                <div class="express-info">蜂鸟专送/38分钟送达</div>
                <div class="discount-info">
                    <span class="logo"></span>
                    在线支付满28减5
                </div>
            </div>
            <v-star></v-star>
            <div class="detail">
                <span>详情</span>
            </div>
            <div class="background"></div>
        </div>

        <div class="broadcast-wrapper">
            <span class="title">公告: </span>
            <span class="text">粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</span>
        </div>
        <div class="tab">
            <div class="tab-item active">商品</div>
            <div class="tab-item">评论</div>
            <div class="tab-item">商家</div>
        </div>
        <div class="selector">
            <div class="left">
                <div class="goods-menu">
                    <div class="item">热销榜</div>
                </div>
                <div class="goods-menu">
                    <div class="item">单人精彩套餐</div>
                </div>
                <div class="goods-menu">
                    <div class="item">精选热菜</div>
                </div>
            </div>
            <div class="right">

            </div>
        </div>

        <!-- 购物车 -->
        <div class="shopcart">
            <div class="content-left">
                <div class="cart"></div>
                <div class="price"></div>
                <div class="patch-info"></div>
            </div>
            <div class="content-right">

            </div>
        </div>
    </div>
</template>
<script>
'use-strict'

import star from '../star/star.vue'

export default {
    name: 'Header',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        };
    },
    components: {
        'v-star': star
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shopcart {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: black;
}

.header {
    background: rgba(7, 17, 27, 0.5);
}

.tab {
    width: 100%;
    height: 40px;
    display: flex;
    line-height: 40px;
    box-sizing: border-box;
}

.tab .tab-item {
    display: inline;
    flex: 1;
    text-align: center;
    font-size: 14px;
}

.tab .tab-item.active {
    color: #f01414;
}

.background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: -1;
    background-image: url(http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg);
    width: 100%;
    filter: blur(10px);
}

.content-wrapper {
    position: relative;
    padding: 24px 12px 18px 24px;
}

.content-wrapper .avatar {
    position: relative;
    display: inline-block;
    vertical-align: top;
}

.content-wrapper .content {
    width: 180px;
    height: 62px;
    position: relative;
    display: inline-block;
    margin-left: 10px;
}

.content .title {
    margin-bottom: 8px;
}

.content .title .brand {
    display: inline-block;
    width: 30px;
    height: 18px;
    background-size: 30px 18px;
    background-image: url("brand@2x.png");
}

.content .title .store-name {
    display: inline-block;
    color: white;
    vertical-align: top;
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;
}

.content .express-info {
    font-size: 10px;
    color: white;
    margin-bottom: 6px;
}

.content .discount-info {
    font-size: 9px;
    color: white;
    margin: 5px 0;
    text-align: left;
}

.discount-info .logo {
    display: inline-block;
    width: 12px;
    height: 12px;
    background-size: 12px 12px;
    background-image: url("decrease_1@2x.png");
}

.broadcast-wrapper {
    color: white;
    font-size: 10px;
    padding: 7px 0;
    background: rgba(7, 17, 27, 0.2);
}

.detail {
    position: absolute;
    right: 10px;
    bottom: 10px;
    color: ivory;
    border-radius: 10px;
    padding: 5px 15px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.2);
    font-size: 5px;
}

.spliter {
    background-color: brown;
    width: 100%;
    height: 16px;
    border-top: 2px;
    border-bottom: 2px;
}

.selector .left {
    background-color: #f3f5f7;
    float: left;
    width: 80px;
}

.selector .right {
    background-color: blue;
    float: left;
    width: 100% - 80px;
}

.selector .left .goods-menu {
    height: 54px;
    width: 56px;
    border: grey solid;
    border-width: 1px 0px;
    border-bottom-color: grey;
    margin: 10px 10px;
    text-align: left;
    font-size: 15px;
    vertical-align: middle;
}
</style>
