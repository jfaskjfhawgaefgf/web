<template>
    <div id="player">
        <!-- {{ $route.params.id }} -->
        <div class="box">
            <div class="left">
                <div class="backbtn" onclick="window.history.back()">&#xe60e;</div>
                <div class="videotitle">{{ videoInfo.title }}</div>
                <div class="video">
                    <video controls="controls" :src="videoInfo.src"></video>
                </div>
                <div class="data">
                    <div class="visit">&#xe622;<p>{{ videoInfo.visit }}</p>
                    </div>
                    <div class="download" @click="downloadvideo">&#xe600;<p>{{ videoInfo.download }}</p>
                    </div>
                    <div class="score" onclick="alert('敬请期待')">&#xe623;<p>{{ videoInfo.score }}</p>
                    </div>
                </div>
                <div class="info">
                    <div>影片介绍</div>
                    <p>介绍内容介绍内容介绍内容介绍内容介绍内容</p>
                </div>
            </div>


            <div class="right">
                <ul>
                    <!-- <li v-for="item in filteredUserList" :key="item.uid">
                        <div class="pic">
                            <img :src="item.pic" alt="">
                        </div>
                        <div class="work">{{ item.works }}</div>
                        <div class="name">{{ item.uname }}</div>
                        <div class="info">{{ item.info }}</div>
                    </li> -->
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { getVideoList, getUserList } from '@/api/getInfo'

export default {
    data() {
        return {
            videoInfo: null,
            userList: null
        }
    },
    methods: {
        async getVideo() {
            const { data: res } = await getVideoList()
            res.data.forEach(e => {
                if (e.uid == this.$route.params.id) {
                    this.videoInfo = e
                }
            })

        },
        downloadvideo() {
            window.open(this.videoInfo.src)
        },
        async getUser() {
            const { data: res } = await getUserList()
            this.userList = res.data
        },


    },
    async created() {
        await this.getVideo()
        await this.getUser()
    },


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

@font-face {
    font-family: 'iconfont';
    src: url('@/font/iconfont/iconfont.woff2?t=1682760782806') format('woff2'),
        url('@/font/iconfont/iconfont.woff?t=1682760782806') format('woff'),
        url('@/font/iconfont/iconfont.ttf?t=1682760782806') format('truetype');
}


.box {
    display: flex;
    margin: 0 auto;
    // background-color: pink;
    width: 90%;
    // height: 1000px;


    .left {
        position: relative;
        flex: 1;
        vertical-align: top;
        // height: 300px;
        // background-color: pink;

        .backbtn {
            cursor: pointer;
            font-family: 'iconfont';
            position: absolute;
            top: 10px;
            left: 0;
            width: 20px;
            height: 20px;
        }

        .videotitle {
            font-size: 23px;
            height: 35px;
            text-align: center;
            margin-bottom: 10px;
        }

        .video {

            video {
                width: 100%;
            }
        }

        .data {
            cursor: pointer;
            font-family: 'iconfont';
            font-size: 20px;

            div {
                display: inline-block;
            }

            p {
                display: inline-block;
                margin-right: 30px;
            }


        }

        .info {
            div {
                font-size: 22px;
            }

            p {
                font-size: 20px;
            }
        }
    }

    .right {
        margin-left: 60px;
        margin-top: 45px;
        vertical-align: top;
        width: 315px;
        // height: 200px;
        // background-color: skyblue;
        border-radius: 20px;
        border: 1px solid #000;
        height: 500px;
        overflow: auto;

        ul {
            padding: 35px;

            li {
                overflow: hidden;
                margin-bottom: 40px;

                .pic {
                    width: 100px;
                    height: 100px;
                    float: left;
                    margin-right: 15px;
                    vertical-align: middle;

                    img {
                        border-radius: 100%;
                        width: 100%;
                        height: 100%;
                    }
                }

                .work {
                    padding-top: 15px;
                    font-size: 17px;
                    font-weight: bold;
                }

                .name {
                    font-size: 17px;
                }

                .info {
                    font-size: 8px;
                }

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }

        &::-webkit-scrollbar {
            width: 10px;
        }
    }
}
</style>