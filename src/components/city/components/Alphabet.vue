<template>
    <ul class="Alphabet-list">
        <li class="item">A</li>
        <li class="item">B</li>
        <li class="item">C</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
    </ul>
</template>
<script>
export default {
    name: 'Cityalphabet'
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


