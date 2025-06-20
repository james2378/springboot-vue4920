import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import aboutus from '@/views/modules/aboutus/list'
    import discussxiaoshuodangan from '@/views/modules/discussxiaoshuodangan/list'
    import zhangjie from '@/views/modules/zhangjie/list'
    import xiaoshuofenlei from '@/views/modules/xiaoshuofenlei/list'
    import huiyuan from '@/views/modules/huiyuan/list'
    import forum from '@/views/modules/forum/list'
    import xiaoshuopingfen from '@/views/modules/xiaoshuopingfen/list'
    import systemintro from '@/views/modules/systemintro/list'
    import xiaoshuodangan from '@/views/modules/xiaoshuodangan/list'
    import chapterxiaoshuodangan from '@/views/modules/chapterxiaoshuodangan/list'
    import zhanneixinwen from '@/views/modules/zhanneixinwen/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '新闻公告',
        component: news
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/discussxiaoshuodangan',
        name: '小说档案评论',
        component: discussxiaoshuodangan
      }
      ,{
	path: '/zhangjie',
        name: '章节',
        component: zhangjie
      }
      ,{
	path: '/xiaoshuofenlei',
        name: '小说分类',
        component: xiaoshuofenlei
      }
      ,{
	path: '/huiyuan',
        name: '会员',
        component: huiyuan
      }
      ,{
	path: '/forum',
        name: '论坛交流',
        component: forum
      }
      ,{
	path: '/xiaoshuopingfen',
        name: '小说评分',
        component: xiaoshuopingfen
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/xiaoshuodangan',
        name: '小说档案',
        component: xiaoshuodangan
      }
      ,{
	path: '/chapterxiaoshuodangan',
        name: '小说档案章节',
        component: chapterxiaoshuodangan
      }
      ,{
	path: '/zhanneixinwen',
        name: '站内新闻',
        component: zhanneixinwen
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '系统首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
