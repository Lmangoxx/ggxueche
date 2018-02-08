<script>
const enumListUrl = '/sys/enum/list'
export default {
	/* {listNoPage} 区域接口 */
	'listNoPage': {url: '/sys/district/listNoPage', params: {}},
	/* {DrivingPermitted}  */
	'DrivingPermitted': {url: enumListUrl, params: {type: 'DrivingPermitted'}}
}
</script>
