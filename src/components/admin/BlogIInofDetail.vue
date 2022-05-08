<template>
  <div class="allBlogs">
    <el-form class="form" inline="true">
      <el-row  :gutter="20">
        <el-col :span="6">
          <el-form-item label="关键词" style="float:left;margin-left: 20px">
            <el-input placeholder="关键词" ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="分类" >
            <el-select v-model="value1" multiple placeholder="请选择">
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
          <el-form-item label="标签" >
            <el-select v-model="value1" multiple placeholder="请选择">
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
          <el-button type="primary">查询</el-button>
          <el-button >重置</el-button>
        </el-col>
      </el-row>
    </el-form>


  </div>
</template>

<script>
export default {
  name: "BlogIInofDetail",
  data(){
    return{
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
      value1: [],
    }
  }
}
</script>

<style scoped>
.allBlogs{
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
  overflow: hidden;
  opacity: 0.8;
}
.form{
  margin-top: 20px;
}

</style>
