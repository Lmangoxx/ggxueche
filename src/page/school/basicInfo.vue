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
                <el-form-item label="地区：">
                    <el-select v-model="basicInfo.region" placeholder="请选择省份" clearable>
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                    <el-select class="ml-15" v-model="basicInfo.region" placeholder="请选择城市" clearable>
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                    <el-select class="ml-15" v-model="basicInfo.region" placeholder="请选择县区" clearable>
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="9">
                <el-form-item label="法人代表：" prop="legal">
                    <el-input v-model="basicInfo.legal" placeholder="请输入" clearable></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="9" :offset="1">
                <el-form-item label="培训机构地址：">
                    <el-input v-model="basicInfo.address" placeholder="请输入" clearable></el-input>
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
                <el-form-item label="经营范围：">
                    <el-input v-model="basicInfo.businessScope" placeholder="请输入" clearable></el-input>
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
export default {
    name: 'basicInfo',
    mixins: [detail],
    data () {
        return {
            basicInfo: {
                fullName: ''
            }
        }
    },
    created () {
    },
    methods: {
        onSubmit () {
            const vm = this
            vm.$refs.basicInfo.validate(valid => {
                if (valid) {
                }
            })
        }
    }
}
</script>
