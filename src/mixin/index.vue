<script>
import queryPage from '@/page/layout/queryPage'
import paginationPage from '@/page/layout/paginationPage'
export default {
	methods: {
		sizeChange (num) {
			this.listQuery.pageSize = num
			this.getList()
		},
		currentChange (num) {
			this.listQuery.pageNumber = num - 1
			this.getList()
		}
	},
	components: {
		queryPage,
		paginationPage
    }
}
</script>
