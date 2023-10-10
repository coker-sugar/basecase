<template>
	<div class="wrapper">
		<!-- 登录 -->
		<div class="modal" v-show="modal">
			<el-form :model="user" status-icon :rules="rules" ref="userForm"  @keyup.enter.native="login">
				<div class="title">Code Acquisition System</div>
				<el-form-item prop="account">
					<el-input type="text" prefix-icon="el-icon-user" placeholder="请输入用户账号" v-model="user.account" />
				</el-form-item>
				<el-form-item prop="password">
					<el-input :type="psw?'password':'text'"  prefix-icon="el-icon-lock" placeholder="请输入密码" v-model="user.password" >
					<i
      				  slot="suffix"
      				  class="icon-style"
      				  :class="psw ? 'el-icon-view': 'el-icon-minus'"
      				  autocomplete="auto"
      				  @click="psw = !psw"
      				/>
					</el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" class="btn-login" @click="checkShow">注册</el-button>
					<el-button type="primary" class="btn-login" @click="login">登录</el-button>
				</el-form-item>
			</el-form>
		</div>

		<!-- 注册 -->
		<div v-show="register">
        	<el-form ref="registerForm" :model="form" :rules="RegisterRules" label width=" 80px" class="register-box">
        	    <h3 class="register-title">欢迎登录</h3>
        	    <el-form-item label="账号" prop="username">
        	        <el-input type="text" placeholder=" 请输入账号" prefix-icon="el-icon-user" v-model="form.username"/>
        	    </el-form-item>
        	    <el-form-item label="密码" prop="password">
        	        <el-input :type="psw1?'password':'text'" placeholder=" 请输入密码" prefix-icon="el-icon-lock" v-model=" form.password">
					  <i
      				    slot="suffix"
      				    class="icon-style"
      				    :class="psw1 ? 'el-icon-view': 'el-icon-minus'"
      				    autocomplete="auto"
      				    @click="psw1 = !psw1"
      				  />
					</el-input>
        	    </el-form-item>
        	    <el-form-item label="确认密码" prop="checkPass">
        	        <el-input :type="psw1?'password':'text'" placeholder=" 请确认密码" prefix-icon="el-icon-lock" v-model="form.checkPass" >
						<i
      				    slot="suffix"
      				    class="icon-style"
      				    :class="psw1 ? 'el-icon-view': 'el-icon-minus'"
      				    autocomplete="auto"
      				    @click="psw1 = !psw1"
      				  	/>
					</el-input>
        	    </el-form-item>
        	    <el-form-item>
					<el-button type="primary" @click="cancel()">取消</el-button>
        	        <el-button type="primary" v-on:click="onSubmit('registerForm')">注册</el-button>
        	    </el-form-item>
        	</el-form>
        <el-dialog
                title="温馨提示"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <span>请输入账号和密码</span>
            <span slot="footer" class="dialog-footer">
			<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      		</span>
        </el-dialog>
    	</div>
	</div>
</template>
<script>
import dynamicUser from "../../mock"
import { Message } from "element-ui"

