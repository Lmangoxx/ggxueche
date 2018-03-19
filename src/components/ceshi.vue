<template>
	<el-input v-model="currentValue" @change="handleChange"></el-input>
</template>

<script>
	export default {
		name: 'ceshi',
		props: {
			value: String
		},
		data () {
			return {
				currentValue: this.value
			}
		},
		methods: {
			handleChange (val) {
				console.log(`ceshi:${val}`)
				this.$emit('change', val)
			}
		}
	}
</script>
