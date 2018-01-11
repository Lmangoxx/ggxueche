<template>
<el-container>
    <sidebar-page :nav-lists="navLists"></sidebar-page>
    <el-main :class="{'is-noOpen': $root.settings.sidebarToggler}">
        <el-header height="64px"><header-page :user-data="userData"></header-page></el-header>
        <breadcrumb-page></breadcrumb-page>
        <transition name="el-fade-in">
            <router-view></router-view>
        </transition>
        <el-footer><footer-page></footer-page></el-footer>
    </el-main>
</el-container>
</template>

<script>
import headerPage from '@/components/headerPage'
import breadcrumbPage from '@/components/breadcrumbPage'
import sidebarPage from '@/components/sidebarPage'
import footerPage from '@/components/footerPage'
export default {
	name: 'operation',
	data () {
		return {
            userData: {},
            navIcons: [
                {
                    name: '数据统计',
                    icon: 'icon-bar-chart'
                },
                {
                    name: '运营服务',
                    icon: 'icon-screen-desktop'
                },
                {
                    name: '业务设置',
                    icon: 'icon-settings'
                },
                {
                    name: '后台权限',
                    icon: 'icon-lock'
                },
                {
                    name: '驾校业务',
                    icon: 'icon-grid'
                },
                {
                    name: '用户分析',
                    icon: 'icon-users'
                },
                {
                    name: '业务订单',
                    icon: 'icon-bag'
                },
                {
                    name: '财务管理',
                    icon: 'icon-wallet'
                }
            ],
			navLists: []// 菜单列表数据
		}
	},
	mounted () {
        const vm = this
        vm.$axios.get('/me').then((res) => {
            vm.userData = res.data || {}
            if (!vm.userData) {
                return
            }
            vm.userData.operation.forEach((m, index) => {
                var num = 0
                m.parentOperation.code = '/' + m.parentOperation.code.replace(/(operation)|(\.)/g, '')
                m.code = m.code.replace(/\./g, '/').replace(/operation/g, m.parentOperation.code)
                if (!m.parentOperation) { // 判断是否有二级菜单，如果没有，返回
                    return false
                }
                vm.navLists.forEach((n, index) => {
                    if (n.name !== m.parentOperation.name) {
                        num += 1
                    } else if (n.subNav && vm.navPermission(m, vm.userData.user.permissionList)) {
                        n.subNav.push(m)
                    }
                })
                vm.navIcons.forEach((i, index) => {
                    // 给一级菜单添加对应的图标
                    if (m.parentOperation.name === i.name) {
                        m.parentOperation.icon = i.icon
                    }
                })
                if (num === vm.navLists.length) {
                    if (vm.navPermission(m, vm.userData.user.permissionList)) {
                        m.parentOperation.subNav = [m]
                    } else {
                        m.parentOperation.subNav = []
                    }
                    vm.navLists.push(m.parentOperation)
                }
            })
        })
    },
	methods: {
        // 菜单权限过滤
        navPermission (data, permissionList) {
            let out = false
            if (permissionList && permissionList.length > 0) {
                if (permissionList.indexOf('*') !== -1) {
                    out = true
                } else {
                    var all = data.permission.substring(0, data.permission.indexOf(':') + 1) + '*'
                    if (permissionList.indexOf(all) !== -1 || permissionList.indexOf(data.permission) !== -1) {
                        out = true
                    }
                }
            }
            return out
        }
	},
    components: {
        headerPage,
        breadcrumbPage,
        sidebarPage,
        footerPage
    }
}
</script>
<style lang="scss" scoped>
@import '../../element-variables.scss';
.el-header {
    margin-top: -$--main-padding;
    margin-left: -$--main-padding;
    margin-right: -$--main-padding;
    margin-bottom: $--main-padding;
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.el-main {
    background: #f0f2f5;
}
.el-footer {
    margin-bottom: -$--main-padding;
    margin-left: -$--main-padding;
    margin-right: -$--main-padding;
    margin-top: $--main-padding;
}
</style>
