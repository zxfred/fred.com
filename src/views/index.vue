<template>
	<div class="main-container">

        <div class="header">
            <div v-for="item in navList" :key="item.name" :class="{active : active == item.name}" class="item" @click="selectNav(item.name)">{{item.name}}
                <div class="indicator"></div>
            </div>
        </div>

        <div class="content-container" v-bind:style="bgStyle">

            <img class="bg-img" :src="bgSrc" v-bind:style="bgImgStyle" alt="">
            <img class="bg-img" src="https://p.upyun.com/demo/tmp/NInuZMbH.png" style="display:none">

            <div class="side-bar">
                <div class="item" @click="changeBgColor('#fa6653')">01</div>
                <div class="item" @click="changeBgColor('#42d0b4')">02</div>
                <div class="item" @click="changePage">03</div>
                <div class="item" @click="changeTitle">04</div>
            </div>

            <div class="title-zone" :class="{ 'top-out': titleAni.topOut, 'top-in': titleAni.topIn, 'bottom-out': titleAni.bottomOut, 'bottom-in': titleAni.bottomIn }">
                <h1 class="txt">{{title.first}}</h1>
                <h2 class="txt">{{title.sec}}</h2>
            </div>
        </div>

	</div>
</template>
<script>
export default {
    name: 'index',
    components: {
    },
    data: function () {
        return {
            navList: [{
                name: 'tab1',
            },
            {
                name: 'tab2',
            },
            {
                name: 'tab3',
            }],
            title: {
                first: '这是一个大标题',
                sec: 'At the strawberry music festival, What "good" things did we do?',
            },
            titleAni: {
                topOut: false,
                topIn: false,
                bottomOut: false,
                bottomIn: false,
            },
            active: '',
            bgImgStyle: {
                opacity: 0.1,
            },
            bgSrc: '../src/assets/nike.png',
            bgStyle: {
                backgroundColor: '#42d0b4',
            },
            count: 0,
            show: false,
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
        changePage: function () {
            this.changeBgImg()
            this.changeBgColor('#9e4ced')
            this.changeTitle()
        },
        changeBgImg: function () {
            let that = this
            this.bgImgStyle.opacity = 0
            setTimeout(function () {
                let img = new Image()
                img.onload = function () {
                    that.bgSrc = 'https://p.upyun.com/demo/tmp/uwCjN7nD.png'
                    that.bgImgStyle.opacity = 0.1
                }
                img.src = 'https://p.upyun.com/demo/tmp/uwCjN7nD.png'
            }, 333)
        },
        changeBgColor: function (color) {
            this.bgStyle.backgroundColor = color
        },
        changeTitle: function () {
            let that = this
            this.titleAni.bottom = true
            setTimeout(function () {
                that.title.first = '这是第二个大标题'
                that.title.sec = 'At the strawberry music festival, What "good" things did we do?'.split('').reverse().join('')
                that.titleAni.bottomOut = false
                that.titleAni.topIn = true
            }, 400)
        },
        selectNav: function (name) {
            this.active = name
        },
    },
}
</script>

<style lang="stylus">
    // @import '../common/stylus/one.styl'
    // @import '../common/stylus/omit.styl'

    .main-container {
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
    }

    // sidebar
    .side-bar {
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
            text-align: center;
            overflow: hidden;
            transition: color 333ms cubic-bezier(.215,.61,.355,1);
        }
    }

    // header
    .header {
        height: 1.04rem;
        background-color: #ffffff;
        padding: 0 1.81rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .header .item {
        display: inline-block;
        width: 1.04rem;
        height: 100%;
        font-family: FZLTZHK--GBK1-0;
        font-size: .22rem;
        line-height: .22rem;
        color: #000000;
        text-align: center;
        padding-top: .39rem;
        box-sizing: border-box;
        position: relative;
    }

    .header .item .indicator{
        height: .04rem;
        width: 100%;
        border-radius: .02rem;
        position: absolute;
        bottom: .29rem;
        background-color: #eae8e8;
        transition: background-color 333ms ease-in-out;
    }

    .header .item.active .indicator{
        background-color: #000000;
        transition: background-color 333ms ease-in-out;
    }

    .content-container {
        flex: 1;
        position: relative;
        box-sizing: border-box;
        transition: background-color 666ms ease-in-out;
        padding: 0 .31rem;
        .bg-img {
            width: 100%;
            height: auto;
            max-height: 100%;
            display: block;
            position: absolute;
            bottom: 0;
            transition: opacity 333ms cubic-bezier(.215,.61,.355,1);
        }
        .title-zone {
            padding-top: 1.11rem;
            overflow:hidden;

            h1{
                font-family: FZLTTHK--GBK1-0;
                font-size: .50rem;
                line-height: .68rem;
                color: #ffffff;
                margin-bottom: .28rem;
                overflow:hidden;
            }

            h2{
                font-family: FZLTZHK--GBK1-0;
                font-size: .23rem;
                line-height: .39rem;
                color: #000;
                font-weight: light;
                vertical-align: top;
                overflow:hidden;
            }
        }
    }

    @keyframes topOut {
        0% {
            opacity: 1;
            transform: translate3d(0,0,0)
        }
        // 50% {
        //     opacity: 0.5;
        //     transform: translate3d(0,-0.25rem,0)
        // }
        100% {
            opacity: 0;
            transform: translate3d(0,-0.5rem,0)
        }
    }

    @keyframes topIn {
        0% {
            opacity: 0;
            transform: translate3d(0,-0.5rem,0)
        }
        // 50% {
        //     opacity: 0.5;
        //     transform: translate3d(0,-0.25rem,0)
        // }
        100% {
            opacity: 1;
            transform: translate3d(0,0,0)
        }
    }

    @keyframes bottomOut {
        0% {
            opacity: 1;
            transform: translate3d(0,0,0)
        }
        // 50% {
        //     opacity: 0.5;
        //     transform: translate3d(0,0.25rem,0)
        // }
        100% {
            opacity: 0;
            transform: translate3d(0,0.5rem,0)
        }
    }

    @keyframes bottomIn {
        0% {
            opacity: 0;
            transform: translate3d(0,0.5rem,0)
        }
        // 50% {
        //     opacity: 0.5;
        //     transform: translate3d(0,-0.25rem,0)
        // }
        100% {
            opacity: 1;
            transform: translate3d(0,0,0)
        }
    }

    .top-out .txt{
        animation-name: topOut;
        animation-duration: 333ms;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        animation-fill-mode: forwards;
    }

    .top-in .txt{
        animation-name: topIn;
        animation-duration: 333ms;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(.215,.61,.355,1);
        animation-fill-mode: forwards;
    }

    .bottom-out .txt{
        animation-name: bottomOut;
        animation-duration: 333ms;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        animation-fill-mode: forwards;
    }

    .bottom-in .txt{
        animation-name: bottomIn;
        animation-duration: 333ms;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(.215,.61,.355,1);
        animation-fill-mode: forwards;
    }

</style>

