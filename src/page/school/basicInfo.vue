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
                        <el-button slot="append" icon="el-icon-location" @click="addressStatus = true"></el-button>
                    </el-input>
                    <el-dialog fullscreen :visible.sync="addressStatus" @open="baiduMap">
                        <div slot="title" class="cf">
                            <div class="mr-10 fl">
                                <label>查询地址：</label>
                                <el-input
                                    class="w-250"
                                    type="text"
                                    v-model="addressDialog.search"
                                    placeholder="请输入查询地址"
                                    clearable>
                                </el-input>
                            </div>
                            <el-button
                                class="mr-35 fl"
                                type="primary"
                                @click="getList()">
                                查询
                            </el-button>
                            <div class="mr-15 fl">
                                <label>经度：</label>
                                <el-input
                                    class="w-150"
                                    type="text"
                                    v-model="addressDialog.lng"
                                    readonly>
                                </el-input>
                            </div>
                            <div class="mr-10 fl">
                                <label>经度：</label>
                                <el-input
                                    class="w-150"
                                    type="text"
                                    v-model="addressDialog.lat"
                                    readonly>
                                </el-input>
                            </div>
                            <el-button
                                class="fl"
                                type="primary"
                                @click="addressSave()">
                                提交
                            </el-button>
                            <el-button
                                class="fl"
                                @click="addressStatus = false">
                                取消
                            </el-button>
                        </div>
                        <div id="allmap"></div>
                    </el-dialog>
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
import Detail from '@/mixin/detail'
import ApiSelect from '@/components/API/APISelect'
import GgDistrict from '@/components/district'
import BaiduMap from '@/utils/baiduMap'
export default {
    name: 'BasicInfo',
    mixins: [Detail],
    data () {
        return {
            addressStatus: false,
            addressDialog: {},
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
        baiduMap () {
            BaiduMap().then(BMap => {
                var map = new BMap.Map('allmap')    // 创建Map实例
                map.centerAndZoom(new BMap.Point(116.404, 39.915), 11)  // 初始化地图,设置中心点坐标和地图级别
                map.setCurrentCity('北京')    // 设置地图显示的城市 此项是必须设置的
                map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
            })
        },
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
<style lang="scss" scope>
.el-dialog__body {
    padding: 0 !important;
}
#allmap {
    height: calc(100vh - 65px);
}
</style>
