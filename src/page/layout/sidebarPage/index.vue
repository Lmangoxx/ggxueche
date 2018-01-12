<template>
<div class="siderbar-cell">
    <router-link tag="div" class="logo-cell" :class="{'is-noOpen': $root.settings.sidebarToggler}" to="/operation">
        <img src="/static/images/logo-light.png" alt="logo"/>
        <h1 class="ml-10">{{$root.app.name}}</h1>
    </router-link>
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
        <el-menu-item index="2">
            <i class="icon-book-open"></i>
            <span slot="title">使用文档</span>
        </el-menu-item>
    </el-menu>
</div>
</template>

<script>
export default {
    name: 'sidebarPage',
    props: {
        navLists: {
            type: Array,
            default: []
        }
    }
}
</script>
<style lang="scss">
@import '../../../../element-variables.scss';
$menu-width: 236px;
$menu-noOpenWidth: 64px;
$background-color: #001529;
$open-background-color: #000c17;
$text-color: rgba(255, 255, 255, 0.65);
$active-text-color: rgba(255, 255, 255, 1);
.logo-cell {
    width: $menu-width;
    height: $--header-height;
    line-height: $--header-height;
    background: #002140;
    text-align: center;
    overflow: hidden;
    transition: width .35s;
    cursor: pointer;
    img {
        display: inline-block;
        vertical-align: middle;
        height: 32px;
    }
    h1 {
        color: #fff;
        display: inline-block;
        vertical-align: middle;
        font-size: 20px;
        font-weight: 600;
        opacity: 1;
        transition: opacity .15s;
        transition-delay: .3s;
    }
    &.is-noOpen {
        width: $menu-noOpenWidth;
        h1 {
            opacity: 0;
        }
    }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: $menu-width;
    min-height: 400px;
}
.el-menu-vertical-demo {
    border: none;
    background-color: transparent;
    &:before {
        content: '';
        display: block;
        position: fixed;
        top: 0;
        bottom: 0;
        z-index: -1;
        width: inherit;
        background-color: $background-color;
        box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
    }
    .el-menu {
        background-color: $open-background-color !important;
    }
    &.el-menu--collapse {
        li[role="menuitem"] {
            i[class^="icon-"] {
                margin: 0 3px;
                font-size: 18px;
            }
            &.is-active > .el-submenu__title i {
                margin-left: 0;
            }
        }
    }
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
    li[role="menuitem"] {
        i[class^="icon-"] {
            vertical-align: middle;
            margin-right: 10px;
            width: 24px;
            text-align: center;
            font-size: 16px;
        }
        &:hover {
            i {
                color: $active-text-color;
            }
        }
        &.is-active > .el-submenu__title {
            border-left: 3px solid $--color-primary;
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
                background-color: $open-background-color !important;
            }
        }
    }
}
</style>
