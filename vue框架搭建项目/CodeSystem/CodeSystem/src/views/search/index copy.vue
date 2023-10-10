<template>
  <div style="width:80vw">
    <el-input
      v-model="input"
      placeholder="请输入内容"
      style="width: 200px"
      @keyup.enter.native="search"
    ></el-input>
    <el-button type="primary" style="margin-left: 20px" @click="search"
      >搜索</el-button
    >
  <el-upload
    style="display:inline-block;margin-left:2vw;"
     class="upload-demo"
     ref="upload"
     action="doUpload"
     :limit="1"
     :before-upload="beforeUpload">
     <el-button style="height:40px;border-radius:4px;font-size:14px;" slot="trigger" size="small" type="primary">上传文件</el-button>
  </el-upload> 

  <el-button 
  style="display:inline-block;margin-left:38vw;" 
  v-show = "serached"
  @click="download(scope.$index, scope.row)" 
  type="primary" 
  size="large"
  >下载文件</el-button>

    <!-- 确认上传文件弹窗 -->
     <span slot="footer" class="upload-footer" v-show="confirmUpload">
        <div class="surface">
      <!-- <div slot="tip" class="el-upload__tip">注意：上传文件不得超过100MB</div> -->
     <div slot="tip" style="margin:20px">确认上传“{{NewfileName}} .{{filetxt}}”文件吗？</div>
     <el-button @click="cancleUpload()">取消</el-button>
     <el-button type="primary" @click="submitUpload()">确定</el-button>
        </div>
     </span>

    <div style="height:20px;width:100%;"></div>

    <!-- 标签 -->
    <el-row class="block-col-2">
      <el-col :span="5">
        <!-- <span class="demonstration">click 激活</span> -->
         <div class="tap" v-show="tap.lge">语言</div>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            {{language}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="updateLanguage('C')">C</el-dropdown-item>
            <el-dropdown-item @click.native="updateLanguage('C#')">C#</el-dropdown-item>
            <el-dropdown-item @click.native="updateLanguage('python')">python</el-dropdown-item>
            <el-dropdown-item @click.native="updateLanguage('Java')">Java</el-dropdown-item>
            <el-dropdown-item @click.native="updateLanguage('Java')">JavaScript</el-dropdown-item>
            <el-dropdown-item @click.native="updateLanguage('其它')">其它</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="7">
        <div class="tap" v-show="tap.ude">更新时间</div>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            {{time}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="updateTime('一个月内')">一个月内</el-dropdown-item>
            <el-dropdown-item @click.native="updateTime('三个月内')">三个月内</el-dropdown-item>
            <el-dropdown-item @click.native="updateTime('半年内')">半年内</el-dropdown-item>
            <el-dropdown-item @click.native="updateTime('一年内')">一年内</el-dropdown-item>
            <el-dropdown-item @click.native="updateTime('三年内')">三年内</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
       <el-col :span="5">
        <div class="tap" v-show="tap.atn">关注度</div>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            {{attention}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="updateAttention('1w+')">1w+</el-dropdown-item>
            <el-dropdown-item @click.native="updateAttention('1k+')">1K+</el-dropdown-item>
            <el-dropdown-item @click.native="updateAttention('100+')">100+</el-dropdown-item>
            <el-dropdown-item @click.native="updateAttention('其它')">其它</el-dropdown-item>
            <!-- <el-dropdown-item>三年内</el-dropdown-item> -->
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="7">
        <div class="tap" v-show="tap.les">点赞数</div>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            {{likes}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="updateLikes('1w+')">1w+</el-dropdown-item>
            <el-dropdown-item @click.native="updateLikes('1k+')">1K+</el-dropdown-item>
            <el-dropdown-item @click.native="updateLikes('100+')">100+</el-dropdown-item>
            <el-dropdown-item @click.native="updateLikes('其它')">其它</el-dropdown-item>
            <!-- <el-dropdown-item>三年内</el-dropdown-item> -->
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>

     <div style="height:20px;width:100%;"></div>

    <div style="font-size:16px;text-indent:1em;color:#909399;">
      请选择你想要看到的项
      <el-button type="primary" size="mini" class="el-icon-menu" @click="wantSee()">选择</el-button>
    </div>
   
    <div class="select" v-show="select">
      <el-card style="width: 400px;" >
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
         </el-checkbox-group>
        <div style="text-align: center">
          <el-button type="primary" @click.native="cancelSelect">取消</el-button>
          <el-button type="primary" @click.native="confirmSelect">确 定</el-button>
        </div>
      </el-card>
    </div>

    <div style="height:20px;width:100%;"></div>

  <el-table
    style=" width: 100%;"
    :data="tableData"
    border>
    <el-table-column
     fixed
      prop="project_name"
      label="项目名称"
      width="120"
      header-align="center"
      align="center">
    </el-table-column>
      <el-table-column
        prop="keyword"
        label="语言"
        width="120"
        header-align="center"
        align="center"
        v-if="eltable.keyword">
      </el-table-column>
    <el-table-column
      prop="project_url"
      label="项目地址"
      width="120"
      header-align="center"
      align="center"
      v-if="eltable.url">
    </el-table-column>
    <el-table-column
      prop="download_url"
      label="下载链接"
      width="300"
      header-align="center"
      align="center"
      v-if="eltable.download">
    </el-table-column>
    <el-table-column
      prop="watch_count"
      label="关注数量"
      width="120"
      header-align="center"
      align="center"
      v-if="eltable.watch">
    </el-table-column>
    <el-table-column
      prop="fork_count"
      label="下载次数"
      width="120"
      header-align="center"
      align="center"
      v-if="eltable.fork">
    </el-table-column>
    <el-table-column
      prop="star_count"
      label="点赞次数"
      width="120"
      header-align="center"
      align="center"
      v-if="eltable.star">
    </el-table-column>
    <el-table-column
      prop="update_time"
      label="更新时间"
      width="120"
      header-align="center"
      align="center"
      v-if="eltable.update">
    </el-table-column>
    <el-table-column
      prop="commit_count"
      label="提交数量"
      width="120"
      header-align="center"
      align="center"
      v-if="eltable.commit">
    </el-table-column>
    <el-table-column
      prop="about_text"
      label="相关文档"
      width="300"
      header-align="center"
      align="center"
      v-if="eltable.about">
    </el-table-column>

    <el-table-column
      fixed="right" 
      label="操作"
      width="70"
      header-align="center"
      align="center">
      <template slot-scope="scope">
        <el-button type="text" size="large" @click="feedback(scope.$index,scope.row)">反馈</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog title="反馈" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="项目名称" :label-width="formLabelWidth">
      <el-input v-model="form.project_name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="项目地址" :label-width="formLabelWidth">
      <el-input v-model="form.project_url" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="反馈问题" :label-width="formLabelWidth">
      <el-input v-model="form.issue" autocomplete="off"></el-input>
    </el-form-item>
    <!-- <el-form-item label="活动区域" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item> -->
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="FormVisible">确 定</el-button>
  </div>
</el-dialog>

  </div>
</template>
<script>
const cityOptions =  ['项目语言', '项目地址', '下载链接', '关注数量','下载次数','点赞次数','更新时间','提交数量','相关文档'];
export default {
  data () {
    return {
      // 文件
      files:null,
      fileName:"",
      NewfileName:"",
      filetxt:"",
      confirmUpload: false,
      serached:false,
      // 关键字
      input: '',
      // 搜索次数
      serachcount:0,
      tableData:[
        {
          // 语言
          keyword: '***',
          // 项目名称
          project_name:'***',
          // 项目地址
          project_url:"****",
          // 下载链接
          download_url:"****",
          // 关注数量
          watch_count:"***",
          // 下载次数
          fork_count:"***",
          // 点赞次数
          star_count:"***",
          // 更新时间
          update_time:'*****',
          // 提交数量
          commit_count:'***',
          // 相关文档
          about_text:"***"
        }],
        // 标签显示
        tap: {
            lge:false,
            ude:false,
            atn:false,
            les:false
        },
        language: '语言',
        time:'更新时间',
        attention:'关注度',
        likes:'点赞数',
        // 发送标签
        deliverParams:{
          language: '语言',
          time:'更新时间',
          attention:'关注度',
          likes:'点赞数',
          key: this.input
        },
        // 选项框
        select:false,
        checkAll: false,  // 勾选全部时展示“√”
        checkedCities: ['项目语言', '项目地址','关注数量','下载次数'],
        cities:cityOptions, // 所有项
        isIndeterminate: true,  // 只勾选一部分项时显示 “-”
        eltable: {    //  决定展示哪些项
          keyword:true,
          url:true,
          download:true,
          watch:true,
          fork:true,
          star:true,
          update:true,
          commit:true,
          about:true,
        },
         dialogFormVisible: false,
        form: {
          project_name: '',
          project_url: '',
          question: '',
          time: ''
        },
        formLabelWidth: '120px'
    }
  },
methods: {
  wantSee(){
    this.select = !this.select
    for (let key in this.eltable) {
      if (this.eltable.hasOwnProperty(key)) {
      this.eltable[key] = false;
      }
    }
    for(let key in this.checkedCities) {
       if(this.checkedCities[key] == "项目语言") {
        this.eltable.keyword = true
      }else if (this.checkedCities[key] == "项目地址") {
        this.eltable.url = true
      }else if (this.checkedCities[key] == "下载链接") {
        this.eltable.download = true
      }else if (this.checkedCities[key] == "关注数量") {
        this.eltable.watch = true
      }else if (this.checkedCities[key] == "下载次数") {
        this.eltable.fork = true
      }else if (this.checkedCities[key] == "点赞次数") {
        this.eltable.star = true
      }else if (this.checkedCities[key] == "更新时间") {
        this.eltable.update = true
      }else if (this.checkedCities[key] == "提交数量") {
        this.eltable.commit = true
      }else if (this.checkedCities[key] == "相关文档") {
        this.eltable.about = true
      }
    }
  },
   handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      // console.log(this.checkedCities)
      this.isIndeterminate = false;
      if(this.checkedCities.length) {
        for (let key in this.eltable) {
          this.eltable[key] =true;
        }
      }else{
         for (let key in this.eltable) {
          this.eltable[key] =false;
      }
      }
  },
  handleCheckedCitiesChange(value) {
    // value勾选的项
    let checkedCount = value.length;
    this.checkAll = checkedCount === this.cities.length;
    this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    for (let key in this.eltable) {
        if (this.eltable.hasOwnProperty(key)) {
         this.eltable[key] = false;
      }
    }
    for(let key in value) {
      if(value[key] == "项目语言") {
        this.eltable.keyword = true
      }else if (value[key] == "项目地址") {
        this.eltable.url = true
      }else if (value[key] == "下载链接") {
        this.eltable.download = true
      }else if (value[key] == "关注数量") {
        this.eltable.watch = true
      }else if (value[key] == "下载次数") {
        this.eltable.fork = true
      }else if (value[key] == "点赞次数") {
        this.eltable.star = true
      }else if (value[key] == "更新时间") {
        this.eltable.update = true
      }else if (value[key] == "提交数量") {
        this.eltable.commit = true
      }else if (value[key] == "相关文档") {
        this.eltable.about = true
      }
    }
 },
 cancelSelect(){
   this.select = !this.select
    for (let key in this.eltable) {
        if (this.eltable.hasOwnProperty(key)) {
         this.eltable[key] = true;
      }
    }
    this.checkedCities =  ['项目语言', '项目地址','关注数量','下载次数']
 },
 confirmSelect(){
    this.select = !this.select
 },
  // 对上传的文件进行筛选
  beforeUpload(file) {
    this.files = file;
    const allowedExtensions = ['zip', 'xls', 'xlsx', 'docx', 'doc', 'jpg', 'jpeg', 'png', 'gif','pdf','sql'];
    const fileExtension = file.name.split('.').pop().toLowerCase();
    const isAllowedExtension = allowedExtensions.includes(fileExtension);
    const isSizeValid = file.size / 1024 / 1024 < 100;
  
    if (!isAllowedExtension) {
      this.$message.warning('文件格式不正确！');
      return false;
    }
  
    if (!isSizeValid) {
      this.$message.warning('上传文件大小不能超过 100MB！');
      return false;
    }
  
    this.fileName = file.name.split('.')[0];
  
    const maxLength = 12;
    if (this.fileName.length <= maxLength) {
       this.NewfileName = this.fileName
    } else {
       this.NewfileName = this.fileName.slice(0, maxLength) + "...";
    }
  
    this.filetxt = file.name.split('.')[1]
     this.confirmUpload = !this.confirmUpload
    return false; // 返回 false 不会自动上传
  },
  // 取消文件上传
  cancleUpload() {
      this.files = null;
      this.fileName = "";
      this.confirmUpload = !this.confirmUpload;
  },
  submitUpload() {
    this.confirmUpload = !this.confirmUpload
    console.log('上传'+this.files.name)
    if(this.fileName == ""){
      this.$message.warning('请选择要上传的文件！')
      return false
  }
  let fileFormData = new FormData();
  // console.log( this.files)
  fileFormData.append('file', this.files);//filename是键，file是值，就是要传的文件，test.zip是要传的文件名
  // console.log( fileFormData)
  this.$axios.post("/file/upload",fileFormData).then((res) => {
    if (res.status === 200) {
    // console.log(fileFormData)
      this.$message({
      message: '提交成功',
      type: 'success',
      duration: 1500,
    })
   } else {
   this.$message.error(res.status)
   }
  }) 
  },
    updateLanguage(language){
      this.language = language
      this.deliverParams.language = language
      this.tap.lge = true
      if(this.input && this.serachcount>0) {
        this.search()
      }
    },
    updateTime(time) {
      this.time = time
      this.deliverParams.time = time
      this.tap.ude = true
      if(this.input && this.serachcount>0) {
        this.search()
      }
    },
    updateAttention(attention){
      this.attention = attention
      this.deliverParams.attention = attention
      this.tap.atn = true
      if(this.input && this.serachcount>0) {
        this.search()
      }
    },
    updateLikes(likes){
      this.likes = likes
      this.deliverParams.likes = likes
      this.tap.les = true
      if(this.input && this.serachcount>0) {
        this.search()
      }
    },
     search () {
      this.deliverParams.key = this.input
      const formattedDate =  new Date().toISOString().substr(0, 10); // 输出: 2023-08-04

      // this.$axios.get('http://127.0.0.1:4523/m1/3171021-0-default/edit').then(response => {
      //     if(!response.data) {
      //       alert("未查询到数据")
      //       this.tableData = []
      //       setTimeout( ()=>{
      //         this.serached = false
      //       },500)
      //     }else {
      //       this.tableData = response.data
      //       setTimeout( ()=>{
      //         this.serached = true
      //       },500)
      //     }
      //     this.serachcount ++
      //     }).catch(resp => {
      //     console.log("请求失败：" + resp.status + "," + resp.statusText);
      //   });

       this.$axios.post('/Code_Info/select',{
        language: this.deliverParams.language,
        time: this.deliverParams.time,
        attention: this.deliverParams.attention,
        likes: this.deliverParams.likes,
         key: this.deliverParams.key,
         nowtime: formattedDate
       }).then(response => {
          // console.log(response);
          if(!response.data) {
            alert("未查询到数据")
            this.tableData = []
            setTimeout( ()=>{
              this.serached = false
            },500)
          }else {
            this.tableData = response.data
            setTimeout( ()=>{
              this.serached = true
            },500)
          }
          this.serachcount ++
          }).catch(resp => {
          console.log("请求失败：" + resp.status + "," + resp.statusText);
        });

      // this.input = ''
      // 更新标签页
      // this.language='语言'
      // this.time='更新时间'
      // this.attention='关注度'
      // this.likes='点赞数'

      // this.tableData = []
      // this.tableData = tableData
    },
    download(index,row) {
      console.log(row.download_url)
      // 传row值就行
      window.location.href="http://10.100.76.102:8080/file/download/test.csv"
      const fileName = "test.csv";
      this.$axios.get("/file/download",{
        params: { fileName: fileName },
      }
      ).then(res => {
        console.log(res)
      }).catch( resp =>{
          console.log(resp)
      })
    },
    feedback(index,row){
      this.dialogFormVisible =true
      //  this.$axios.get('http://127.0.0.1:4523/m1/3171021-0-default/edit').then(res => {
      //       console.log(res.data[index].project_name) 
      //       this.form.project_name = res.data[index].project_name
      //       this.form.project_url = res.data[index].project_url
      //     }).catch(resp => {
      //     console.log("请求失败：" + resp.status + "," + resp.statusText);
      //   })
      const formattedDate =  new Date().toISOString().substr(0, 10);
       this.$axios.post('/Code_Info/select',{
        language: this.deliverParams.language,
        time: this.deliverParams.time,
        attention: this.deliverParams.attention,
        likes: this.deliverParams.likes,
         key: this.deliverParams.key,
         nowtime: formattedDate
       }).then(res => {
          console.log(res.data[index].project_name) 
            this.form.project_name = res.data[index].project_name
            this.form.project_url = res.data[index].project_url
            this.form.project_id = res.data[index].project_id
          }).catch(resp => {
          console.log("请求失败：" + resp.status + "," + resp.statusText);
        });
    },
    FormVisible() {
        this.dialogFormVisible = false
        this.form.time =  new Date().toISOString().substr(0, 10);

        // console.log(this.form)

      // let fankuiform ={
      //   projectname: this.form.projectname,
      //   project_url: this.form.project_url,
      //   question: this.form.question,
      //   time: this.form.time
      // }
      // this.$axios.post("/issue/submit_feedback",
      //     qs.stringify(fankuiform),{
      //     headers: {
      //       'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
      //     }
      //       }).then(res=>{
      //          console.log(res);
      // })


      this.$axios.post("/issue/submit_feedback",{
        project_id:  this.form.project_id,
        account:"13946473670",
        username:"people",
        project_name: this.form.project_name,
        project_url: this.form.project_url,
        issue: this.form.issue,
        time: this.form.time
        }).then(res=>{
            console.log(res);
        })
      
      this.form = {}
    }
  }
}
</script>

<style scoped>
  .block-col-2 {
    margin-left: 20px;
    width:40vw;
  }
  .el-dropdown-link {
    /* background-color: pink; */
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .tap {
    display: inline-block;
    margin-right: 10px;
    color: #409EFF;
    font-size: 14px;
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
.select {
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

</style>