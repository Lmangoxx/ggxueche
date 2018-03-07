/**
 * 引入百度地图
 * [baiduMap description]
 * @return {[type]} [description]
 */
export default function baiduMap () {
	const AK = 'Q1AAZlim57u9i54zjGFRrsUK'
	const BMapUrl = `//api.map.baidu.com/getscript?v=2.0&ak=${AK}&services=&t=20180201111639`
	// const BMapUrl = `//api.map.baidu.com/api?v=2.0&ak=${AK}`
	return new Promise((resolve, reject) => {
		// 如果已加载直接返回
		if (typeof BMap !== 'undefined') {
			resolve(BMap)
			return true
		}
		window.BMap_loadScriptTime = new Date().getTime()
		let script = document.createElement('script')
		script.id = 'baiduMap'
		script.type = 'text/javascript'
		script.src = BMapUrl
		document.getElementsByTagName('head')[0].appendChild(script)
		script.onload = function () {
			console.log('百度地图脚本初始化成功...')
			resolve(BMap)
		}
		script.onerror = reject
	})
}
