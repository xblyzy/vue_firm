import Vue from 'vue'
// 显示svg图形
import SvgIcon from '@/components/SvgIcon'// svg component

// 一定要先执行注册在使用
// 全局注册组件
Vue.component('svg-icon', SvgIcon)

// require.context
// webpack内置api,用于自动导入模块,后面添加svg文件就无需zi'ji
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
