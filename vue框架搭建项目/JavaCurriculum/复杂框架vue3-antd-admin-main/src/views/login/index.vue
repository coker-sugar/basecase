<template>
  <div class="login-box">
    <div class="login-logo">
      <!-- <svg-icon name="logo" :size="45" /> -->
      <!-- <img src="~@/assets/images/logo.png" width="45" /> -->
      <h1 class="mb-0 ml-2 text-3xl font-bold">云借阅-图书管理系统</h1>
    </div>
    <!-- 登录框架 -->
    <!-- horizontal：表单布局为水平排列
         @submit.prevent，提交时执行hadleSubmit方法（适用于表单项较少，文本长度不一的表单），.prevent阻止表单默认的提交事件 -->
    <a-form
      class="outform"
      layout="horizontal"
      :model="state.formInline"
      @submit.prevent="handleSubmit"
    >
      <a-form-item>
        <h1>账户登录</h1>
      </a-form-item>
      <a-form-item>
        <a-input v-model:value="state.formInline.username" size="large" placeholder="rootadmin">
          <!-- 左侧头像 -->
          <template #prefix><user-outlined type="user" /></template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-model:value="state.formInline.password"
          size="large"
          type="password"
          placeholder="123456"
          autocomplete="new-password"
        >
          <template #prefix><lock-outlined type="user" /></template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-model:value="state.formInline.verifyCode"
          placeholder="验证码"
          :maxlength="4"
          size="large"
        >
          <template #prefix><SafetyOutlined /></template>
          <template #suffix>
            <img
              :src="state.captcha"
              class="absolute right-0 h-full cursor-pointer"
              @click="setCaptcha"
            />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button
          style="background-color: #c81623"
          type="primary"
          html-type="submit"
          size="large"
          :loading="state.loading"
          block
        >
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';
  import { UserOutlined, LockOutlined, SafetyOutlined } from '@ant-design/icons-vue';
  import { useRoute, useRouter } from 'vue-router';
  import { message, Modal } from 'ant-design-vue';
  import { useUserStore } from '@/store/modules/user';
  import { getImageCaptcha } from '@/api/login';
  import { to } from '@/utils/awaitTo';

  const state = reactive({
    loading: false,
    captcha: '',
    formInline: {
      username: '',
      password: '',
      verifyCode: '',
      captchaId: '',
    },
  });

  const route = useRoute();
  const router = useRouter();

  const userStore = useUserStore();

  const setCaptcha = async () => {
    const { id, img } = await getImageCaptcha({ width: 100, height: 50 });
    state.captcha = img;
    state.formInline.captchaId = id;
  };
  setCaptcha();

  const handleSubmit = async () => {
    const { username, password, verifyCode } = state.formInline;
    if (username.trim() == '' || password.trim() == '') {
      return message.warning('用户名或密码不能为空！');
    }
    if (!verifyCode) {
      return message.warning('请输入验证码！');
    }
    message.loading('登录中...', 0);
    state.loading = true;
    console.log(state.formInline);
    // params.password = md5(password)

    const [err] = await to(userStore.login(state.formInline));
    if (err) {
      Modal.error({
        title: () => '提示',
        content: () => err.message,
      });
      setCaptcha();
    } else {
      message.success('登录成功！');
      setTimeout(() => router.replace((route.query.redirect as string) ?? '/'));
    }
    state.loading = false;
    message.destroy();
  };
</script>

<style lang="less" scoped>
  .login-box {
    display: flex;
    width: 100vw;
    height: 100vh;
    padding-top: 170px;
    background: url('~@/assets/login.svg');
    background-color: #273349;
    background-size: 100%;
    flex-direction: column;
    align-items: center;

    .login-logo {
      display: flex;
      margin-bottom: 30px;
      align-items: center;

      .svg-icon {
        font-size: 48px;
      }

      h1 {
        font-family: '宋体';
        color: white;
      }
    }

    :deep(.ant-form) {
      width: 430px;
      height: 357px;
      // padding-bottom: 30px;
      background-color: #fff;

      .ant-col {
        width: 100%;
      }

      .ant-form-item {
        padding-left: 6%;
        width: 90%;
        text-align: center;

        &:nth-child(1) {
          padding-top: 20px;
        }

        h1 {
          font-size: 26px;
          color: #c81623;
          font-weight: bold;
          // margin: 0 auto;
          // border: 1px solid #cfcdcd;
        }

        .a-input {
          border-radius: 20%;
        }
      }

      .ant-form-item-label {
        padding-right: 6px;
      }
    }
  }
</style>
