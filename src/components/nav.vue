<template>
    <div id="nav">
        <div class="nav">
            <h4>THE&nbsp;&nbsp;&nbsp;FILM&nbsp;&nbsp;&nbsp;PIE</h4>
            <div class="logo">
                <img src="@/assets/img/logo.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

li {
    list-style: none;
}

.nav {
    user-select: none;
    // background-color: pink;
    position: relative;
    height: 70px;
    text-align: center;
    box-shadow: 0 2px 10px #B2B2B2;
    margin-bottom: 35px;

    h4 {
        font-size: 20px;
        line-height: 70px;
        color: #454545;
    }

    .logo {
        position: absolute;
        left: 30px;
        top: 10px;

        img {
            width: 50px;
            height: 50px;
        }
    }
}
</style>