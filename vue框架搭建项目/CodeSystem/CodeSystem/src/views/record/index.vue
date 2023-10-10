<template>
  <div>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="time"
      label="反馈时间"
      width="180"
      align="center">
    </el-table-column>
    <el-table-column
      prop="issue"
      label="反馈问题"
      width="180"
       align="center">
    </el-table-column>
    <el-table-column
      prop="project_id"
      label="项目ID"
      width="180"
       align="center">
    </el-table-column>
    <el-table-column
      prop="project_name"
      label="项目名称"
      width="280"
       align="center">
    </el-table-column>
    <el-table-column
      prop="text"
      label="反馈结果"
      width="160"
       align="center">
    </el-table-column>
  </el-table>
  </div>
</template>
<script>
  export default {
    data() {
        const tableData = [{}]
      return {
        // account,
        tableData,
        user: localStorage.getItem("userInfo")? JSON.parse(localStorage.getItem("userInfo")) : {},
        text:""
      }
    },
    created(){
      this.load()
    },
    methods: {
        load(){
          console.log(this.user.account)
            this.$axios.get("/issue/get_history",{
              params:{account: this.user.account}
            }).then(res => {
               this.tableData = res.data
               console.log(res.data)
               for(let i in this.tableData) {
                console.log(this.tableData[i])
                if(this.tableData[i].handle==1) {
                this.tableData[i].text="通过"
               }else if(this.tableData[i].handle==-1) {
               this.tableData[i].text="拒绝"
               }else {
                 this.tableData[i].text="未处理"
               }
               }
            })
        }
    }
  }
</script>