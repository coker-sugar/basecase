<template>
  <div>
    <!-- 设置个人信息 -->
    <div class="setting" v-show="setting">
      <el-card style="width: 600px;" >
        <el-form label-width="80px" size="small">
          <div style="text-align: center; margin: 10px 0"></div>

          <el-form-item label="用户名">
            <el-input v-model="setform.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="setform.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="setform.phone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="setform.address" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="学校">
            <el-input v-model="setform.school" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>

        <div style="text-align: center">
           <el-button type="primary" @click.native="setting=false">取消</el-button>
          <el-button type="primary" @click.native="save">确 定</el-button>
        </div>
      </el-card>
    </div>

    <!-- 显示个人信息 -->
    <div>
      <!-- 个人信息展示 -->
      <el-descriptions title="个人信息" direction="vertical" :column="4" border  style="width: 80%">
        <el-descriptions-item label="名称">{{form.username}}</el-descriptions-item>
        <el-descriptions-item label="邮箱">{{form.email}}</el-descriptions-item>
        <el-descriptions-item label="电话" :span="2">{{form.phone}}</el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">{{form.school}}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="地址">{{form.address}}</el-descriptions-item>
      </el-descriptions>
      <div style="width:30vw;height:20px"></div>
      <el-button style="position:relative;left:55vw;" @click.native="setMine()">设置个人信息</el-button>
      <div style="width:30vw;height:20px"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Person',
  data() {
    return {
      // people-id：13946473670
      // 设置个人信息
      setform:{},
      setting: false,

      form: {},
      user: localStorage.getItem("userInfo")? JSON.parse(localStorage.getItem("userInfo")) : {},
    }
  },
  created() {
    // 在设置栏处传递个人信息
    this.load()
  },
  methods: {
    load() {
      const username = this.user.username
      if (!username) {
        this.$message.error("当前无法获取用户信息！")
        return
      }

      
      // 获取用户个人信息
      // this.$axios.get("http://127.0.0.1:4523/m1/3171021-0-default/user").then(res => {
      //   this.form = res.data
      // })
      this.$axios.post("/CodeRepository/login",{
        account: this.user.account,
        password: this.user.password
      }).then(res => {
        this.form = res.data
        console.log(res.data)
      })
    },
    // 打开个人信息
    setMine(){
       this.setting = !this.setting

      //  this.$axios.get("http://127.0.0.1:4523/m1/3171021-0-default/user").then(res => {
      //   this.setform = res.data
      // })
      this.$axios.post("/CodeRepository/login",{
        account: this.user.account,
        password: this.user.password
      }).then(res => {
        this.setform = res.data
      })
    },
    // 设置个人信息
    save() {
      this.setting = !this.setting
      // 发送用户个人信息
      // this.$axios.post("http://127.0.0.1:4523/m1/3171021-0-default/user", {
      //   username: this.setform.username,
      //   email: this.setform.email,
      //   phone: this.setform.phone,
      //   address: this.setform.address,
      //   school: this.setform.school
      // }
      // ).then(res => {
      //   if (res.status === 200) {
      //     this.$message.success("保存成功")
      //     this.load()
      //     this.setform = {}
      //   } else {
      //     this.$message.error("保存失败")
      //   }
      // })
      this.$axios.post("/CodeRepository/set_info", {
        oldname: this.form.username,
        username: this.setform.username,
        email: this.setform.email,
        phone: this.setform.phone,
        address: this.setform.address,
        school: this.setform.school
      }
      ).then(res => {
        console.log(res)
        if (res.status === 200) {
          this.$message.success("保存成功")
          this.load()
          this.setform = {}
        } else {
          this.$message.error("保存失败")
        }
      })
    },
  }
}

</script>

<style scoped>
.setting {
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
.infoshow {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}
.userinfo {
    height: 100%;
}
.user-item {
    position: relative;
    top: 30%;
    padding: 26px;
    font-size: 20px;
}
</style>
