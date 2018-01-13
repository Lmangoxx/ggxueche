<template>
<div class="page-body">
    <el-table
        class="mt-20 mb-20"
        :height="listHeight"
        :data="listData.content"
        :default-sort = "{prop: 'name', order: 'descending'}"
    >
        <el-table-column
            align="center"
            prop="name"
            label="机构简称"
            sortable
        >
        </el-table-column>
        <el-table-column
            align="center"
            prop="districtName"
            label="区域"
        >
        </el-table-column>
        <el-table-column
            align="center"
            prop="admissionsPhone"
            label="招生电话"
        >
        </el-table-column>
        <el-table-column
            align="center"
            prop="unifiedNum"
            label="统一编号"
        >
        </el-table-column>
        <el-table-column
            align="center"
            prop="backupStatusName"
            label="备案状态"
            :filters="[{text: '已备案', value: '已备案'}, {text: '未备案', value: '未备案'}]"
            :filter-method="filterBackupStatusName"
      		filter-placement="bottom-end"
        >
            <template slot-scope="scope">
                <i class="badge-cell" :class="scope.row.backupStatusName === '已备案' ? 'badge-cell-status-success' : 'badge-cell-status-error'"></i>
                {{scope.row.backupStatusName}}
            </template>
        </el-table-column>
        <el-table-column
            align="center"
            prop="showFlag"
            label="是否显示"
        >
            <template slot-scope="scope">
                <el-switch
                    v-model="scope.row.showFlag"
                    active-value="SHOW"
                    inactive-value="BLANK"
                >
                </el-switch>
            </template>
        </el-table-column>
        <el-table-column
            align="center"
            prop="status"
            label="是否启用"
        >
            <template slot-scope="scope">
                <el-switch
                    v-model="scope.row.status"
                    active-value="YES"
                    inactive-value="NO"
                >
                </el-switch>
            </template>
        </el-table-column>
    </el-table>
    <el-pagination
        class="fr"
        @size-change="sizeChange"
        @current-change="currentChange"
        :current-page="listData.pageNumber"
        :page-sizes="[1, 15, 20, 25, 30]"
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
            listHeight: window.innerHeight - 200,
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
        },
        filterBackupStatusName (val, row) {
			return row.backupStatusName === val
        }
    }
}
</script>
<style lang="scss" scoped>
.badge-cell {
    width: 6px;
    height: 6px;
    display: inline-block;
    border-radius: 50%;
    vertical-align: middle;
    position: relative;
    top: -1px;
    &:after {
        content: "";
        position: absolute;
        top: -1px;
        left: -1px;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 1px solid #cf2626;
        animation: statusProcessing 1.5s infinite ease-in-out;
    }
}
.badge-cell-status-success {
    background-color: $--color-success;
    &:after {
        border-color: $--color-success;
    }
}
.badge-cell-status-error {
    background-color: $--color-danger;
    &:after {
        border-color: $--color-danger;
    }
}
@keyframes statusProcessing {
    0% {
        transform:scale(.8);
        opacity:.5;
    }
    to {
        transform:scale(2);
        opacity:0;
    }
}
</style>
