<script>
import queryPage from '@/page/layout/queryPage'
import paginationPage from '@/page/layout/paginationPage'
import Cookies from 'js-cookie'
export default {
	computed: {
		currentNumber () {
			this.listData.pageNumber = this.listData.pageNumber + 1
			return this.listData.pageNumber
		}
	},
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
	watch: {
		'listQuery': {
			handler (val, oldVal) {
				Cookies.set('__listQuery', val)
			},
			deep: true
		}
	},
	components: {
		queryPage,
		paginationPage
    }
}
</script>
