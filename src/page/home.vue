<template>
<div class="page-cell">
	<ceshi @change="aaa"></ceshi>
	{{bbb}}
</div>
</template>
<script>
import ceshi from '@/components/ceshi'
export default {
	name: 'home',
	data () {
		return {
			bbb: ''
		}
	},
    mounted () {
    },
    methods: {
		aaa (val) {
			this.bbb = val
		}
	},
	components: {
		ceshi
    }
}
</script>
