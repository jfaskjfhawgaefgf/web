<template>
    <div id="error">
        <div class="info">
            <h1>哎呀，出错了</h1>
            <a href="javascript:;" @click="$router.go(-2)">返回上一页</a>
        </div>

        <img src="@/assets/img/wait.png" alt="">
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
#error {
    text-align: center;
}

.info {
    display: flex;
    align-items: center;

    h1 {
        margin: 15px;
    }
}
</style>