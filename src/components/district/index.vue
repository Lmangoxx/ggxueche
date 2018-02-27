<template>
<div class="district-cell">
    <el-input class="w-100" v-model="currentValue" disabled></el-input>
    <el-select class="ml-15" v-model="currentValue" placeholder="请选择省份" clearable>
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
    </el-select>
    <el-select class="ml-15" v-model="currentValue" placeholder="请选择城市" clearable>
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
    </el-select>
    <el-select class="ml-15" v-model="currentValue" placeholder="请选择县区" clearable>
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
    </el-select>
</div>
</template>

<script>
export default {
    name: 'district',
	props: {
        value: [String, Number]
    },
    data () {
        return {
            currentValue: this.value
        }
    },
    watch: {
        'value' (val, oldValue) {
            this.setCurrentValue(val)
        }
    },
    methods: {
        setCurrentValue (val) {
            if (val === this.currentValue) return
            this.currentValue = val
        }
    }
}
</script>
<style lang="scss" scoped>
$--badge-name-list: info success warning danger;
$--badge-color-list: $--color-info $--color-success $--color-warning $--color-danger;
.badge-cell {
    i {
        display: inline-block;
        width: 6px;
        height: 6px;
        margin-right: 3px;
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
}
@each $color in $--badge-name-list {
    $i: index($--badge-name-list, $color);
    .badge-cell-status-#{$color} {
        color: nth($--badge-color-list, $i);
        i {
            background-color: nth($--badge-color-list, $i);
            &:after {
                border-color: nth($--badge-color-list, $i);
            }
        }
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
