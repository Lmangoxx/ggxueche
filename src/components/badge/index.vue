<template>
<span class="badge-cell" :class="['badge-cell-status-' + type]">
	<i></i>
    <slot></slot>
</span>
</template>

<script>
export default {
    name: 'badge',
	props: {
        type: {
            type: String,
            default: 'info'
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
