<template>
<div class="header-cell cf">
    <i class="fa pl-20 pr-20" :class="$root.settings.sidebarToggler ? 'fa-indent' : 'fa-dedent'" @click="$root.settings.sidebarToggler = !$root.settings.sidebarToggler" hover></i>
    <div class="fr cf">
        <div class="action" :class="{'is-open': isOpen}" @click.stop="isOpen = true">
            <i class="icon-magnifier" @click="searchToggle"></i>
            <el-input ref="search" class="search" size="small" clearable placeholder="站内搜索"></el-input>
        </div>
        <screenfull class="action" hover></screenfull>
		<el-dropdown v-if="userData.user">
			<i class="action el-dropdown-link" hover>
				<img class="mr-5" src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" width="30" alt="">
				{{userData.user.name}}
			</i>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item><i class="icon-settings mr-5"></i>设置</el-dropdown-item>
				<el-dropdown-item divided>
                    <span @click="signOut"><i class="icon-logout mr-5"></i>退出登录</span>
                </el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
    </div>
</div>
</template>

<script>
import screenfull from '@/components/screenfull'
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
            isOpen: false
		}
	},
	methods: {
        searchToggle () {
            this.isOpen = !this.isOpen
            if (this.isOpen) this.$refs.search.focus()
        },
        signOut () {
            let vm = this
            vm.$axios.get('/loginout').then(res => {
                if (res.code === 0) {
                    vm.$router.push('/login')
                }
            })
        }
	},
    watch: {
        isOpen (val) {
            let vm = this
            if (val) {
                window.addEventListener('click', vm.searchToggle)
            } else {
                window.removeEventListener('click', vm.searchToggle)
            }
        }
    },
	components: {
		screenfull
	}
}
</script>
<style lang="scss">
@import '../../../../element-variables.scss';
.header-cell {
    height: $--header-height;
    line-height: $--header-height;
    margin-left: -$--main-padding;
    margin-right: -$--main-padding;
    i {
        display: inline-block;
        height: inherit;
        line-height: inherit;
        text-align: center;
        cursor: pointer;
        &[hover]:hover {
            background-color: $--color-primary-light-9;
        }
    }
    .action {
    	display: inline-block;
		height: inherit;
        font-size: 14px;
		padding: 0 12px;
    }
    .el-input__inner {
        border-top: 0;
        border-left: 0;
        border-right: 0;
        border-radius: 0;
        padding: 0;
    }
    .search {
        width: 0px;
        transition: $--all-transition;
    }
    .is-open .search {
        width: 180px;
        margin-left: 5px;
    }
}
</style>
