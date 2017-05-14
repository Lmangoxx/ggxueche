<template>
<div class="city-cell">
	<headerCell :options="{'back': true, 'search': false}">城市</headerCell>
城市
</div>
</template>

<script>
import headerCell from './blocks/header'
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
    },
    components: {
		headerCell
    }
}
</script>

<style lang="scss" scoped>
@import '../style/mixin'
</style>
