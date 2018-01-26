<template>
<div class="tags-cell">
	<el-tabs type="border-card" v-model="activeTag">
		<el-tab-pane v-for="(tag, index) in tagsList" :name="tag.path" :key="tag.path">
			<router-link slot="label" :to="tag.path" tag="span">{{tag.meta.name}} <i class="el-icon-error ml-5" @click.stop="closeTag(tag, index)"></i></router-link>
		</el-tab-pane>
	</el-tabs>
</div>
</template>

<script>
export default {
    name: 'tagsPage',
    data () {
        return {
			activeTag: this.$route.path,
            tagsList: []
        }
    },
    created () {
        if (this.tagsList.length === 0) {
            this.addTag()
        }
    },
    methods: {
        addTag () {
            const vm = this
            vm.activeTag = vm.$route.path
            if (vm.$route.meta.tag && !vm.tagHas()) {
                vm.tagsList.push(vm.$route)
            }
        },
        tagHas () {
            const vm = this
            let flag = false
            for (let tag of vm.tagsList) {
                if (tag.meta.name === vm.$route.meta.name && tag.path === vm.$route.path) {
                    flag = true
                    break
                }
            }
            return flag
        },
        closeTag (row, index) {
			// 如果当前只剩下首页一个tag,不允许关闭
			if (this.tagsList.length === 1 && row.path === '/operation/home') return
			this.tagsList.splice(index, 1)
			if (row.path === this.activeTag && this.tagsList.length > 0) {
				let to = this.tagsList[index] ? this.tagsList[index].path : this.tagsList[index - 1].path
				this.$router.push(to)
			}
			if (this.tagsList.length === 0) {
				this.$router.push('/operation/home')
			}
        }
    },
    watch: {
        $route () {
            this.addTag()
        }
    }
}
</script>
<style lang="scss">
.tags-cell {
    margin-left: -$--layout-default;
    margin-right: -$--layout-default;
    margin-right: -$--layout-default;
    margin-bottom: $--layout-default;
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    .el-tabs--border-card {
		box-shadow: none;
		border-top: none;
		& > .el-tabs__header {
			background-color: transparent;
			border-bottom: none;
			.el-tabs__item {
				padding: 0 !important;
				&:not(.is-active) + .el-tabs__item {
					border-left: 1px solid $--border-color-lighter;
				}
				span {
					padding: 0 20px;
				}
				&.is-active {
					color: #fff;
					background-color: $--color-primary;
					border: none;
				}
			}
		}
    }
    .el-tabs__content {
		display: none;
    }
}
</style>
