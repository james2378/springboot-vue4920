import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import huiyuanList from '../pages/huiyuan/list'
import huiyuanDetail from '../pages/huiyuan/detail'
import huiyuanAdd from '../pages/huiyuan/add'
import xiaoshuofenleiList from '../pages/xiaoshuofenlei/list'
import xiaoshuofenleiDetail from '../pages/xiaoshuofenlei/detail'
import xiaoshuofenleiAdd from '../pages/xiaoshuofenlei/add'
import zhangjieList from '../pages/zhangjie/list'
import zhangjieDetail from '../pages/zhangjie/detail'
import zhangjieAdd from '../pages/zhangjie/add'
import zhanneixinwenList from '../pages/zhanneixinwen/list'
import zhanneixinwenDetail from '../pages/zhanneixinwen/detail'
import zhanneixinwenAdd from '../pages/zhanneixinwen/add'
import xiaoshuodanganList from '../pages/xiaoshuodangan/list'
import xiaoshuodanganDetail from '../pages/xiaoshuodangan/detail'
import xiaoshuodanganAdd from '../pages/xiaoshuodangan/add'
import xiaoshuopingfenList from '../pages/xiaoshuopingfen/list'
import xiaoshuopingfenDetail from '../pages/xiaoshuopingfen/detail'
import xiaoshuopingfenAdd from '../pages/xiaoshuopingfen/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import xiaoshuodanganChapter from '../pages/xiaoshuodangan/chapter'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'huiyuan',
					component: huiyuanList
				},
				{
					path: 'huiyuanDetail',
					component: huiyuanDetail
				},
				{
					path: 'huiyuanAdd',
					component: huiyuanAdd
				},
				{
					path: 'xiaoshuofenlei',
					component: xiaoshuofenleiList
				},
				{
					path: 'xiaoshuofenleiDetail',
					component: xiaoshuofenleiDetail
				},
				{
					path: 'xiaoshuofenleiAdd',
					component: xiaoshuofenleiAdd
				},
				{
					path: 'zhangjie',
					component: zhangjieList
				},
				{
					path: 'zhangjieDetail',
					component: zhangjieDetail
				},
				{
					path: 'zhangjieAdd',
					component: zhangjieAdd
				},
				{
					path: 'zhanneixinwen',
					component: zhanneixinwenList
				},
				{
					path: 'zhanneixinwenDetail',
					component: zhanneixinwenDetail
				},
				{
					path: 'zhanneixinwenAdd',
					component: zhanneixinwenAdd
				},
				{
					path: 'xiaoshuodangan',
					component: xiaoshuodanganList
				},
				{
					path: 'xiaoshuodanganDetail',
					component: xiaoshuodanganDetail
				},
				{
					path: 'xiaoshuodanganAdd',
					component: xiaoshuodanganAdd
				},
				{
					path: 'xiaoshuopingfen',
					component: xiaoshuopingfenList
				},
				{
					path: 'xiaoshuopingfenDetail',
					component: xiaoshuopingfenDetail
				},
				{
					path: 'xiaoshuopingfenAdd',
					component: xiaoshuopingfenAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'xiaoshuodanganChapter',
					component: xiaoshuodanganChapter
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