export default {
name: 'login',
data() {
	 var validatePass1 = (rule, value, callback) => {
            if (/^(?=.*[0-9])(?=.*[0-9])[0-9]{8,12}$/g.test(value)) {
				this.mistake = 0
        		callback()
      		} else {
        		callback(new Error('请输入只包含数字的 8-12 位组合'))
				this.mistake = 1
      		}
    };
	 var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.form.password) {
                callback(new Error('两次输入密码不一致!'));
            } else if (/^(?=.*[a-z])|(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/g.test(value)) {
				this.mistake = 0
        		callback()
      		} else {
        		callback(new Error('请输入包含英文字母大小写和数字的6-10 位组合'))
				this.mistake = 1
      		}
    };
	return {
		user: {
			account: "13946473676",
			password: "123"
		},
		form: {
                username: '',
                password: '',
                checkPass: '',
            },
		psw: true,
		psw1:true,
		rules: {
			username: [
				{ required: true, message: '请输入用户名', trigger: 'blur' }
			],
			password: [
				{ required: true, message: '请输入密码', trigger: 'blur' }
			]
		},
		// 表单验证， 需要在el-form-item- 元素中增加prop属性
        RegisterRules: {
            checkPass: [{validator: validatePass2, trigger: 'blur'}],
            username: [
				{required: true, message: '账号不可为空', trigger: 'blur'},
				{ min: 8, max: 12,message: '长度应在 8 到 12 个数字',trigger: 'blur'}, 
				{ validator: validatePass1, trigger: 'blur'}
			],
            password: [
				{required: true, message: '密码不可为空', trigger: 'blur'},
				{ min: 6, max: 10,message: '长度应在 6 到 10 个字符',trigger: 'blur'}, 
				{ validator: validatePass2, trigger: 'blur' }
			]
        },
		mistake:0,
		modal : true,
		//对话框显示和隐藏
        dialogVisible: false,
        register: false
	}
},
methods: {
	checkShow() {
		this.register = !this.register
		this.modal = !this.modal
	},

	cancel(){
        this.register = !this.register
        this.modal = !this.modal
		this.form = {}
    },

	login() {
		this.$refs.userForm.validate(( valid ) => {
		    if(valid) {
				let flag = !1
				// 移除本地存储中的userInfo键值对
				window.localStorage.removeItem("userInfo")
				
				// this.$axios.get('http://127.0.0.1:4523/m1/3171021-0-default/loging',{   // 用户
				this.$axios.get('http://127.0.0.1:4523/m1/3171021-0-default/login',{  // 管理员
				// this.$axios.post('/CodeRepository/login', {
                    account: this.user.account,
                    password: this.user.password
                }).then(response => {
					console.log(typeof(response.data))
					if(response.data["account"] == this.user['account'] && response.data["password"] == this.user['password']) {
				    	flag = !0
				    	// 将用户信息存储到localStorage中，
				    	window.localStorage.setItem("userInfo", JSON.stringify(response.data))
						console.log(window.localStorage.getItem("userInfo"))
			    		if(response.data["status"] == 1) {
							this.$router.push('/admin').then(
								Message({ type: 'success', message: "管理员登录成功", showClose: true, duration: 3000 })
							).catch(err => (
							console.log(err)
						))} else {
							this.$router.push('/people').then(
								Message({ type: 'success', message: "用户登录成功", showClose: true, duration: 3000 })
							).catch(err => (
							console.log(err)
							))
						}
						// setTimeout('console.clear()', 300)
                    }else{
                        console.log(response.data);
                       Message({ type: 'warning', message: "账号密码错误，请重试!", showClose: true, duration: 3000 })
                    }
                }).catch( err=> {
					if(flag) Message({ type: 'warning', message: "账号密码错误，请重试!", showClose: true, duration: 3000 })
					console.log(err)
				})	
		    } else return false // 如果表单验证不通过（valid为false），则直接返回false
		})
	},

	handleClose: function () {
        console.log("Handle Close，空函数");
    },
	onSubmit(formName) {
    //为表单绑定验证功能
	if(this.mistake) {
		Message({ type: 'warning', message: "注册错误，请重试!", showClose: true, duration: 3000 })
		return false
	}
    this.$refs [formName].validate((valid) => {
		if (valid) {
                    this.$axios.post('/CodeRepository/signup', {
                        username: this.form.username,
                        password: this.form.password
                    })
                        .then(response => {
                            // console.log(response)
                            if(response.status === 200){
                                //使用vue-router 路由到指定页面，该方式称之为编程式导航
								console.log(response)
                                this.modal = !this.modal
                                this.register = !this.register
                                this.$message.success(this.form.username+"注册成功")
								this.form = {}
                            }else{
                                console.log(Boolean(response==1))
                                this.$message.error(this.form.username+"已被注册")
                            }
                        })
                } else {
                    this.dialogVisible = true;
                    return false;
                }
        });
    },
}
}
</script>
<style scoped>
i {
  margin-top: 8px;
  margin-right: 8px;
  font-size: 14px;
}
.wrapper {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: #fff;
	width: 100vw;
	height: 88vh;
}
.modal {
	width: 360px;
	/* height: 380px; */
	height: 255px;
	box-shadow: 0 0 10px 5px #ddd;
	padding: 50px;
	border-radius: 5px;
}
.title {
	width: 100%;
	text-align: center;
	line-height: 1.5;
	font-size: 30px;
	margin-bottom: 30px;
}
.btn-login {
	width: 48%;
}
.toast{
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 50px;
}
.register-box {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 50px auto;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
}
.register-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: #303133;
}
</style>