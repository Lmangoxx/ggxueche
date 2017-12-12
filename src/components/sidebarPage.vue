<template>
<div class="page-sidebar-wrapper">
    <!-- BEGIN SIDEBAR -->
    <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
    <!-- DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed -->
    <div class="page-sidebar navbar-collapse collapse">
        <!-- BEGIN SIDEBAR MENU -->
        <!-- DOC: Apply "page-sidebar-menu-light" class right after "page-sidebar-menu" to enable light sidebar menu style(without borders) -->
        <!-- DOC: Apply "page-sidebar-menu-hover-submenu" class right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode -->
        <!-- DOC: Apply "page-sidebar-menu-closed" class right after "page-sidebar-menu" to collapse("page-sidebar-closed" class must be applied to the body element) the sidebar sub menu mode -->
        <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
        <!-- DOC: Set data-keep-expand="true" to keep the submenues expanded -->
        <!-- DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed -->
        <ul class="page-sidebar-menu"
            :class="{'page-sidebar-menu-closed': $root.settings.sidebarToggler}"
            data-keep-expanded="false"
            data-auto-scroll="true"
            data-slide-speed="200"
        >
            <li class="nav-item"
            	v-for="nav in navLists"
                v-if="nav.subNav.length > 0"
                :key="nav.code"
            >
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i :class="nav.icon"></i>
                    <span class="title">{{nav.name}}</span>
                    <span class="arrow"></span>
                </a>
                <el-collapse-transition>
                    <ul class="sub-menu">
                        <li class="nav-item" :class="{'active open': $route.path == '/' + menu.code}" v-for="menu in nav.subNav" :key="menu.code">
                            <router-link class="nav-link" :to="'/' + menu.code">
                                <span class="title">{{menu.name}}</span>
                            </router-link>
                        </li>
                    </ul>
                </el-collapse-transition>
            </li>
        </ul>
        <!-- END SIDEBAR MENU -->
    </div>
    <!-- END SIDEBAR -->
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
	data () {
		return {
		}
	},
    updated () {
        let _this = this
        _this.$nextTick(() => {
			_this.$('.sub-menu li.nav-item.active.open').parent().parent().addClass('active open')
			_this.$('.page-sidebar-menu li.nav-item').each(function () {
				_this.$(this).on('click', function (event) {
					event.preventDefault()
					_this.$(this).addClass('active open').siblings('li.nav-item').removeClass('active open')
					// _this.$('body span.arrow').removeClass('open')
					_this.$(this).find('span.arrow').addClass('open')
				})
			})
		})
	},
	methods: {
		openSubNav (item) {}
	}
}
</script>
