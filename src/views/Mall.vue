<script>
export default {
  name: "Mall",
  data() {
    return {
      currentDate: new Date()
    };
  },
  methods:{
    edirectToExternalLink(){
      window.location.href = 'https://www.apple.com.cn/shop/buy-iphone/iphone-15-pro';
    }
  }
}
</script>

<template>
  <el-row>
    <el-col :span="6" v-for="(o, index) in 6" :key="o" :offset="index > 0 ? 2 : 0">
      <el-card :body-style="{ padding: '20px' }">
        <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-2-202309?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693010535416" class="image">
        <div style="padding: 10px;">
          <span>iPhone 15 Pro</span>
         <div class="button">
           <el-button type="text" class="button" @click="edirectToExternalLink">购买</el-button>
         </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped lang="less">

.el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover{
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;


}
.el-col-offset-2{
  margin:auto 20px;
}
.el-col-offset-0, .el-tabs--border-card>.el-tabs__header .is-scrollable .el-tabs__item:first-child {
  margin:auto 20px;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

</style>