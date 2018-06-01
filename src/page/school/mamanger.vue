<template>
<div class="page-cell">
    <layout-query class="cf">
    	<div class="ma-5 fl">
	        <label>培训机构：</label>
	        <el-input
	            class="w-150"
	            type="text"
	            v-model="listQuery.name"
	            placeholder="请输入"
	            clearable>
	        </el-input>
        </div>
        <div class="ma-5 fl">
        	<label>区域：</label>
            <api-select class="w-150" :options="{api: 'listNoPage', option: {label: 'name', value: 'code'}}" v-model="listQuery.districtCode"></api-select>
        </div>
        <div class="ma-5 fl">
        	<label>显示状态：</label>
	        <el-select class="w-150" v-model="listQuery.showFlag" placeholder="请选择" clearable>
	            <el-option label="显示" value="SHOW"></el-option>
	            <el-option label="隐藏" value="BLANK"></el-option>
	        </el-select>
        </div>
        <div class="ma-5 fl">
        	<label>启用状态：</label>
	        <el-select class="w-150" v-model="listQuery.status" placeholder="请选择" clearable>
	            <el-option :label="'启用'" :value="'YES'"></el-option>
	            <el-option :label="'禁用'" :value="'NO'"></el-option>
	        </el-select>
        </div>
        <div class="ma-5 fl">
	        <label>计时平台：</label>
	        <el-select class="w-150" v-model="listQuery.plateFlag" placeholder="请选择" clearable>
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
    </layout-query>
    <div class="content-cell mt-20">
        <el-table
            :data="listData.content"
            :default-sort = "{prop: 'name', order: 'descending'}"
        >
            <el-table-column
                width="80"
                align="center"
                prop="definedSort"
                label="排序"
                v-if="sort"
            >
                <template slot-scope="scope">
                    <el-input class="text-center" v-model="scope.row.definedSort" size="small" @change="sortChange(scope.row)"></el-input>
                </template>
            </el-table-column>
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
                :render-header="renderHeader"
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
                    <gg-badge :type="scope.row.backupStatusName === '已备案' ? 'success' : 'danger'">{{scope.row.backupStatusName}}</gg-badge>
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
                        @change="editShowFlag(scope.row)"
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
                        @change="editStatus(scope.row)"
                    >
                    </el-switch>
                </template>
            </el-table-column>
            <el-table-column
                align="center"
                label="操作"
            >
                <template slot-scope="scope">
                    <router-link :to="{path: $route.path.replace(/mamanger/g, 'detail'), query: {id: scope.row.id}}">
                        <el-button type="primary" size="small" icon="el-icon-edit">编辑</el-button>
                    </router-link>
                </template>
            </el-table-column>
        </el-table>
        <layout-pagination class="mt-25">
            <el-button-group>
                <el-button size="small" type="primary">
                    <a :href="$root.rootUrl + '/res/school/export/template'" style="color:#fff">下载模版</a>
                </el-button>
                <el-button size="small" type="primary" @click="upload = true">批量上传</el-button>
                <el-dialog title="批量上传" width="40%" center :visible.sync="upload" @close="$refs.elUpload.clearFiles()">
                    <el-upload
                        drag
                        ref="elUpload"
                        :action="$root.rootUrl + '/res/school/import'"
                        :limit="1"
                        accept=".xlsx"
                        :before-upload="beforeFileUpload"
                        :on-progress="progressFileUpload"
                        :on-success="successFileUpload"
                        :on-error="errorFileUpload"
                        :disabled="uploading"
                    >
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">只能上传Excel文件（.xlsx），且不超过500kb</div>
                    </el-upload>
                </el-dialog>
                <el-button size="small" :type="sort ? 'success' : 'primary'" @click="editSort">{{sort ? '保存排序' : '修改排序'}}
                </el-button>
            </el-button-group>
            <el-pagination
                @size-change="sizeChange"
                @current-change="currentChange"
                :current-page="currentNumber"
                :page-sizes="pageSizes"
                :page-size="listData.pageSize"
                :layout="pageLayout"
                :total="listData.total"
            >
            </el-pagination>
        </layout-pagination>
    </div>
