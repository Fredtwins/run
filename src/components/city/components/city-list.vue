<template>
    <div class="citylist">
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">北京</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">广州</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">湛江</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">珠海</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">香港</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">深圳</div>
                </div>
                <div class="button-wrapper">
                    <div class="button">澳门</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">A</div>
            <div class="item-list">
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">B</div>
            <div class="item-list">
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">C</div>
            <div class="item-list">
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
                <div class="item border-bottom">阿拉尔</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CityList',
    data() {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
.border-topbottom {
    &:before {
        border-color: #ccc;
    }
    &:after {
        border-color: #ccc;
    }
}

.citylist {
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    .title {
        background-color: #eee;
        line-height: 0.44rem;
        padding-left: 0.2rem;
        color: #666;
        font-size: 0.26rem;
    }

    .button-list {
        overflow: hidden;
        padding: 0.1rem 0.6rem 0.1rem 0.1rem;
        .button-wrapper {
            float: left;
            width: 33.33%;
            .button {
                text-align: center;
                padding: 0.1rem 0;
                margin: 0.1rem;
                border-radius: 0.06rem;
                border: 0.02rem solid #41b0ff;
            }
        }
    }
    .item-list {
        .item {
            line-height: 0.76rem;
            color: #666;
            padding-left: 0.2rem;
        }
    }
}
</style>

