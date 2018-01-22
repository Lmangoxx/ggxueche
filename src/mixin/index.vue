<script>
import queryPage from '@/page/layout/queryPage'
import paginationPage from '@/page/layout/paginationPage'
import Cookies from 'js-cookie'
export default {
	data () {
        return {
			getListFirst: false,
            listData: {},
            listQuery: Object.assign({
                pageNumber: 0,
                pageSize: 25
            }, Cookies.getJSON('__listQuery') || {}),
            pageSizes: [10, 15, 20, 25, 30],
            pageLayout: 'total, sizes, prev, pager, next, jumper'
        }
    },
	computed: {
		currentNumber () {
			return this.listData.pageNumber + 1
		}
	},
    created () {
        this.getList()
    },
	methods: {
		sizeChange (num) {
			this.listQuery.pageSize = num
			this.getList()
		},
		currentChange (num) {
			if (!this.getListFirst) {
				this.getListFirst = !this.getListFirst
				return
			}
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
