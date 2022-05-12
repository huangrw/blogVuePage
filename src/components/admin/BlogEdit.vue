<template>
  <div class="blogEditContainer">
    <el-form class="form" >
        <el-row :gutter="1" >
          <el-col :span="5">
            <el-form-item label="日期">
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期"
              style="width: 150px">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item label="标题">
              <el-input v-model="title" placeholder="请输入标题" style="width: 500px;"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-button type="primary">保存</el-button>
            <el-button type="success">发布</el-button>
            <el-button type="danger">取消</el-button>
          </el-col>
        </el-row >
        <el-row :gutter="1">
          <el-col :span="9">
            <el-form-item label="分类" >
              <el-select v-model="value1" multiple placeholder="请选择" style="width: 330px">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="9">
            <el-form-item label="标签" >
              <el-select v-model="value1" multiple placeholder="请选择" style="width: 330px">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-switch
              v-model="value1"
              active-text="评论"
              width="50"
            style="margin-top: 10px; margin-right: 20px">
            </el-switch>
            <el-switch
              v-model="value1"
              active-text="推荐"
              width="50"
              style="margin-top: 10px">
            </el-switch>
          </el-col>
        </el-row>
      <el-form-item>
        <mavon-editor v-model="content"/>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  name: "BlogEdit",
  data(){
    return{
      content: '',
      value1: '',
      title: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },

}
</script>

<style scoped>
.blogEditContainer{
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
  overflow: hidden;
  opacity: 0.8;
}

.form{
  margin-top: 20px;
  margin-left: 20px;
}
</style>
