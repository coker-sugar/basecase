<template>
  <div class="feedback-page">
    <h3>用户反馈审核</h3>
    <el-table :data="feedbackList" style="width: 100%">
      <el-table-column label="用户账号" prop="account" align="center"></el-table-column>
      <el-table-column label="反馈用户" prop="username" align="center"></el-table-column>
      <el-table-column label="项目地址" prop="project_url"  align="center"></el-table-column>
       <el-table-column label="项目名称" prop="project_name"  align="center"></el-table-column>
      <el-table-column label="反馈内容" prop="issue"  align="center"></el-table-column>
      <el-table-column label="操作"  align="center" width="150">
        <template slot-scope="scope">
          <el-button type="primary" @click="scope.row.red && output(scope.row) " size="small" v-show="scope.row.blue">通过</el-button>
           <el-button type="primary"  v-show="scope.row.green" size="small">已通过</el-button>
          <!-- <el-button type="primary" icon="el-icon-check"  circle v-show="scope.row.green"></el-button> -->

          <el-button type="danger" @click="scope.row.blue && rejectput(scope.row)" size="small" v-show="scope.row.red">拒绝</el-button>
          <el-button type="danger" v-show="scope.row.err" size="small">已拒绝</el-button>

          <!-- <el-button type="danger" icon="el-icon-delete" circle ></el-button> -->
        </template>
      </el-table-column>
    </el-table>

    <span slot="footer" class="upload-footer" v-show="confirm">
        <div class="surface">
          <div slot="tip" style="margin:20px">确认{{TF ? "通过" : "拒绝"}}该反馈吗？</div>
          <el-button @click="canclefeedback()">取消</el-button>
          <el-button type="primary" @click="confirmfeedback()">确定</el-button>
        </div>
     </span>


    <el-dialog title="编辑" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="项目编号" :label-width="formLabelWidth">
      <el-input v-model="form.project_id" autocomplete="off" disabled></el-input>
    </el-form-item>
    <el-form-item label="项目名称" :label-width="formLabelWidth">
      <el-input v-model="form.project_name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="语言" :label-width="formLabelWidth">
      <el-input v-model="form.keyword" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="项目地址" :label-width="formLabelWidth">
      <el-input v-model="form.project_url" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="下载链接" :label-width="formLabelWidth">
      <el-input v-model="form.download_url" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="关注数量" :label-width="formLabelWidth">
      <el-input v-model="form.watch_count" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="下载次数" :label-width="formLabelWidth">
      <el-input v-model="form.fork_count" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="点赞次数" :label-width="formLabelWidth">
      <el-input v-model="form.star_count" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="获取时间" :label-width="formLabelWidth">
      <el-input v-model="form.get_time" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="更新时间" :label-width="formLabelWidth">
      <el-input v-model="form.update_time" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="提交数量" :label-width="formLabelWidth">
      <el-input v-model="form.commit_count" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="分支数量" :label-width="formLabelWidth">
      <el-input v-model="form.branch_count" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="分支类型" :label-width="formLabelWidth">
      <el-input v-model="form.branch_type" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="标签数量" :label-width="formLabelWidth">
      <el-input v-model="form.tag_count" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="标签描述" :label-width="formLabelWidth">
      <el-input v-model="form.tags_text" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="相关文档" :label-width="formLabelWidth">
      <el-input v-model="form.about_text" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer" >
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="FormVisible()">确 定</el-button>
  </div>
