<template>
	<div class="main-container">
        <div class="main-inner">
            <!-- nav start -->
            <my-header></my-header>
            <!-- nav stop -->

            <div class="content-container" v-bind:style="bgStyle">

                <div v-for="(slide, index) in slides" :key="index" class="image-zone" :style="{backgroundImage: 'url(' + slide.patternUrl + ')'}" :class="bgClass"></div>

                <!-- sidebar start -->
                <div class="sidebar">
                    <div v-for="(slide, index) in slides" :key="index" class="item" @click="selectSlide(slide.bgColor, slide.patternUrl, index)">0{{index + 1}}</div>
                </div>
                <!-- sidebar stop -->

                <!-- info start -->
                <div class="info-zone">
                    <div class="info-holder" :class="slide.class" v-for="(slide, index) in slides" :key="index">
                        <h1 class="txt">{{slide.title}}</h1>
                        <h2 class="txt">{{slide.desc}}</h2>
                    </div>
                </div>
                <!-- info stop -->
                
            </div>
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
                    desc: 'This is the desc 1. This is the desc 1.',
                    bgColor: '#ebc042', // 黄色
                    patternUrl: require('../assets/bro.png'),
                    class: ''
                },
                {
                    title: '这是第二个大标题',
                    desc: 'This is the desc 2. This is the desc 2.',
                    bgColor: '#41ace7', // 蓝色
                    patternUrl: require('../assets/dear.png'),
                    class: ''
                },
                {
                    title: '这是第三个大标题',
                    desc: 'This is the desc 3. This is the desc 3.',
                    bgColor: '#f96554', // 红色
                    patternUrl: require('../assets/dog.png'),
                    class: ''
                },
                {
                    title: '这是第四个大标题',
                    desc: 'This is the desc 4. This is the desc 4.',
                    bgColor: '#43d0b4', // 绿色
                    patternUrl: require('../assets/nike.png'),
                    class: ''
            }],
            bgStyle: {
                backgroundColor: '#ebc042',
            },
            activeIndex: 0,
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
        selectSlide: function (color, url, index) {
            let that = this
            this.activeIndex = index
            setTimeout(function () {
                that.changeBgColor(color)

                setTimeout(function () {
                    
                }, 400)
                // this.changeBgImg()
                // this.changeTitle()
            }, 150)
            that.changeBgImg()
        },
        changeBgImg: function () {
            let that = this
            that.bgClass = 'pic-out'
            setTimeout(function () {
                that.backgroundStyle.backgroundImage = 'url(' + that.slides[that.activeIndex].patternUrl + ')'
                that.bgClass = 'pic-in'
            }, 400)
        },
        changeBgColor: function (color) {
            this.bgStyle.backgroundColor = color
        },
        changeTitle: function () {
            this.imgClass = 'top trans-out'
            this.imgClass = 'trans-in'
        },
    },
}
</script>

<style lang="stylus">
    .main-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .main-inner {
        left: 40px;
        right: 40px;
        top: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        position: absolute;
    }

    .sidebar {
        position: absolute;
        right: 0;
        height: 100%;
        width: .9rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: transform 500ms cubic-bezier(.215,.61,.355,1);
        background-color: rgba(0,0,0,.06);
        z-index: 1;
        .item {
            height: .9rem;
            color: white;
            line-height: .9rem;
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
            background-repeat: no-repeat;
            background-position: right bottom;
            background-size: contain;
        }
        .info-zone {
            width: 70%;
            overflow:hidden;
            min-height: 30%;
            position: relative;
            .info-holder {
                position: absolute;
                top: 0;
                left: 40px;
                h1 {
                    font-size: .50rem;
                    line-height: .68rem;
                    color: #fff;
                    margin-bottom: .28rem;
                    overflow:hidden;
                }
                h2 {
                    font-size: .23rem;
                    line-height: .39rem;
                    color: #000;
                    vertical-align: top;
                    overflow:hidden;
                    font-weight: lighter;
                }
                .txt {
                    opacity: 0;
                }
                &.trans-in {
                    .txt {
                        opacity: 1;
                        transform: translate3d(0,0,0);
                        transition: transform 333ms cubic-bezier(.215,.61,.355,1),opacity 333ms cubic-bezier(.215,.61,.355,1)
                    }
                }
                &.trans-out {
                    .txt {
                        opacity: 0;
                        transition: transform 333ms cubic-bezier(.55,.055,.675,.19),opacity 333ms cubic-bezier(.55,.055,.675,.19)
                    }
                }
            }
        }
    }

    .top .txt {
        transform: translate3d(0,-0.5rem,0)
    }

    .bottom .txt {
        transform: translate3d(0,0.5rem,0)
    }

    .trans-out.top .txt {
        transform: translate3d(0,0.5rem,0)
    }

    .trans-out.bottom .txt {
        transform: translate3d(0,-0.5rem,0)
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

