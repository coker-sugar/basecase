<template>
    <div class="login-container">
        <el-form
            ref="loginForm"
            :model="loginForm"
            :rules="loginRules"
            class="login-form"
            auto-complete="on"
            label-position="left"
        >
            <div class="title-container">
                <h3 class="title">Login Form</h3>
            </div>

            <el-form-item prop="username">
                <span class="svg-container">
                    <svg-icon icon-class="user" />
                </span>
                <el-input
                    ref="username"
                    v-model="loginForm.username"
                    placeholder="Username"
                    name="username"
                    type="text"
                    tabindex="1"
                    auto-complete="on"
                />
            </el-form-item>

            <el-form-item prop="password">
                <span class="svg-container">
                    <svg-icon icon-class="password" />
                </span>
                <el-input
                    :key="passwordType"
                    ref="password"
                    v-model="loginForm.password"
                    :type="passwordType"
                    placeholder="Password"
                    name="password"
                    tabindex="2"
                    auto-complete="on"
                    @keyup.enter.native="handleLogin"
                />
                <span class="show-pwd" @click="showPwd">
                    <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
                </span>
            </el-form-item>

            <el-button
                :loading="loading"
                type="primary"
                style="width:100%;margin-bottom:30px;"
                @click.native.prevent="handleLogin"
            >Login</el-button>

            <div class="tips">
                <span>分别登录以下账号查看侧边栏菜单</span>
            </div>
            <div class="tips">
                <span style="margin-right:20px;">username: admin</span>
                <span>password: any</span>
            </div>
            <div class="tips">
                <span style="margin-right:20px;">username: editor</span>
                <span>password: any</span>
            </div>
        </el-form>
    </div>
</template>

<script>

export default {
    name: "Login",
    data() {
        return {
            loginForm: {
                username: "admin",
                password: "123",
            },
            loginRules: {
                username: [
                    {
                        required: true,
                        message: "账号不能为空",
                        trigger: "blur",
                    },
                    {
                        pattern: /^\w+$/,
                        message: "请不要输入字母数字下划线以外的字符",
                    },
                    {
                        min: 2,
                        max: 12,
                        message: "长度在 2 到 12 个字符",
                    },
                ],
                password: [
                    {
                        required: true,
                        message: "密码不能为空",
                        trigger: "blur",
                    },
                    {
                        pattern: /^\w+$/,
                        message: "请不要输入字母数字下划线以外的字符",
                    },
                    {
                        min: 1,
                        max: 12,
                        message: "长度在 1 到 12 个字符",
                    },
                ],
            },
            loading: false,
            passwordType: "password",
            redirect: undefined,
        };
    },
    // 路由发生变化时，动态地获取到重定向的路径
    watch: {
        // 实时监测$route对象的变化。
        $route: {
            // 当route发生变化,执行handler函数
            handler: function (route) {
                // 更新更新组件的`redirect`属性
                this.redirect = route.query && route.query.redirect;
            },
            // 组件初始化时立即执行一次handler函数
            immediate: true,
        },
    },
    methods: {
        showPwd() {
            // 当前密码输入框的类型是隐藏密码
            if (this.passwordType === "password") {
                // 切换为明文显示密码
                this.passwordType = "";
            } else {
                this.passwordType = "password";
            }
            // 确保在DOM更新后再聚焦密码输入框
            this.$nextTick(() => {
                // 聚焦密码输入框
                this.$refs.password.focus();
            });
        },
        handleLogin() {
            // 对表单进行验证 参数`valid`表示表单验证的结果，为true表示验证通过
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    // 正在加载中
                    this.loading = true;
                    this.$store
                        .dispatch("user/login", this.loginForm)
                        .then(() => {
                            this.$router.push({ path: "/" });
                            this.loading = false;
                        })
                        .catch(() => {
                            this.loading = false;
                        });
                } else {
                    console.log("error submit!!");
                    // 阻止表单的默认提交行为
                    return false;
                }
            });
        },
    },
};
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input {
        color: $cursor;
    }
}

/* reset element-ui css */
.login-container {
    .el-input {
        display: inline-block;
        height: 47px;
        width: 85%;

        input {
            background: transparent;
            border: 0px;
            -webkit-appearance: none;
            border-radius: 0px;
            padding: 12px 5px 12px 15px;
            color: $light_gray;
            height: 47px;
            caret-color: $cursor;

            &:-webkit-autofill {
                box-shadow: 0 0 0px 1000px $bg inset !important;
                -webkit-text-fill-color: $cursor !important;
            }
        }
    }

    .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: #454545;
    }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
    min-height: 100%;
    width: 100%;
    background-color: $bg;
    overflow: hidden;

    .login-form {
        position: relative;
        width: 520px;
        max-width: 100%;
        padding: 160px 35px 0;
        margin: 0 auto;
        overflow: hidden;
    }

    .tips {
        font-size: 14px;
        color: #fff;
        margin-bottom: 10px;

        span {
            &:first-of-type {
                margin-right: 16px;
            }
        }
    }

    .svg-container {
        padding: 6px 5px 6px 15px;
        color: $dark_gray;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
    }

    .title-container {
        position: relative;

        .title {
            font-size: 26px;
            color: $light_gray;
            margin: 0px auto 40px auto;
            text-align: center;
            font-weight: bold;
        }
    }

    .show-pwd {
        position: absolute;
        right: 10px;
        top: 7px;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select: none;
    }
}
</style>