</el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
      confirm:false,
      TF:null,
      feedbackList:  [
        { id: 1, account:111,blue:true, green:false, red:true,err:false,username: 'User A', issue: '反馈内容 1',project_url:'地址1',project_name:'名称1'},
        { id: 2, account:222,blue:true, green:false, red:true,err:false,username: 'User B', issue: '反馈内容 2',project_url:'地址2',project_name:'名称2'},
        { id: 3, account:333, blue:true, green:false, red:true,err:false,username: 'User C', issue: '反馈内容 3',project_url:'地址3',project_name:'名称3' },
      ],
      temporary:{},
      // 通过时编辑
      dialogFormVisible:false,
      form:{},
       formLabelWidth: '120px'
    };
  },
    created() {
    this.load()
  },
  methods: {
    load(){
      this.$axios.get("http://127.0.0.1:4523/m1/3171021-0-default/allfeedList").then(res => {
      // this.$axios.get("/issue/get_feedback").then(res => {
        this.feedbackList = res.data
      })
    },

    // 确认通过反馈吗？（弹窗）
    output(row){
      this.TF = true
      this.confirm = !this.confirm
      this.temporary = row
    },

    // 确认拒绝反馈吗？（弹窗）
    rejectput(row){
      this.TF = false
      this.confirm = !this.confirm
      this.temporary = row
    },

    // 根据TF决定执行通过/拒绝反馈
    confirmfeedback(){
       this.confirm = true
       if(this.TF) {
        this.approveFeedback()
       }else{
        this.rejectFeedback()
       }
    },

    // 确认通过反馈吗？（弹窗）确认要通过反馈
    approveFeedback() {
      // 请求拿到对应项目的信息
       this.$axios.get("http://127.0.0.1:4523/m1/3171021-0-default/edit",{
      // this.$axios.get('/Code_Info/select_byId',{
       params:{ project_id: this.temporary.project_id}
      }).then(res=>{
        this.form = res.data
        this.TF = null
        this.confirm = !this.confirm
        this.dialogFormVisible = true
      }).catch( resp=> {
        console.log("请求失败：" + resp.status + "," + resp.statusText);
      })
    },

    // 确认拒绝反馈吗？（弹窗）确认要拒绝反馈
    rejectFeedback() {
      this.TF = null
      this.confirm = !this.confirm
      this.temporary.blue = false
      this.temporary.red = false
      this.temporary.err = true
      this.$axios.get("http://127.0.0.1:4523/m1/3171021-0-default/allfeedList",{
      // this.$axios.post("/issue/refuse_feedback",{
        project_id: this.temporary.project_id,
        red:this.temporary.red,
        err:this.temporary.err,
        blue:this.temporary.blue,
        green:this.temporary.green
      }).then(res=>{
        console.log(res)
      }).catch(resp=>{
        console.log(resp)
      })
    },

    canclefeedback(){
        this.confirm = false
    },

    // 执行修改项目操作
    FormVisible() {
      this.dialogFormVisible = false
      this.form.time =  new Date().toISOString().substr(0, 10);
      this.temporary.red = false
      this.temporary.blue = false
      this.temporary.green = true

      this.$axios.get("http://127.0.0.1:4523/m1/3171021-0-default/allfeedList",{
      // this.$axios.post("/Code_Info/alter",{
        project_id: this.temporary.project_id,
        keyword: this.form.keyword,

        project_name: this.form.project_name,
        project_url: this.form.project_url,
        download_url: this.form.download_url,

        watch_count: this.form.watch_count,
        fork_count: this.form.fork_count,
        star_count: this.form.star_count,

        update_time: this.form.update_time,
        commit_count: this.form.commit_count,
        about_text: this.form.about_text,

        branch_count:this.form.branch_count,
        branch_type:this.form.branch_type,
        tag_count:this.form.tag_count,

        tags_text:this.form.tags_text,
        get_time:this.form.get_time,
        }).then(res=>{
          this.load()
          this.$message({
            message: '通过成功',
            type: 'success',
            duration: 1500,
          })
            console.log(res);
            this.form = {}
        })

      this.$axios.get("http://127.0.0.1:4523/m1/3171021-0-default/allfeedList",{
      // this.$axios.post("/issue/pass_feedback",{
        project_id: this.temporary.project_id,
        red:this.temporary.red,
        err:this.temporary.err,
        blue:this.temporary.blue,
        green:this.temporary.green
      }).then(res=>{
          console.log(res)
      }).catch(resp=>{
        console.log(resp)
      })
      
    }
  }
};
</script>

<style>
.feedback-page {
  padding: 20px;
}
  .upload-footer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
    z-index:999;
  }
  .surface {
   background-color: white;
  width: 300px;
  height: 140px;
  text-align: center;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* 灰色阴影 */
}
</style>
