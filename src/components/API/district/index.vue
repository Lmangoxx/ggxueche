<template>
	<el-select size="medium" v-model="currentValue" placeholder="请选择" filterable clearable :loading="aaa">
        <el-option v-for="item in listData" :label="item.name" :value="item.code" :key="item.code"></el-option>
    </el-select>
</template>

<script>
export default {
    name: 'district',
	props: {
		value: [String, Number, Array]
	},
	data () {
		return {
            aaa: false,
			currentValue: this.value,
            listData: []
		}
	},
    created () {
		this.getList()
    },
	methods: {
        getList () {
            const vm = this
            vm.aaa = true
            vm.$axios.get('/sys/district/listNoPage').then(res => {
                vm.aaa = false
                vm.listData = res.data
            })
            // console.log(vm.$attrs)
        }
    },
    watch: {
		currentValue (val) {
			this.$emit('input', val)
		}
	}
}
</script>
