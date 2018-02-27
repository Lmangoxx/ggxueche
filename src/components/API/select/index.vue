<template>
	<el-select v-model="currentValue"
        :disabled="options.disabled || loading"
        :size="options.size"
        :clearable="options.clearable || true"
        :collapse-tags="options.collapseTags"
        :multiple="options.multiple"
        :multiple-limit="options.multipleLimit"
        :name="options.name"
        :filterable="options.filterable || true"
        :placeholder="options.placeholder"
    >
        <el-option
            v-for="item in listData"
            :label="item[options.option.label]"
            :value="item[options.option.value]"
            :key="item[options.option.value]"
        ></el-option>
    </el-select>
</template>

<script>
import apiConfig from '../api-config.vue'
export default {
    name: 'api-select',
	props: {
		value: [String, Number, Array],
        options: {
            type: Object,
            required: true,
            default () {
                return {
                    option: {}
                }
            }
        }
	},
	data () {
		return {
            loading: false,
			currentValue: this.value,
            listData: []
		}
	},
    created () {
		this.options.api && this.getList(apiConfig[this.options.api])
    },
	methods: {
        getList (api) {
            const vm = this
            if (!api) return
            vm.startGetList()
            vm.$axios.get(api.url || '', {params: api.params || {}}).then(res => {
                vm.endGetList()
                vm.listData = res.data
            }).catch(error => {
                vm.endGetList()
                return error
            })
        },
        startGetList () {
            this.loading = true
        },
        endGetList () {
            this.loading = false
        },
        setCurrentValue (val) {
            if (val === this.currentValue) return
            this.currentValue = val
        }
    },
    watch: {
        value (val) {
            this.setCurrentValue(val)
        },
		currentValue (val) {
			this.$emit('input', val)
		}
	}
}
</script>
