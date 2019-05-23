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
          {{scope.row.recordNo}}
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
          {{scope.row.ori}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='数量' width="95">
        <template slot-scope="scope">
          {{scope.row.num}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='单位' width="95">
        <template slot-scope="scope">
          {{scope.row.unit}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='单价' width="95">
        <template slot-scope="scope">
          {{scope.row.price}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='币制' width="95">
        <template slot-scope="scope">
          {{scope.row.coinType}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='总价' width="95">
        <template slot-scope="scope">
          {{scope.row.total}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='征免' width="95">
        <template slot-scope="scope">
          {{scope.row.free}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='最终目的国' width="95">
        <template slot-scope="scope">
          {{scope.row.dest}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='境内货源地' width="95">
        <template slot-scope="scope">
          {{scope.row.oriAddr}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='境内货源地详细' width="95">
        <template slot-scope="scope">
          {{scope.row.oriAddrInfo}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='危险品' width="95">
        <template slot-scope="scope">
          {{scope.row.danger}}
        </template>
      </el-table-column>
      <el-table-column align="center" label='监管条件' width="95">
        <template slot-scope="scope">
          {{scope.row.supervise}}
        </template>
      </el-table-column>
    </el-table>

    <el-row>
      <i class="el-icon-plus"></i>
      <i class="el-icon-delete"></i>
      <i class="el-icon-document-copy"></i>
      <i class="el-icon-arrow-up"></i>
      <i class="el-icon-arrow-down"></i>
      <i class="el-icon-edit"></i>
    </el-row>

    <el-form ref="form" :model="cur" label-width="120px">
      <el-row>
        <el-col :span="18">
          <el-row>
            <el-col :span="12">
              <el-form-item label="总价汇总">
                <el-input disabled="" v-model="cur.totalPrice"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="重量汇总">
                <el-input disabled="" v-model="cur.totalWeight"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <el-form-item label="商品序号">
                <el-input disabled="" v-model="cur.seq"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="商品编码">
                <el-input disabled="" v-model="cur.goodsNo"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="检验检疫编码">
                <el-input disabled="" v-model="cur.inspectNo"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="危险品">
                <el-input disabled="" v-model="cur.danger"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="监管条件">
                <el-input disabled="" v-model="cur.inspectCondition"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item label="商品名称">
                <el-input disabled="" v-model="cur.goodsName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="规格型号">
                <el-input disabled="" v-model="cur.spec"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="5">
              <el-form-item label="成交数量">
                <el-input disabled="" v-model="cur.num"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item label="成交单位">
                <el-input disabled="" v-model="cur.unit"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item label="单价">
                <el-input disabled="" v-model="cur.price"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item label="总价">
                <el-input disabled="" v-model="cur.amount"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="币制">
                <el-input disabled="" v-model="cur.coinType"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="5">
              <el-form-item label="法定数量">
                <el-input disabled="" v-model="cur.stdNum"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item label="法定单位">
                <el-input disabled="" v-model="cur.stdUnit"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item label="版本号">
                <el-input disabled="" v-model="cur.version"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="货号">
                <el-input disabled="" v-model="cur.goodsNumber"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item label="最终目的国">
                <el-input disabled="" v-model="cur.dest"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="5">
              <el-form-item label="第二数量">
                <el-input disabled="" v-model="cur.secNum"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item label="第二单位">
                <el-input disabled="" v-model="cur.secUnit"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="14">
              <el-form-item label="原产国(地区)">
                <el-input disabled="" v-model="cur.ori"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="10">
              <el-form-item label="境内货源地">
                <el-input disabled="" v-model="cur.orgAddress"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="征名">
                <el-input disabled="" v-model="cur.ree"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-button icon="el-icon-d-arrow-left">第一条</el-button>
              <el-button icon="el-icon-arrow-left">上一条</el-button>
              <el-button icon="el-icon-arrow-right">下一条</el-button>
              <el-button icon="el-icon-d-arrow-right">最后一条</el-button>

            </el-col>
          </el-row>


        </el-col>
        <el-col :span="6">

        </el-col>
      </el-row>
    </el-form>
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
      },
      cur: {
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

