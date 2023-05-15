<template>
    <div id="home">
        <div class="banner" @click="goVideoList()">
            <img src="@/assets/img/banner.png" alt="">
        </div>

        <div class="join">
            <h4>加入我们，实现你的电影梦</h4>
            <h5>我们给你一个机会拍你所想拍的</h5>
        </div>
    </div>
</template>

<script>
import router from '@/router';

export default {
    methods: {
        goVideoList() {
            this.$router.push('./videolist')
        }
    }

}
</script>

<style lang="less" scoped>
* {
    user-select: none;
}

.banner {
    cursor: pointer;
    width: 100%;
    overflow: hidden;
    text-align: center;
    margin-bottom: 150px;

    img {
        margin: 0 auto;
        width: 100%;
        max-width: 1500px;
        box-shadow: 5px 5px 5px #A6A6A6;

        &:hover {
            transition: all .7s;
            width: 101%;
            max-width: 1520px;

        }
    }
}

.join {
    text-align: center;

    h4 {
        letter-spacing: 13px;
        margin-bottom: 50px;
        font-size: 25px;
    }

    h5 {
        letter-spacing: 11px;
        font-size: 15px;
    }
}
</style>