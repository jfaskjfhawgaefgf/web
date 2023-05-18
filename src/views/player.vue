<template>
    <div id="player">
        <el-dialog title="评价" :visible.sync="scoreWindows" width="30%" :before-close="handleClose">
            <span>评分</span>
            <el-rate v-model="yourScore" show-score></el-rate>
            <span slot="footer" class="dialog-footer">
                <el-button @click="scoreWindows = false">取 消</el-button>
                <el-button type="primary" @click="addScores" :loading=okbtnLoad>确 定</el-button>
            </span>
        </el-dialog>
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
                    <a href="javascript:;" @click="downloadBtn">
                        <div class="download">&#xe600;<p>{{ videoInfo.download }}</p>
                        </div>
                    </a>
                    <a href="javascript:;" @click="scoreWindows = true">
                        <div class="score">&#xe623;<p><el-rate v-model="videoInfo.score" class="pf" disabled></el-rate>
                            </p>
                        </div>
                    </a>
                </div>
                <div class="info">
                    <div>影片介绍</div>
                    <p>{{ videoInfo.info }}</p>
                </div>
            </div>


            <div class="right">
                <ul>
                    <li v-for="item in videoInfo.user" :key="item.key">
                        <div class="pic">
                            <img :src="item.pic" alt="">
                        </div>
                        <div class="work">{{ item.works }}</div>
                        <div class="name">{{ item.uname }}</div>
                        <div class="info">{{ item.info }}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { getVideoInfo } from '@/api/getInfo'
import { addVisit, addDownload, addScore } from '@/api/pushInfo'
export default {
    data() {
        return {
            videoInfo: {},
            TipsInfo: '',
            loading: null,
            yourScore: null,
            scoreWindows: false,
            okbtnLoad: false
        }
    },
    methods: {
        async getVideoInfos() {
            const { data: req } = await getVideoInfo(this.$route.params.id)
            // console.log(req);
            if (!req.status || !req) {
                this.TipsInfo = '服务器错误'
                this.openTips()
                return this.$router.push(`/error?from=servererror&uid=${this.$route.params.id}`)
            }
            if (req.status != 200) {
                this.TipsInfo = '视频不存在'
                this.openTips()
                return this.$router.push(`/error?from=novideo&uid=${this.$route.params.id}`)
            }
            this.videoInfo = req.data
            this.loading.close()
        },
        downloadBtn() {
            this.addDownloads()
            window.open(this.videoInfo.src)
        },
        addVisits() {
            addVisit(this.$route.params.id)
        },
        addDownloads() {
            addDownload(this.$route.params.id)
        },
        openTips() {
            this.$notify.error({
                title: '错误',
                message: this.TipsInfo,
                showClose: false,
                offset: 100
            });
        },
        openFullScreen2() {
            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            })
            this.loading = loading
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        },
        async addScores() {
            if (this.yourScore > 5 || this.yourScore < 1) {
                this.TipsInfo = '评分需在1~5之间！'
                this.openTips()
                return
            }
            this.okbtnLoad = true
            const { data: res } = await addScore(this.videoInfo.uid, this.yourScore)
            if (res.status == 200) {
                this.okbtnLoad = false
                this.scoreWindows = false
                this.tjsuccess()
                return
            }
            this.TipsInfo = res.msg
            this.openTips()
            this.okbtnLoad = false

        },
        tjsuccess() {
            this.$message({
                message: '提交成功',
                type: 'success'
            });
        },




    },
    created() {
        this.openFullScreen2()
        this.getVideoInfos()
        this.addVisits()
    },


}
</script>

<style lang="less" scoped>
* {
    margin: 0;
    // padding: 0;
    box-sizing: border-box;
}

li {
    list-style: none;
}

a {
    color: #000;
    text-decoration: none;

    &:visit {
        color: #000
    }

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

.pf {
    vertical-align: top;
}

.score :deep(.el-rate__item) {
    cursor: pointer !important;
}
</style>