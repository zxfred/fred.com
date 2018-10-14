<template>
	<div class="main-container">

        <!-- nav start -->
        <my-header></my-header>
        <!-- nav stop -->

        <div class="content-container" v-bind:style="bgStyle">

            <div class="image-zone" :style="backgroundStyle"></div>

            <!-- sidebar start -->
            <div class="sidebar">
                <div v-for="(slide, index) in slides" :key="index" class="item" @click="selectSlide(slide.bgColor, slide.patternUrl)">0{{index + 1}}</div>
            </div>
            <!-- sidebar stop -->

            <!-- info start -->
            <div v-for="(slide, index) in slides" :key="index" class="info-zone">
                <h1 class="txt">{{slide.title}}</h1>
                <h2 class="txt">{{slide.desc}}</h2>
            </div>
            <!-- info stop -->
            
        </div>

	</div>
</template>
<script>
import Header from '../components/header.vue'

export default {
    name: 'indexPage',
    components: {
        'my-header': Header
    },
    data: function () {
        return {
            slides: [{
                    title: '这是第一个大标题',
                    desc: 'This is the desc 1. This is the desc 1. This is the desc 1.',
                    bgColor: '#ebc042', // 黄色
                    patternUrl: '../assets/bro.png',
                },
                {
                    title: '这是第二个大标题',
                    desc: 'This is the desc 2. This is the desc 2. This is the desc 2.',
                    bgColor: '#41ace7', // 蓝色
                    patternUrl: '../assets/dear.png',
                },
                {
                    title: '这是第三个大标题',
                    desc: 'This is the desc 3. This is the desc 3. This is the desc 3.',
                    bgColor: '#f96554', // 红色
                    patternUrl: '../assets/dog.png',
                },
                {
                    title: '这是第四个大标题',
                    desc: 'This is the desc 4. This is the desc 4. This is the desc 4.',
                    bgColor: '#43d0b4', // 绿色
                    patternUrl: '../assets/nike.png',
            }],
            backgroundStyle: {
                backgroundImage: 'url(' + require('../assets/dog.png') + ')',
            },
            bgStyle: {
                backgroundColor: '#42d0b4',
            },
        }
    },
    beforeCreate () {
    },
    mounted () {
        
    },
    computed: {
    },
    watch: {
    },
    methods: {
        selectSlide: function (color, url) {
            this.changeBgColor()
            // this.changeBgImg()
            // this.changeTitle()
        },
        changeBgImg: function () {
            let that = this
            this.bgImgStyle.opacity = 0
        },
        changeBgColor: function (color) {
            this.bgStyle.backgroundColor = color
        },
        changeTitle: function (a) {
            let that = this
            if (a == 1) {
                this.imgClass = 'top trans-out'
            } else {
                this.imgClass = 'trans-in'
            }
        },
    },
}
</script>

<style lang="stylus">
    .main-container {
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .sidebar {
        position: absolute;
        right: 0;
        height: 100%;
        width: 1.08rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .item {
            height: .6rem;
            color: white;
            line-height: .6rem;
            text-align: center;
            overflow: hidden;
            transition: color 333ms cubic-bezier(.215,.61,.355,1);
        }
    }

    .content-container {
        flex: 1;
        position: relative;
        box-sizing: border-box;
        transition: background-color 666ms ease-in-out;
        padding: 0 .31rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .image-zone {
            width: 100%;
            height: 100%;
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            background-size: 100% auto;
            background-repeat: no-repeat;
            background-position: bottom;
        }
        .info-zone {
            overflow:hidden;
            min-height: 30%;
            z-index: 1;
            h1{
                font-size: .50rem;
                line-height: .68rem;
                color: #000;
                margin-bottom: .28rem;
                overflow:hidden;
            }
            h2{
                font-size: .23rem;
                line-height: .39rem;
                color: #fff;
                font-weight: light;
                vertical-align: top;
                overflow:hidden;
                font-weight: lighter;
            }
        }
    }

    .top .txt {
        transform: translate3d(0,-24px,0)
    }

    .bottom .txt {
        transform: translate3d(0,24px,0)
    }

    .trans-in .txt {
        opacity: 1;
        transform: translate3d(0,0,0);
        transition: transform 333ms cubic-bezier(.215,.61,.355,1),opacity 333ms cubic-bezier(.215,.61,.355,1)
    }

    .trans-out .txt {
        opacity: 0;
        transition: transform 333ms cubic-bezier(.55,.055,.675,.19),opacity 333ms cubic-bezier(.55,.055,.675,.19)
    }

    .trans-out.top .txt {
        transform: translate3d(0,24px,0)
    }

    .trans-out.bottom .txt {
        transform: translate3d(0,-24px,0)
    }

    .pic-in {
        opacity: 1;
        transition: opacity 333ms cubic-bezier(.215,.61,.355,1);
    }

    .pic-out {
        opacity: 0;
        transition: opacity 333ms cubic-bezier(.55,.055,.675,.19);
    }

</style>

