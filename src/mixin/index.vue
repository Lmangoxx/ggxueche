<script>
import queryPage from '@/page/layout/queryPage'
import paginationPage from '@/page/layout/paginationPage'
import Cookies from 'js-cookie'
export default {
	data () {
        return {
			getListNum: false,
            listData: {},
            listQuery: Object.assign({
                pageNumber: 0,
                pageSize: 25
            }, Cookies.getJSON('__listQuery') || {})
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
			if (!this.getListNum) {
				this.getListNum = !this.getListNum
				return
			}
			this.listQuery.pageNumber = num - 1
			this.getListNum++
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
