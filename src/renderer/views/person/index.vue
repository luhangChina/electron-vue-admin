<template>
  <div class="app-container">
    <el-button class="addButton" type="primary" @click="dialogFormVisible = true">新增成员</el-button>
  
    <el-dialog title="新增成员" :visible.sync="dialogFormVisible">
      <el-form :model="form" ref="PersonForm" label-width="120px" :rules="loginRules">
        <el-form-item label="名字" prop="name">
          <el-input v-model="form.name" placeholder="名字"></el-input>
        </el-form-item>
        <el-form-item label="生日" required>
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </div>
    </el-dialog>
  
  
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column align="center" label='ID' width="95">
        <template slot-scope="scope">
          {{scope.$index+1}}
        </template>
      </el-table-column>
      <el-table-column label="name">
        <template slot-scope="scope">
          {{scope.row.name+scope.$index}}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="birth" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{scope.row.date}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>

  
</template>

<script>
import { getList, createPerson } from '@/api/person'

export default {
  data() {
    return {
      list: null,
      listLoading: true,
      dialogFormVisible: false,
      loginRules: {
        name: [{ required: true, trigger: 'blur', message: '请填写名字' }],
        date1: [{ required: true, message: '请选择日期', trigger: 'change' }]
      },
      form: {
        date1: '',
        name: ''
      }
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    onSubmit() {
      this.$refs.PersonForm.validate((vaild, values) => {
        if (vaild) {
          createPerson(this.form).then(response => {
            this.$message('提交成功!')
            this.$refs.PersonForm.resetFields()
            this.dialogFormVisible = false
            this.fetchData()
          })
        }
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
  .addButton{
    margin-bottom: 15px;
  }
</style>