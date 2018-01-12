<template>
<div class="page-body">
    <el-table
        class="mt-20 mb-20"
        :data="listData.content"
        style="width: 100%"
        :default-sort = "{prop: 'name', order: 'descending'}"
    >
        <el-table-column
            align="center"
            prop="name"
            label="机构简称"
            sortable>
        </el-table-column>
        <el-table-column
            align="center"
            prop="districtName"
            label="区域"
            sortable>
        </el-table-column>
        <el-table-column
            align="center"
            prop="admissionsPhone"
            label="招生电话"
            sortable>
        </el-table-column>
        <el-table-column
            align="center"
            prop="unifiedNum"
            label="统一编号"
            sortable>
        </el-table-column>
        <el-table-column
            align="center"
            prop="backupStatusName"
            label="备案状态"
            sortable>
        </el-table-column>
        <el-table-column
            align="center"
            prop="showFlag"
            label="是否显示"
            sortable>
        </el-table-column>
        <el-table-column
            align="center"
            prop="status"
            label="是否启用"
            sortable>
        </el-table-column>
    </el-table>
    <el-pagination
        class="fr"
        @size-change="sizeChange"
        @current-change="currentChange"
        :current-page="listData.pageNumber"
        :page-sizes="[10, 15, 20, 25, 30]"
        :page-size="listData.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="listData.total"
    >
    </el-pagination>
</div>
</template>

<script>
export default {
    name: 'schoolMamanger',
    data () {
        return {
            listData: {},
            listQuery: {
                pageNumber: 0,
                pageSize: 25
            }
        }
    },
    created () {
        this.getList()
    },
    methods: {
        sizeChange (num) {
            this.listQuery.pageSize = num
            this.getList()
        },
        currentChange (num) {
            this.listQuery.pageNumber = num - 1
            this.getList()
        },
        getList () {
            const vm = this
            vm.$axios.get('/res/school/list', {
                params: vm.listQuery
            }).then(res => {
                vm.listData = res.data
                vm.listData.pageNumber += 1
            })
        }
    },
    components: {
    }
}
</script>
