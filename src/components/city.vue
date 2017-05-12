<template>
<div class="city-cell">
城市
</div>
</template>

<script>
export default {
	name: 'city',
	data () {
		return {
		}
	},
	mounted () {
        this.$http.get('/res/schoolQuota/listQuota', {
            params: {
            pageNumber: 1,
            pageSize: 20
            }
        }).then((response) => {
            // console.log(response.body)
        })
    }
}
</script>

<style lang="scss" scoped>
@import '../style/mixin'
</style>
