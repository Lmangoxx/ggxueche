<template>
	<el-select v-model="districtCode" placeholder="请选择" clearable>
        <el-option v-for="item in listData" :label="item.name" :value="item.code" :key="item.value"></el-option>
    </el-select>
</template>

<script>
export default {
    name: 'district',
	data () {
		return {
            districtCode: '',
            listData: []
		}
	},
    created () {
		this.getList()
    },
	methods: {
        getList () {
            const vm = this
            vm.$axios.get('/sys/district/listNoPage').then(res => {
                vm.listData = res.data
            })
        },
        filterBackupStatusName (val, row) {
            return row.backupStatusName === val
        }
    }
}
</script>
