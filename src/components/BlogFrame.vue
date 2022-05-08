<template>
  <div class="blogFrame">
    <el-container class="pageContainer">
        <el-header class="header">
          <el-menu
            :default-active="activeIndex2"
            class="header"
            mode="horizontal"
            @select="handleSelect"
            background-color="#409EFF"
            text-color="black"
            active-text-color="#ffd04b">
            <el-menu-item><i class="el-icon-data-line"></i> 仪表盘</el-menu-item>
            <el-menu-item><i class="el-icon-view"></i>所有文章</el-menu-item>
            <el-menu-item><i class="el-icon-edit"></i>写文章</el-menu-item>
            <el-menu-item><i class="el-icon-copy-document"></i>分类</el-menu-item>
            <el-menu-item><i class="el-icon-collection-tag"></i> 标签</el-menu-item>
            <el-menu-item><i class="el-icon-money"></i>归档</el-menu-item>

            <el-tooltip class="toIndex" effect="dark" content="点击跳转到博客首页" placement="bottom">
              <el-button  circle icon="el-icon-tickets"></el-button>
            </el-tooltip>



            <el-dropdown class="avatar">
              <el-avatar  shape="square" :size="large"  icon="el-icon-user"></el-avatar>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人资料</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

          </el-menu>

        </el-header>
      <el-main class="header">
        <router-view></router-view>
      </el-main>
      <el-footer>

      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "BlogFrame"
}
</script>

<style scoped>
.blogFrame{
  height: 100%;
  overflow: hidden;
  background-image: url("../assets/picture/wallpaper.jpg");
  background-size: cover;
  background-attachment: fixed;
}
.pageContainer{
  height: 100%;
  padding: 0;
  margin: 0;
}
.header{
  padding: 0;
  margin: 0;
  opacity: 0.9;
}
.avatar{
  position: absolute;
  right: 10px;
  top: 10px;
}
.toIndex{
  position: absolute;
  right: 150px;
  top: 10px;
}


</style>
