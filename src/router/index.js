import Vue from 'vue'
import Router from 'vue-router'
import login from "../components/admin/Login";
import blogFrame from "../components/BlogFrame";
import BlogList from "../components/admin/BlogList";
import BlogEdit from "../components/admin/BlogEdit";
Vue.use(Router)

export default new Router({
  routes: [
    // {path: '/', name: 'HelloWorld', component: HelloWorld},
    {path: '/', redirect:'/admin/login'},
    {path: "/admin/login",component: login},

    {
      path:"/admin/blogInfos",
      component:blogFrame,
      children: [
        {path: '/blogList',component: BlogList},
        {path: '/blogEdit',component: BlogEdit},
      ]
    }
  ]
})
