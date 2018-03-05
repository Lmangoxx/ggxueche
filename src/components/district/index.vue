<template>
<div class="district-cell">
    <el-input class="w-150" v-model="currentValue && currentValue.name" readonly></el-input>
    <el-select
        class="ml-15 w-150"
        value-key="code"
        v-model="districts.province"
        @change="getDatas(districts.province, 4)"
        placeholder="请选择省份">
        <el-option
            v-for="province in provinceList"
            :label="province.name"
            :value="province"
            :key="province.code">
        </el-option>
    </el-select>
    <el-select
        class="ml-15 w-150"
        value-key="code"
        v-model="districts.city"
        @change="getDatas(districts.city, 6)"
        :disabled="!districts.province"
        placeholder="请选择城市">
        <el-option
            v-for="city in cityList"
            :label="city.name"
            :value="city"
            :key="city.code">
        </el-option>
    </el-select>
    <el-select
        class="ml-15 w-150"
        value-key="code"
        v-model="districts.district"
        @change="getDatas()"
        :disabled="!districts.city"
        placeholder="请选择县区">
        <el-option
            v-for="district in districtList"
            :label="district.name"
            :value="district"
            :key="district.code">
        </el-option>
    </el-select>
</div>
</template>

<script>
/**
 * gg-district 省市县三级联动
 * prop: value 默认省市县值
 */
export default {
    name: 'GGDistrict',
	props: {
        value: [String, Number, Object]
    },
    data () {
        return {
            currentValue: this.value,
            districts: {},
            provinceList: [],
            cityList: [],
            districtList: []
        }
    },
    created () {
        const vm = this
        // 默认进来先加载省份数据
        vm.$axios.get('/sys/district/getLists', {
            params: {districtCode: 'p'}
        }).then(res => {
            if (res.data.length > 0) vm.provinceList = res.data
        })
    },
    methods: {
        /*
         * getDatas()获取省市区数据的函数
         * params: item 上级区域属性
         * params: length 当前区域的长度值
         */
        getDatas (item, length) {
            const vm = this
            if (item && item.code && length) {
                if (length === 4) vm.districts.city = ''
                vm.districts.district = ''
                vm.$axios.get('/sys/district/getLists', {params: {
                    districtCode: item.code,
                    codeLength: length
                }}).then(res => {
                    if (res.data.length > 0) { // 如果数据不为空，length为4时是城市数据，为6时是县区数据
                        length === 4 ? vm.cityList = res.data : vm.districtList = res.data
                    } else { // 如果数据为空，城市跟县区清空
                        if (length === 4) vm.cityList = []
                        vm.districtList = []
                    }
                })
            }
            // 每次地区选择发生变化，更新currentValue的值
            vm.currentValue = vm.districts.district || vm.districts.city || vm.districts.province || {}
        }
    },
    watch: {
        'value' (val, oldValue) {
            if (val === this.currentValue) return
            this.currentValue = val
        },
        'currentValue' (val, oldValue) {
            this.$emit('input', val)
        }
    }
}
</script>
