<template>
  <div class="loginPage">
    <div class="loginBox">
      <h1 class="title">Login</h1>
      <el-form :model="userForm">
        <el-form-item>
          <el-input prefix-icon="el-icon-user" v-model="userForm.username" placeholder="用户名" ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input prefix-icon="el-icon-lock" v-model="userForm.password" placeholder="密码" show-password></el-input>
        </el-form-item>
        <el-form-item><el-button type="primary" size="medium" round @click="userLogin">登录</el-button></el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script>
export default {
name: "Login",
data(){
  return{
    userForm:{
      username: "rongwei",
      password: "qwe!2345"
    }
  }
},
methods:{
  userLogin(){
    this.$http.post('/user/login',this.userForm).then(res =>{
      console.log(this.userForm)
      console.log(res.data)
      console.log(res.data.meta.code)
      if(res.data.meta.code === 200){
        this.$router.push('/blogList')
      }else {
        this.$message({
          showClose: true,
          message: '用户名或密码错误请重新输入',
          type: 'error',
          center: true,
        })

      }
    })

  },

}
}
</script>

<style>
.loginPage{
  height: 100%;
  overflow: hidden;
  background-image: url("../../assets/picture/wallpaper.jpg");
  background-size: cover;
  background-attachment: fixed;
}
.loginBox{
  width: 400px;
  height: 300px;
  /*水平居中:两个参数 上下边距  边距*/
  margin: 150px auto;
  /*行内块元素居中: 父元素增加次标签*/
  text-align: center;
  overflow: hidden;
  background-color: whitesmoke;
  opacity: 80%;
  padding: 10px 60px;
  /* 这样padding就不会影响大小 */
  box-sizing: border-box;
  border-radius: 40px;

/*  margin 外边距
    border 边框
    padding 内边距
*/
}

.title{
  margin-top: 15px;
  margin-bottom: 20px;
}

</style>
