<template>
<div class="page-cell">
	<div v-for="i in abc" :key="i">
		<ceshi @change="aaa"></ceshi>
	</div>
	<span @click="add">添加</span>
</div>
</template>
<script>
import ceshi from '@/components/ceshi'
export default {
	name: 'home',
	data () {
		return {
			bbb: '',
			abc: [0, 1, 2, 3, 4]
		}
	},
    mounted () {
    },
    methods: {
		aaa (val) {
			this.bbb = val
		},
		add () {
			this.abc.push(this.abc.length)
		}
	},
	components: {
		ceshi
    }
}
</script>
