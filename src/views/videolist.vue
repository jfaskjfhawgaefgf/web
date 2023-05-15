<template>
    <div id="videolist">
        <div class="video">
            <ul>
                <li v-for="item in videoList" :key="item.uid" @click="$router.push(`/player/${item.uid}`)">
                    <div class="video-title">{{ item.title }}</div>
                    <div class="video-img">
                        <img :src="item.img" alt="">
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { getVideoList } from '@/api/getInfo'

export default {
    data() {
        return {
            videoList: ''
        }
    },
    methods: {
        async getVideo() {
            const { data: res } = await getVideoList()
            this.videoList = res.data
            console.log(res.data);
        }
    },
    created() {
        this.getVideo()
    }

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

.video {
    margin: 0 auto;
    width: 90%;
    // height: 900px;
    // background-color: pink;

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        li {
            cursor: pointer;
            margin-bottom: 40px;

            .video-title {
                font-size: 21px;
                margin-bottom: 5px;
                font-weight: bold;
            }

            .video-img {
                width: 520px;
                height: 300px;
                background-color: #000;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

        }
    }
}
</style>