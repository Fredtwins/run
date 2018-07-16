<template>
    <div class="hearder">
        城市选择
        <router-link to="/">
            <div class="iconfont hearder-icon">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'CityHearder',
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
@import '~style/varibles.scss';
.hearder {
    position: relative;
    overflow: hidden;
    height: $hearderheight;
    line-height: $hearderheight;
    text-align: center;
    color: #fff;
    background-color: $bgcolor;
    .hearder-icon {
        position: absolute;
        top: 0;
        left: 0;
        width: 0.64rem;
        text-align: center;
        font-size: 0.4rem;
        color: #fff;
    }
}
</style>


