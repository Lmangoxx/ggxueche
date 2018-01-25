<template>
<div class="siderbar-cell">
    <router-link tag="div" class="logo-cell" :class="{'is-noOpen': $root.settings.sidebarToggler}" to="/operation">
        <img src="/static/images/logo-light.png" alt="logo"/>
        <h1 class="ml-10">{{$root.app.name}}</h1>
    </router-link>
    <el-menu class="el-menu-vertical-demo"
        :default-active="$route.path.indexOf('/detail') !== -1 ? $route.path.replace(/detail/g, 'mamanger') : $route.path" :unique-opened="true"
        :router="true"
        :collapse="$root.settings.sidebarToggler"
        v-if="navLists.length > 0"
    >
        <el-submenu v-for="nav in navLists" :index="nav.code" v-if="nav.subNav.length > 0" :key="nav.code">
            <template slot="title">
                <i :class="nav.icon"></i>
                <span slot="title">{{nav.name}}</span>
            </template>
            <el-menu-item v-for="menu in nav.subNav" :index="menu.code" :key="menu.code" @click="tagClick(menu)">{{menu.name}}</el-menu-item>
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
    },
    methods: {
        tagClick (row) {
            // console.log('11')
            const vm = this
            if (vm.$root.tagsList.indexOf(row) === -1) {
                vm.$root.tagsList.push(row)
            }
        }
    }
}
</script>
<style lang="scss">
.siderbar-cell {
	background-color: $--sider-background-color;
}
.logo-cell {
    width: $--sider-openWidth;
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
        width: $--sider-noOpenWidth;
        h1 {
            opacity: 0;
        }
    }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: $--sider-openWidth;
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
        background-color: $--sider-background-color;
        box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
    }
    .el-menu {
        background-color: $--sider-background-open-color !important;
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
        color: $--sider-text-color;
        &:hover {
            background-color: transparent;
            color: $--sider-active-text-color;
            i {
                color: $--sider-active-text-color;
            }
        }
    }
    .el-submenu__icon-arrow {
        margin-top: -5px;
    }
    .el-menu-item {
        color: $--sider-text-color;
        &.is-active {
            color: $--color-primary;
        }
        &:hover,&:focus {
            background-color: $--color-primary;
            color: $--sider-active-text-color;
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
                color: $--sider-active-text-color;
            }
        }
        &.is-active > .el-submenu__title {
            border-left: 3px solid $--color-primary;
        }
        &.is-opened {
            .el-submenu__title {
                background-color: transparent;
                color: $--sider-active-text-color;
                i {
                    color: $--sider-active-text-color;
                }
            }
            .el-menu {
                background-color: $--sider-background-open-color !important;
            }
        }
    }
}
</style>
