<template>
<div class="tags-cell">
	<el-tabs type="border-card" v-model="activeTag">
		<el-tab-pane v-for="tag in tagsList" :name="tag.path" :key="tag.path">
			<router-link slot="label" :to="tag.path" tag="span" style="display:inline-block;padding-left:-20px;padding-right:-20px;">{{tag.meta.name}} <i class="el-icon-error ml-5" @click.stop="closeTag(tag)"></i></router-link>
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
        closeTag (row) {
			this.tagsList.splice(row, 1)
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
				}
			}
		}
    }
    .el-tabs__content {
		display: none;
    }
}
</style>
