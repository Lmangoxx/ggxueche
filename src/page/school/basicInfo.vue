<template>
<div class="page-cell pa-20">
    <el-form :model="basicInfo" ref="basicInfo" label-width="120px">
        <el-row>
            <el-col :span="9">
                <el-form-item label="培训机构名称：" prop="fullName" :rules="[{required: true, message: '培训机构名称不能为空', trigger: 'blur'}]">
                    <el-input v-model="basicInfo.fullName" placeholder="请输入" clearable></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="9" :offset="1">
                <el-form-item label="培训机构简称：" prop="name" :rules="[{required: true, message: '培训机构简称不能为空', trigger: 'blur'}]">
                    <el-input v-model="basicInfo.name" placeholder="请输入" clearable></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="24">
                <el-form-item label="地区：" prop="district" :rules="[{required: true, message: '地区不能为空', trigger: 'blur'}]">
                    <gg-district v-model="basicInfo.district"></gg-district>
                </el-form-item>
            </el-col>
            <el-col :span="9">
                <el-form-item label="法人代表：" prop="legal" :rules="[{required: true, message: '法人代表不能为空', trigger: 'blur'}]">
                    <el-input v-model="basicInfo.legal" placeholder="请输入" clearable></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="9" :offset="1">
                <el-form-item label="培训机构地址：" prop="address" :rules="[{required: true, message: '培训机构地址不能为空', trigger: 'blur'}]">
                    <el-input v-model="basicInfo.address" placeholder="请输入" clearable>
                        <el-button slot="append" icon="el-icon-location" @click="basicInfo.region = 'beijing'"></el-button>
                    </el-input>
                </el-form-item>
            </el-col>
            <el-col :span="9">
                <el-form-item label="驾校规模：">
                    <el-input v-model="basicInfo.scale" placeholder="请输入" clearable></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="9" :offset="1">
                <el-form-item label="招生电话：">
                    <el-input v-model="basicInfo.admissionsPhone" placeholder="请输入" clearable></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="9">
                <el-form-item label="经营范围：" prop="businessScope" :rules="[{required: true, message: '经营范围不能为空', trigger: 'change'}]">
                    <api-select
                        class="w-full"
                        v-model="basicInfo.businessScope"
                        :options="{api: 'DrivingPermitted', multiple: true, option: {label: 'description', value: 'enumValue'}, placeholder: '请选择经营范围'}"
                    ></api-select>
                </el-form-item>
            </el-col>
            <el-col :span="9" :offset="1">
                <el-form-item label="办学时间：" prop="running">
                    <el-date-picker
                        style="width:100%"
                        v-model="basicInfo.running"
                        type="date"
                        placeholder="选择日期"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd"
                        clearable
                    >
                    </el-date-picker>
                </el-form-item>
            </el-col>
        </el-row>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">提  交</el-button>
            <el-button @click="resetForm('basicInfo')">重置</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
import detail from '@/mixin/detail'
import ApiSelect from '@/components/API/APISelect'
import GgDistrict from '@/components/district'
export default {
    name: 'BasicInfo',
    mixins: [detail],
    data () {
        return {
            basicInfo: {}
        }
    },
    created () {
        this.$axios.get('/res/school/detailOne', {
            params: this.$route.query
        }).then(res => {
            this.basicInfo = res.data
            this.$set(this.basicInfo, 'district', {
                name: this.basicInfo.districtName,
                code: this.basicInfo.districtCode
            })
            this.basicInfo.businessScope = this.basicInfo.businessScope.split(',')
        })
    },
    methods: {
        onSubmit () {
            const vm = this
            vm.$refs.basicInfo.validate(valid => {
                if (valid) {
                    vm.$axios.post('/res/school/updateOne', {
                        id: vm.$route.query.id,
                        fullName: vm.basicInfo.fullName,
                        name: vm.basicInfo.name,
                        districtName: this.basicInfo.districtName,
                        districtCode: this.basicInfo.districtCode,
                        address: vm.basicInfo.address,
                        // lng: lng,
                        // lat: lat,
                        legal: vm.basicInfo.legal,
                        admissionsPhone: vm.basicInfo.admissionsPhone,
                        scale: vm.basicInfo.scale,
                        running: vm.basicInfo.running,
                        businessScope: vm.basicInfo.businessScope.join(','),
                        status: vm.schoolStatus,
                        backupStatus: vm.backupStatus,
                        showFlag: vm.showFlag
                    })
                }
            })
        }
    },
    components: {
        ApiSelect,
        GgDistrict
    }
}
</script>
