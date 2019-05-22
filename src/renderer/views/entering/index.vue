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

    <el-table :data="list" v-loading.body="listLoading" element-loading-text="Loading" border  highlight-current-row>
      <el-table-column align="center" label='商品序号' width="95">
        <template slot-scope="scope">
          {{scope.row.seq}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='商品编号' width="95">
        <template slot-scope="scope">
          {{scope.row.goodsNo}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='备案序号' width="95">
        <template slot-scope="scope">
          {{scope.row.goodsNo}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='商品名称' width="95">
        <template slot-scope="scope">
          {{scope.row.goodsName}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='规格' width="95">
        <template slot-scope="scope">
          {{scope.row.spec}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='原厂国' width="95">
        <template slot-scope="scope">
          {{scope.row.goodsNo}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='数量' width="95">
        <template slot-scope="scope">
          {{scope.row.goodsNo}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='单位' width="95">
        <template slot-scope="scope">
          {{scope.row.goodsNo}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='单价' width="95">
        <template slot-scope="scope">
          {{scope.row.goodsNo}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='币制' width="95">
        <template slot-scope="scope">
          {{scope.row.goodsNo}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='总价' width="95">
        <template slot-scope="scope">
          {{scope.row.goodsNo}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='征免' width="95">
        <template slot-scope="scope">
          {{scope.row.goodsNo}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='最终目的国' width="95">
        <template slot-scope="scope">
          {{scope.row.goodsNo}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='境内货源地' width="95">
        <template slot-scope="scope">
          {{scope.row.goodsNo}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='境内货源地详细' width="95">
        <template slot-scope="scope">
          {{scope.row.goodsNo}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='危险品' width="95">
        <template slot-scope="scope">
          {{scope.row.goodsNo}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='监管条件' width="95">
        <template slot-scope="scope">
          {{scope.row.goodsNo}}
        </template>
      </el-table-column>
    </el-table>


  </div>
</template>

<script>

import { getList } from '@/api/entering'
export default {
  data() {
    return {
      list: null,
      listLoading: true,
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
  created() {
    this.fetchData()
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
    },
    fetchData() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
        this.list = response.data.items
        this.listLoading = false
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

