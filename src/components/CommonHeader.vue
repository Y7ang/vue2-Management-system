<script>
import { mapState } from  'vuex'
import Cookie from "js-cookie";
export default {
  name: "CommonHeader",
  methods:{
    handleMenu(){
      this.$store.commit('collapseMenu')
    },
    handleClick(command){
      if (command==='cancel'){
        console.log('登出')
        //清除cookie中的token
        Cookie.remove('token')
        //清除cookie中的menu
        Cookie.remove('menu')
        //跳转到登录页面
        this.$router.push('/login')
      }
    }
  },
  //面包屑
  computed:{
    ...mapState({
      tags:state=>state.tab.tabsList
    }),
  },
  mounted() {
    // console.log(this.tags,'tags')
  }
}
</script>

<template>
  <div class="header-container">
    <div class="l-content" >
      <el-button style="margin-right: 20px" @click="handleMenu" icon="el-icon-menu" size="mini"></el-button>
      <!-- 面包屑-->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown @command="handleClick">
        <span class="el-dropdown-link">
         <img class="user" src="../assets/images/user1.png" alt="">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item command="cancel">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped lang="less">
.header-container {
  padding: 0 20px;
  background-color: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .text {
    color: #fff;
    font-size: 14px;
    margin-left: 10px;
  }
  .r-content{
    .user{
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  .l-content{
    display: flex;
    align-items: center;
    /deep/ .el-breadcrumb__item{
      .el-breadcrumb__inner{
        font-weight:normal;
        &.is-link{
          color: #666;
        }
      }
      &:last-child{
        .el-breadcrumb__inner{
          color: #fff;
        }
      }
    }
  }
}
</style>