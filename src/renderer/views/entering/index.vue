<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-row>
        <el-col :span="6">
          <el-form-item label="流程编号">
            <el-input v-model="form.flowNo"></el-input>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="6">
          <el-checkbox label="显示客户全称" name="type"></el-checkbox>
          <el-checkbox label="显示进出口" name="type"></el-checkbox>
        </el-col>
        <el-col class="line" :span="10">
          <el-button>打开文件夹</el-button>
          <el-button>读取表体数据</el-button>
          <el-button>打印初审信息</el-button>
          <el-button>发送海关</el-button>
        </el-col>
      </el-row>
      <el-form-item label="收发货人">
        <el-input v-model="form.tradeName"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        flowNo: '',
        tradeName: '',
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

