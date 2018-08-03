<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="请输入城市名和拼音">
        </div>
        <div class="search-content">
            <ul>
                <li
                class="search-item border-bottom"
                v-for="item of list"
                :key="item.index">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Search',
    props: {
        cities: Object
    },
    data() {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    watch: {
        keyword() {
            if(this.timer) {
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(() => {
                const result = []
                for(let i in this.cities) {
                    this.cities[i].forEach((value) => {
                        if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                            result.push(value)
                        }
                    })
                }
                this.list = result
            }, 100)
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~style/varibles.scss';
.search {
    height: 0.72rem;
    padding: 0 0.1rem;
    background-color: $bgcolor;
    .search-input {
        box-sizing: border-box;
        width: 100%;
        height: 0.62rem;
        line-height: 0.62rem;
        text-align: center;
        border-radius: 0.06rem;
        color: #666;
        padding: 0 0.1rem;
    }
}
.search-content {
    overflow: hidden;
    z-index: 1;
    position: absolute;
    top: 1.5rem;
    left: 0;
    bottom: 0;
    right: 0;
    background: #eee;
    .search-item {
        line-height: 0.62rem;
        padding-left: 0.2rem;
        color: #666;
        background: #fff;
    }
}
</style>

