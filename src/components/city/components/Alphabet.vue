<template>
    <ul class="Alphabet-list">
        <li class="item" v-for="item of letters" :key="item" :ref="item" @click="handeLetter" @touchstart="handelTounch" @touchmove="handeltouchmove" @touchend="handeltouchend">
            {{item}}
        </li>
    </ul>
</template>
<script>
export default {
    name: 'Cityalphabet',
    props: {
        cities: Object
    },
    data() {
        return {
            touchstatus: false,
            statrY: 0,
            timer: null
        }
    },
    // 生命周期updated，当页面加载完后就执行的
    updated() {
        this.statrY = this.$refs['A'][0].offsetTop;
    },
    computed: {
        letters() {
            //要定义一个数组来装着
            let letters = [];
            // 一个循环添加
            for (let i in this.cities) {
                letters.push(i)
            }
            return letters;
        }
    },
    methods: {
        //点击时候触发事件
        handeLetter(e) {
            // console.log(e.target.innerText);
            //向父级传递事件
            this.$emit('change', e.target.innerText);
        },
        //滑动拖拽事件
        handelTounch(e) {
            // console.log(e)
            this.touchstatus = true;
        },
        handeltouchmove(e) {
            // console.log(e);
            //只有当这个为true的时候才会去触发
            if (this.touchstatus) {
                //首先要获取A字母到顶部的距离,这样做的性能比较不好，因为每次都得计算一次
                // let statusY = this.$refs['A'][0].offsetTop;
                // console.log(statusY);
                //通过函数节流的方式去优化性能，不会每次一滑动就执行这函数
                if (this.timer) {
                    clearTimeout(this.timer);
                }
                this.timer = setTimeout(() => {
                    // 得到的值减去 顶部标题和搜索框的高度
                    let touchY = e.touches[0].clientY - 74;
                    // console.log(touchY);
                    //设置字母的  后面的除20是每个字母的高度 , 最后向下取整
                    let index = Math.floor((touchY - this.statrY) / 20);
                    // console.log(index);
                    if (index >= 0 && index < this.letters.length) {
                        this.$emit('change', this.letters[index])
                    }
                }, 16);
            }
        },
        handeltouchend() {
            this.touchstatus = false;
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~style/varibles.scss';
.Alphabet-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 1.58rem;
    bottom: 0;
    width: 0.4rem;
    .item {
        text-align: center;
        line-height: 0.4rem;
        color: $bgcolor;
    }
}
</style>


