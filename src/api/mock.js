import Mock from 'mockjs'
import homeApi from "@/api/mockServeDate/home";
import user from '../api/mockServeDate/user'
import permission from '../api/mockServeDate/permission'

//定义mock请求拦截
Mock.mock('/api/home/getDate',homeApi.getStatisticalData())

// 用户列表的数据
Mock.mock('/api/user/add','post',user.createUser)
Mock.mock('/api/user/edit','post',user.updateUser)
Mock.mock('/api/user/del','post',user.deleteUser)
Mock.mock(/api\/user\/getUser/,user.getUserList)

Mock.mock(/api\/permission\/getMenu/,'post',permission.getMenu)