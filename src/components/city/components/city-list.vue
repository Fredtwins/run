<template>
    <div class="citylist" ref="wrapper">
        <div>
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
                    <div class="button-wrapper" v-for="(item, index) of hotcities" :key="item.id">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div 
            class="area" 
            v-for="(item, key) of cities" 
            :key="key"
            :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div 
                    class="item border-bottom"
                    v-for="innerItem of item"
                    :key="innerItem.id" 
                    >
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
    name: 'CityList',
    props: {
        hotcities: Array,
        cities: Object,
        letter: String
    },
    data() {
        return {

        }
    },
    mounted() {
        //better-scroll传入一个dom元素进去
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    //监听letter是否发生改变
    watch: {
        letter() {
            // console.log(this.letter);
            if(this.letter) {
                let str = this.$refs[this.letter][0];
                this.scroll.scrollToElement(str);
            }
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
        line-height: 0.54rem;
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

