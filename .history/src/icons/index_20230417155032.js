import Vue from 'vue'
// 显示svg图形
import SvgIcon from '@/components/SvgIcon'// svg component

// 全局注册组件
Vue.component('svg-icon', SvgIcon)

// require.context
// webpack内置api,用于自动导入模块
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
