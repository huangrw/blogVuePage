<template>
  <div class="blogEditContainer">
    <el-form class="form" >
        <el-row :gutter="1" >
          <el-col :span="5">
            <el-form-item label="日期">
              <el-date-picker
                value-format="yyyy-MM-dd HH:mm:ss"
                v-model="blogInfo.createTime"
                type="date"
                placeholder="选择日期"
              style="width: 150px">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item label="标题">
              <el-input v-model="blogInfo.title" placeholder="请输入标题" style="width: 500px;"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-button type="primary">保存</el-button>
            <el-button type="success" @click="publishBlog">发布</el-button>
            <el-button type="danger">取消</el-button>
          </el-col>
        </el-row >
        <el-row :gutter="1">
          <el-col :span="9">
            <el-form-item label="分类" >
              <el-select @focus="getTypeOptions" filterable v-model="blogInfo.typeId"  placeholder="请选择分类" style="width: 330px">
                <el-option value="" :disabled="true">
                  <el-button type="text" @click="addType">添加分类</el-button>
                </el-option>
                <el-option
                  v-for="item in typeOptions"
                  :key="item.id"
                  :label="item.typeName"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="9">
            <el-form-item label="标签" >
              <el-select clearable @focus="getTagOptions"  filterable v-model="blogInfo.tagIdList" multiple placeholder="请选择标签" style="width: 330px">
                <el-option value="" :disabled="true">
                  <el-button type="text" @click="addTag">添加标签</el-button>
                </el-option>
                <el-option
                  v-for="item in tagOptions"
                  :key="item.id"
                  :label="item.tagName"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-switch
              v-model="blogInfo.commentabled"
              active-text="评论"
            style="margin-top: 10px; margin-right: 20px">
            </el-switch>
            <el-switch
              v-model="blogInfo.recommend"
              active-text="推荐"
              style="margin-top: 10px">
            </el-switch>
          </el-col>
        </el-row>
      <!--markdown 编辑框-->
      <el-form-item>
        <mavon-editor v-model="blogInfo.content" style="height: 400px"></mavon-editor>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  name: "BlogEdit",
  data(){
    return{
      blogInfo: {
        createTime: '',
        updateTime: '',
        title: '',
        typeId: '',
        tagIdList: [],
        commentabled: true,
        recommend: false,
        content: '',
        appreciation: false,
        views:'',
        userId:'',
        published:true,

      },
      typeOptions: [],
      tagOptions:[],
    }
  },
  methods:{

    getTypeOptions(){
      this.$http.get("/blog/getTypes").then( res =>{
        this.typeOptions=res.data.data
      })
    },
    addType() {
      this.$prompt( '添加分类', {
        inputPlaceholder: '请输入分类',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value }) => {
          var addType = {typeName : ''}
          addType.typeName = value
          this.$http.post("/bolg/addBlogType",addType).then(res =>{
            if (res.data.meta.code === 200){
              this.$message({type:'success',message:value+' 新增成功'})
            }
      })
    }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });},
    getTagOptions(){
      this.$http.get("/blog/getTags").then( res =>{
        this.tagOptions=res.data.data
      })
    },
    addTag() {
      this.$prompt( '添加标签', {
        inputPlaceholder: '请输入标签',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value }) => {
        var addTag = {tagName : ''}
        addTag.tagName = value
        this.$http.post("/blog/addTag",addTag).then(res =>{
          if (res.data.meta.code === 200){
            this.$message({type:'success',message:value+' 新增成功'})
          }else {
            this.$message({type:'error',message:value+' 添加失败'})
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });},
    publishBlog(){
      console.log(this.blogInfo)
      // todo 从 localStroage 中获取用户信息
      this.blogInfo.userId = 1;
      this.blogInfo.updateTime = this.blogInfo.createTime;
      this.blogInfo.views = 0;
      this.blogInfo.published = true;
      this.$http.post("/blog/publishBlog",this.blogInfo).then(res =>{
         this.$message.success(this.blogInfo.title +'已发布成功')
         this.$router.push('/blogList')
      });

    }
  }

}
</script>

<style scoped>
.blogEditContainer{
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
  opacity: 0.8;
}

.form{
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
