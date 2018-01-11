<template>
<div class="header-cell cf">
    <i class="fa" :class="$root.settings.sidebarToggler ? 'fa-indent' : 'fa-dedent'" @click="$root.settings.sidebarToggler = !$root.settings.sidebarToggler"></i>
    <div class="fr">
        <screenfull></screenfull>
		<el-dropdown class="action" v-if="userData.user" tag="span">
			<span class="el-dropdown-link">
				<img src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" width="18" alt="">
				{{userData.user.name}}
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item>设置</el-dropdown-item>
				<el-dropdown-item @click="signOut" divided>退出</el-dropdown-item>
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
		}
	},
	methods: {
        signOut () {
            let vm = this
            vm.$axios.get('/loginout').then(res => {
                if (res.code === 0) {
                    vm.$router.push('/login')
                }
            })
        }
	},
	components: {
		screenfull
	}
}
</script>
<style lang="scss" scoped>
@import '../../../element-variables.scss';
.header-cell {
    height: $--header-height;
    line-height: $--header-height;
    margin-left: -$--main-padding;
    margin-right: -$--main-padding;
    i {
        display: inline-block;
        width: 64px;
        height: inherit;
        line-height: inherit;
        font-size: 18px;
        text-align: center;
        cursor: pointer;
        &:hover {
            background-color: $--color-primary-light-9;
        }
    }
    .action {
    	display: inline-block;
		height: inherit;
		padding: 0 20px;
    }
}
</style>
