<template>
<el-scrollbar class="scroll-container" :class="{'is-noOpen': $root.settings.sidebarToggler}">
    <el-menu class="el-menu-vertical-demo" :unique-opened="true" :default-active="$route.path" :router="true" :collapse="$root.settings.sidebarToggler" v-if="navLists.length > 0">
        <el-submenu v-for="nav in navLists" :index="nav.code" v-if="nav.subNav.length > 0" :key="nav.code">
            <template slot="title">
                <i :class="nav.icon"></i>
                <span slot="title">{{nav.name}}</span>
            </template>
            <template v-for="menu in nav.subNav">
                <el-menu-item :index="menu.code" :key="menu.code">{{menu.name}}</el-menu-item>
            </template>
        </el-submenu>
    </el-menu>
</el-scrollbar>
<!-- <div class="scroll-container" ref="scrollContainer" @wheel.prevent="handleScroll">
    <div class="scroll-wrapper" ref="scrollWrapper" :style="{top: top + 'px'}">
        <el-menu class="el-menu-vertical-demo" :unique-opened="true" :default-active="$route.path" :router="true" :collapse="$root.settings.sidebarToggler" v-if="navLists.length > 0">
            <el-submenu v-for="nav in navLists" :index="nav.code" v-if="nav.subNav.length > 0" :key="nav.code">
                <template slot="title">
                    <i :class="nav.icon"></i>
                    <span slot="title">{{nav.name}}</span>
                </template>
                <template v-for="menu in nav.subNav">
                    <el-menu-item :index="menu.code" :key="menu.code">{{menu.name}}</el-menu-item>
                </template>
            </el-submenu>
        </el-menu>
    </div>
</div> -->
</template>

<script>
const delta = 15
export default {
    name: 'sidebarPage',
    props: {
        navLists: {
            type: Array,
            default: []
        }
    },
    data () {
        return {
            top: 0
        }
    },
    methods: {
        handleScroll (e) {
            const eventDelta = e.wheelDelta || -e.deltaY * 3
            const $container = this.$refs.scrollContainer
            const $containerHeight = $container.offsetHeight
            const $wrapper = this.$refs.scrollWrapper
            const $wrapperHeight = $wrapper.offsetHeight
            if (eventDelta > 0) {
                this.top = Math.min(0, this.top + eventDelta)
            } else {
                if ($containerHeight - delta < $wrapperHeight) {
                    if (this.top < -($wrapperHeight - $containerHeight + delta)) {
                        this.top = this.top
                    } else {
                        this.top = Math.max(this.top + eventDelta, $containerHeight - $wrapperHeight - delta)
                    }
                } else {
                    this.top = 0
                }
            }
        }
    }
}
</script>
<style lang="scss">
@import '../../../element-variables.scss';
$menu-width: 236px;
$menu-noOpenWidth: 64px;
$text-color: rgba(255, 255, 255, 0.65);
$active-text-color: rgba(255, 255, 255, 1);
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: $menu-width;
    min-height: 400px;
}
.scroll-container {
    width: $menu-width !important;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    background-color: #001529;
    box-shadow: 2px 0 6px rgba(0, 21, 41, 0.15);
    transition: all .2s;
    &.is-noOpen {
        width: $menu-noOpenWidth !important;
        .el-submenu {
            i[class^="icon-"] {
                margin-right: 0;
                font-size: 18px;
            }
        }
    }
    .scroll-wrapper {
        position: absolute;
        width: 100%!important;
    }
    .el-menu {
        border: none;
        background-color: transparent;
        .el-submenu__title {
            color: $text-color;
            &:hover {
                background-color: transparent;
                color: $active-text-color;
                i {
                    color: $active-text-color;
                }
            }
        }
        .el-submenu__icon-arrow {
            margin-top: -5px;
        }
    }
    .el-menu-item {
        color: $text-color;
        &.is-active {
            color: $--color-primary;
        }
        &:hover,&:focus {
            background-color: $--color-primary;
            color: $active-text-color;
        }
    }
    .el-submenu {
        i[class^="icon-"] {
            vertical-align: middle;
            margin-right: 10px;
            width: 24px;
            text-align: center;
            font-size: 16px;
        }
        &.is-opened {
            .el-submenu__title {
                background-color: transparent;
                color: $active-text-color;
                i {
                    color: $active-text-color;
                }
            }
            .el-menu {
                background-color: #000c17 !important;
            }
        }
    }
    .el-scrollbar__wrap {
        overflow-x: hidden; 
    }
}
</style>
