<template>
<div class="page-sidebar-wrapper">
    <!-- BEGIN SIDEBAR -->
    <div class="page-sidebar navbar-collapse collapse">
        <ul class="page-sidebar-menu" :class="{'page-sidebar-menu-closed': $root.settings.sidebarToggler}">
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
import 'jquery-slimscroll'
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
        let vm = this
        vm.$nextTick(() => {
			vm.$('.sub-menu li.nav-item.active.open').parent().parent().addClass('active open')
			vm.$('.page-sidebar-menu li.nav-item').each(function () {
				vm.$(this).on('click', function (event) {
					event.preventDefault()
                    if (vm.$(this).hasClass('active open')) {
                        vm.$(this).removeClass('active open')
                    } else {
                        vm.$(this).addClass('active open').siblings('li.nav-item').removeClass('active open')
                    }
				})
			})
		})
	}
}
</script>
