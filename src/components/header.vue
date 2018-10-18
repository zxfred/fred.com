<template>
    <header class="header">
        <div class="logo"></div>
        <nav class="nav vh-center">
            <div v-for="item in navList" :key="item.name" :class="{active : active == item.name}" class="item" @click="selectNav(item.name)">{{item.name}}
                <div class="indicator"></div>
            </div>
        </nav>
        <div class="icons" >
            <div class="icon-holder" v-for="icon in iconList">
                <font-awesome-icon :icon="[icon.type, icon.name]" size="2x" />
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'my-header',
    mounted () {
    },
    components: {
    },
    data() {
        return {

            navList: [{
                name: '首页',
            },
            {
                name: '我',
            },
            {
                name: '博客',
            }],

            iconList: [{
                name: 'envelope',
                type: 'fas',
            },{
                name: 'weixin',
                type: 'fab',
            },{
                name: 'github',
                type: 'fab',
            }],

            active: '',
        }
    },
    methods: {
        selectNav: function (name) {
            this.active = name
        },
    },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">

.header {
    height 76px
    background-color #ffffff
    box-sizing border-box
    width 100%
    position relative
    .logo {
        position absolute
        left 100px
        height 76px
        width 76px
        background-image url('../assets/donut.png')
        background-size 100% 100%
    }
    .nav {
        height 34px
        .item {
            display inline-block
            width 76px
            height 100%
            font-size 15px
            line-height 25px
            color #000000
            text-align center
            box-sizing border-box
            position relative
            margin 0 10px
            .indicator{
                position absolute
                height 3px
                left 15px
                right 15px
                bottom 0
                background-color #eae8e8
                transition background-color 333ms ease-in-out
            }
        }
        .item.active .indicator{
            background-color #000000
            transition background-color 333ms ease-in-out
        }
    }
    .icons {
        position absolute
        top 0
        bottom 0
        right 40px
        .icon-holder {
            display inline-flex
            height 100%
            margin 0 10px
            flex-direction column
            justify-content center
            svg {
                color #000
                transition color 333ms cubic-bezier(.215, .61, .355, 1)
            }
            svg:hover {
                color #a0a0a0
                transition color 333ms cubic-bezier(.215, .61, .355, 1)
            }
        }
    }
}

</style>