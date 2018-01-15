<template>
<div class="page-cell">
    <query-page class="cf">
    	<div class="ma-5 fl">
	        <label>培训机构：</label>
	        <el-input
	            class="w-200"
	            type="text"
	            v-model="listQuery.name"
	            placeholder="请输入"
	            clearable>
	        </el-input>
        </div>
        <div class="ma-5 fl">
        	<label>区域：</label>
        	<api-district class="w-150" v-model="listQuery.districtCode"></api-district>
        </div>
        <div class="ma-5 fl">
        	<label>显示状态：</label>
	        <el-select class="w-100" v-model="listQuery.showFlag" placeholder="请选择" clearable>
	            <el-option label="显示" value="SHOW"></el-option>
	            <el-option label="隐藏" value="BLANK"></el-option>
	        </el-select>
        </div>
        <div class="ma-5 fl">
        	<label>启用状态：</label>
	        <el-select class="w-100" v-model="listQuery.status" placeholder="请选择" clearable>
	            <el-option :label="'启用'" :value="'YES'"></el-option>
	            <el-option :label="'禁用'" :value="'NO'"></el-option>
	        </el-select>
        </div>
        <div class="ma-5 fl">
	        <label>计时平台：</label>
	        <el-select class="w-100" v-model="listQuery.plateFlag" placeholder="请选择" clearable>
	            <el-option :label="'开通'" :value="'YES'"></el-option>
	            <el-option :label="'未开通'" :value="'NO'"></el-option>
	        </el-select>
        </div>
        <el-button
            class="ma-5 fl"
            type="primary"
            @click="getList()"
        >
            查询
        </el-button>
    </query-page>
    <div class="content-cell mt-20">
        <el-table
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
                width="150"
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
                    <badge :type="scope.row.backupStatusName === '已备案' ? 'success' : 'danger'">{{scope.row.backupStatusName}}</badge>
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
            <el-table-column
                align="center"
                label="操作"
            >
                <template slot-scope="scope">
                    <el-button type="primary" size="small" icon="el-icon-edit">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <pagination-page class="mt-25">
            <el-pagination
                @size-change="sizeChange"
                @current-change="currentChange"
                :current-page="listData.pageNumber"
                :page-sizes="[10, 15, 20, 25, 30]"
                :page-size="listData.pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="listData.total"
            >
            </el-pagination>
        </pagination-page>
    </div>
</div>
</template>

<script>
import mixins from '@/mixin'
import apiDistrict from '@/components/API/district'
import badge from '@/components/badge'
export default {
    name: 'schoolMamanger',
    mixins: [mixins],
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
    },
    components: {
        apiDistrict,
        badge
    }
}
</script>
