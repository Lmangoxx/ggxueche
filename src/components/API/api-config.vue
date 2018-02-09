<script>
/* 字典接口地址 */
const enumListUrl = '/sys/enum/list'
export default {
	/* {listNoPage} 区域接口 */
	'listNoPage': {url: '/sys/district/listNoPage'},
	/* {DrivingPermitted}  驾驶证种类 */
	'DrivingPermitted': {url: enumListUrl, params: {type: 'DrivingPermitted'}}
}
</script>
