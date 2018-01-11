<template>
<div class="header-cell">
    <i class="fa fa-fw" :class="$root.settings.sidebarToggler ? 'fa-indent' : 'fa-dedent'" @click="$root.settings.sidebarToggler = !$root.settings.sidebarToggler"></i>
    
    <div class="page-header-inner ">
        <!-- BEGIN LOGO -->
        <div class="page-logo">
        </div>
        <!-- END LOGO -->
        <!-- BEGIN RESPONSIVE MENU TOGGLER -->
        <a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse"> </a>
        <!-- END RESPONSIVE MENU TOGGLER -->
        <!-- BEGIN PAGE TOP -->
        <div class="page-top">
            <!-- BEGIN TOP NAVIGATION MENU -->
            <div class="top-menu" v-if="userData.user">
                <ul class="nav navbar-nav pull-right">
                    <!-- BEGIN USER LOGIN DROPDOWN -->
                    <li class="dropdown dropdown-user dropdown-dark">
                        <a href="javascript:;" class="dropdown-toggle">
                            <span class="username username-hide-on-mobile">{{userData.user.name}}</span>
                            <!-- DOC: Do not remove below empty space(&nbsp;) as its purposely used -->
                            <img alt="" class="img-circle" src="static/assets/layouts/layout4/img/avatar9.jpg" />
                        </a>
                    </li>
                    <!-- END USER LOGIN DROPDOWN -->
                    <!-- BEGIN QUICK SIDEBAR TOGGLER -->
                    <li class="dropdown dropdown-extended quick-sidebar-toggler" @click="signOut()">
                        <span class="sr-only">Toggle Quick Sidebar</span>
                        <i class="icon-logout"></i>
                    </li>
                    <!-- END QUICK SIDEBAR TOGGLER -->
                </ul>
            </div>
            <!-- END TOP NAVIGATION MENU -->
        </div>
        <!-- END PAGE TOP -->
    </div>
    <!-- END HEADER INNER -->
</div>
<!-- END HEADER -->
</template>

<script>
export default {
    name: 'headerPage',
    props: {
        userData: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
	data () {
		return {
		}
	},
	methods: {
        signOut () {
            let vm = this
            vm.$axios.get('/loginout').then(response => {
                if (response.code === 0) {
                    vm.$router.push('/login')
                }
            })
        }
	}
}
</script>
<style lang="scss" scoped>
@import '../../../element-variables.scss';
.header-cell {
    height: $--header-height;
    line-height: $--header-height;
    margin-left: -$--main-padding;
    i {
        display: inline-block;
        width: 64px;
        height: 64px;
        line-height: inherit;
        font-size: 18px;
        cursor: pointer;
        &:hover {
            background-color: $--color-primary-light-9;
        }
    }
}
</style>
