<template>
	<div class="main-container">
        <div class="main-inner">
            <!--nav start-->
            <my-header></my-header>
            <!--nav stop-->

            <div class="content-container" v-bind:style="bgStyle">

                <div v-for="(slide, index) in slides" :key="index" class="image-zone" :style="{backgroundImage: 'url(' + slide.patternUrl + ')'}" :class="{'pic-in': index === activeIndex, 'pic-out': index !== activeIndex}"></div>

                <!--sidebar zone start-->
                <div class="hover-zone">
                    <div class="sidebar">
                        <div class="list v-center">
                            <div v-for="(slide, index) in slides" :key="index" class="item" @click="selectSlide(slide.bgColor, slide.patternUrl, index)">
                                <span class="indicator"></span>
                                <span class="txt">0{{index + 1}}</span>
                            </div>
                        </div>
                        <div class="detail">
                            <div class="item"></div>
                        </div>
                    </div>
                </div>
                <!--sidebar zone stop-->

                <!--info start-->
                <div class="info-zone">
                    <div class="info-holder" :class="slide.class" v-for="(slide, index) in slides" :key="index">
                        <h1 class="txt">{{slide.title}}</h1>
                        <h2 class="txt">{{slide.desc}}</h2>
                    </div>
                </div>
                <!--info stop-->
                
            </div>
        </div>
	</div>
</template>
<script>
import Header from '../components/header.vue'

export default {
    name: 'indexPage',
    components: {
        'my-header': Header,
    },
    data: function () {
        return {
            slides: [{
                title: '这是第一个大标题',
                desc: 'This is the desc 1. This is the desc 1.',
                listDesc: '我是第1个item',
                bgColor: '#ebc042', // 黄色
                patternUrl: require('../assets/bro.png'),
                class: '',
            },
            {
                title: '这是第二个大标题',
                desc: 'This is the desc 2. This is the desc 2.',
                listDesc: '我是第2个item',
                bgColor: '#41ace7', // 蓝色
                patternUrl: require('../assets/dear.png'),
                class: '',
            },
            {
                title: '这是第三个大标题',
                desc: 'This is the desc 3. This is the desc 3.',
                listDesc: '我是第3个item',
                bgColor: '#f96554', // 红色
                patternUrl: require('../assets/dog.png'),
                class: '',
            },
            {
                title: '这是第四个大标题',
                desc: 'This is the desc 4. This is the desc 4.',
                listDesc: '我是第4个item',
                bgColor: '#43d0b4', // 绿色
                patternUrl: require('../assets/nike.png'),
                class: '',
            }],
            bgStyle: {
                backgroundColor: '#ebc042',
            },
            activeIndex: null,
        }
    },
    beforeCreate () {
    },
    mounted () {
        this.init()
    },
    computed: {
    },
    watch: {
    },
    methods: {
        init: function () {
            this.activeIndex = 0
            this.slides[0].class = 'trans-in'
        },
        selectSlide: function(color, url, index) {
            if (this.activeIndex !== index) {
                let formerIndex = this.activeIndex
                this.changeBgColor(color)                
                this.changeBgImg(index)
                this.changeTitle(formerIndex, index)
            }
        },
        changeBgImg: function (index) {
            this.activeIndex = undefined
            setTimeout(() => {
                this.activeIndex = index
            }, 333)
        },
        changeBgColor: function (color) {
            this.bgStyle.backgroundColor = color
        },
        changeTitle: function (formerIndex, index) {
            this.slides[formerIndex].class = 'trans-out'
            setTimeout(() => {
                this.slides[index].class = 'trans-in'
            }, 333)
        },
    },
}
</script>

<style lang="stylus">
    .main-container {
        position absolute
        top 0
        left 0
        width 100%
        height 100%
    }

    .main-inner {
        left 40px
        right 40px
        top 0
        bottom 0
        display flex
        flex-direction column
        position absolute
    }

    .hover-zone {
        width 320px
        height 100%
        position absolute
        right 0
        overflow hidden
    }

    .hover-zone:hover .sidebar {
        transform translate3d(-320px,0,0)
    }

    .sidebar {
        position absolute
        left 100%
        height 100%
        width 320px
        transition transform 500ms cubic-bezier(.215,.61,.355,1)
        transform translate3d(-40px,0,0)
        background-color rgba(0,0,0,.06)
        .list {
            width 100%
            .item {
                height 40px
                line-height 40px
                text-align center
                overflow hidden
                transition color 333ms cubic-bezier(.215,.61,.355,1)
                position relative
                .txt {
                    display block
                    color white
                    float left
                    width 40px
                }
                .indicator {
                    display none
                    width 100%
                    height 100%
                    line-height 40px
                    background-color black
                    transition transform 500ms cubic-bezier(.215,.61,.355,1)
                }
            }
            .item:hover .indicator {
                transform translateX(-100%)
            }
        }
        .detail {
             display inline-flex
             background-color black
             height 100%
             width 280px
             right 0
             position absolute
        }
    }

    .content-container {
        flex 1
        position relative
        box-sizing border-box
        transition background-color 666ms ease-in-out
        display flex
        flex-direction column
        justify-content center
        .image-zone {
            width 100%
            height 100%
            display block
            position absolute
            bottom 0
            left 0
            background-repeat no-repeat
            background-position right bottom
            background-size contain
        }
        .info-zone {
            width 70%
            overflow hidden
            min-height 30%
            position relative
            .info-holder {
                position absolute
                top 0
                left 40px
                h1 {
                    font-size .50rem
                    line-height .68rem
                    color #fff
                    margin-bottom .28rem
                    overflow hidden
                }
                h2 {
                    font-size .23rem
                    line-height .39rem
                    color #000
                    vertical-align top
                    overflow hidden
                    font-weight lighter
                }
                .txt {
                    opacity 0
                }
            }
            .info-holder.trans-in .txt{
                opacity 1
                transition opacity 333ms cubic-bezier(.215,.61,.355,1)
            }
            .info-holder.trans-out .txt{
                opacity 0
                transition opacity 333ms cubic-bezier(.55,.055,.675,.19)
            }
        }
    }

    .pic-in {
        opacity 1
        transition opacity 333ms cubic-bezier(.215,.61,.355,1)
    }

    .pic-out {
        opacity 0
        transition opacity 333ms cubic-bezier(.55,.055,.675,.19)
    }

</style>

