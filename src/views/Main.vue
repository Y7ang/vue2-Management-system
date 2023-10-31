<script>
import CommonAsid from "@/components/CommonAsid.vue";
import CommonHeader from "@/components/CommonHeader.vue";
import CommonTag from "@/components/CommonTag.vue";

export default {
  name: "Main",
  components: {
    CommonTag,
    CommonAsid,
    CommonHeader
  }
}
</script>

<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <common-asid/>
      </el-aside>
      <el-container>
        <el-header>
          <common-header/>
        </el-header>
        <common-tag/>
        <el-main>
          <!-- 路由出口 -->
          <!-- 路由匹配到的组件将渲染在这里 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.el-header {
  padding: 0;
}
</style>