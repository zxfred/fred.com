<template>
    <div class="header">
        <div v-for="item in navList" :key="item.name" :class="{active : active == item.name}" class="item" @click="selectNav(item.name)">{{item.name}}
            <div class="indicator"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-header',
    components: {
    },
    data() {
        return {
            navList: [{
                name: '首页',
            },
            {
                name: '作品',
            },
            {
                name: '博客',
            }],
            active: '',
        }
    },
    methods: {
        selectNav: function (name) {
            this.active = name
        },
    }
}
</script>

<style lang="stylus">
    // header
    .header {
        height: 1.04rem;
        background-color: #ffffff;
        padding: 0 1.81rem;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
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
        margin-right: 10px;
        &:last-child {
            margin-right: 0px;
        }
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
</style>