</div>
</template>

<script>
import mamanger from '@/mixin/mamanger'
import apiSelect from '@/components/API/APISelect'
import GgBadge from '@/components/badge'
export default {
    name: 'schoolMamanger',
    mixins: [mamanger],
    data () {
        return {
            upload: false,
            uploading: false,
            sort: false,
            sortList: {
                ids: [],
                sorts: []
            }
        }
    },
    methods: {
        getList () {
            const vm = this
            vm.$store.commit('addCount')
            console.log(vm.$store.state.count)
            vm.$axios.get('/res/school/list', {
                params: vm.listQuery
            }).then(res => {
                vm.listData = res.data
            })
        },
        editSort () {
            const vm = this
            vm.sort = !vm.sort
            vm.sortList.ids.length > 0 && vm.$axios.post('/res/school/saveSort', {
                ids: vm.sortList.ids.join(','),
                sorts: vm.sortList.sorts.join(',')
            }).then(res => {
                vm.clearSortList()
            })
        },
        sortChange (row) {
            const vm = this
            let index = vm.sortList.ids.indexOf(row.id)
            if (index !== -1) {
                vm.sortList.sorts[index] = row.definedSort
            } else {
                vm.sortList.ids.push(row.id)
                vm.sortList.sorts.push(row.definedSort)
            }
        },
        clearSortList () {
            this.sortList = {
                ids: [],
                sorts: []
            }
        },
        editShowFlag (row) {
            const vm = this
            vm.$axios.post('/res/school/modifyShowFlag', {
                id: row.id,
                showFlag: row.showFlag
            }).then(res => {
                if (res.code !== 0) row.showFlag = !row.showFlag
            })
        },
        editStatus (row) {
            const vm = this
            vm.$axios.post('/res/school/modifyStatus', {
                id: row.id,
                status: row.status
            }).then(res => {
                if (res.code !== 0) row.status = !row.status
            })
        },
        beforeFileUpload (file) {
            const isLt2M = file.size / 1024 < 500
            if (!isLt2M) {
                this.$message.error('上传文件大小不能超过 500KB!')
            }
            return isLt2M
        },
        progressFileUpload (event, file, fileList) {
            this.uploading = true
        },
        successFileUpload (response, file, fileList) {
            const vm = this
            vm.uploading = false
            if (response.code !== 0) {
                vm.$notify.error({
                    title: response.code,
                    message: response.msg
                })
            } else {
                vm.$message.success('数据导入成功！')
                vm.getList()
            }
        },
        errorFileUpload (response, file, fileList) {
            const vm = this
            vm.uploading = false
            vm.$notify.error({
                title: '数据导入失败,请稍后再试'
            })
        },
        filterBackupStatusName (val, row) {
			return row.backupStatusName === val
        },
        renderHeader (createElement, { column, _self }) {
            let label = column.label
            return createElement('div', {'class': 'header-center'},
                [
                    createElement('span', {attrs: { type: 'text' }}, [label]),
                    createElement('el-tooltip',
                        {
                            attrs: {
                                'content': '这是一个提示',
                                'placement': 'top'
                            }
                        },
                        [
                            createElement('i', {'class': 'el-icon-question ml-5'})
                        ]
                    )
                ]
            )
        }
    },
    components: {
        apiSelect,
        GgBadge
    }
}
</script>
<style lang="scss" scope>
.el-table__header, .el-table__body, .el-table__footer {
    overflow: hidden !important;
}
.el-dialog--center .el-dialog__body {
    padding: 10px 27px 30px;
}
.el-upload {
    display: block !important;
}
.el-upload-dragger {
    width: 100% !important;
    height: 150px !important;
    & .el-icon-upload {
        margin: 31px 0 16px !important;
    }
}
</style>
