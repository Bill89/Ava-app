<template>
  <div>
    <header class="bcblue tc f18 h44 lh44 white">注册</header>
    <van-cell-group>
      <van-field
        v-model.trim="userInfo.registrationCode"
        required
        clearable
        label="注册码"
        right-icon="question-o"
        placeholder="2-8位字符，由字母、数字组成"
        :error-message="userInfo.registrationCodeMsg"
        @click-right-icon="$dialog({ message: '注册码是您进入Ava平台的唯一凭证，请您先获取注册码' })"
      />
      <van-field
        v-model.trim="userInfo.account"
        required
        clearable
        label="用户名"
        :error-message="userInfo.accountMsg"
        placeholder="4-16位字符，由字母、数字组成"
      />
      <van-field
        v-model.trim="userInfo.password"
        type="password"
        label="密 码"
        placeholder="6-20位字符，区分大小写"
        required
        clearable
        :error-message="userInfo.passwordMsg"
      />
      <van-field
        v-model.trim="userInfo.passwordVrify"
        type="password"
        label="确认密码"
        placeholder="6-20位字符，区分大小写"
        required
        clearable
        :error-message="userInfo.passwordVrifyMsg"
      />
    </van-cell-group>
    <div class="p16">
      <van-button type="primary" size="large" @click="onRegister">注册</van-button>
    </div>
    <div class="p16">
      <van-button plain type="primary" size="large" @click="go('Login')">已有账号登录》</van-button>
    </div>
  </div>
</template>
<script>
import validate from '@/assets/js/tool/validate'
export default {
  name: 'Register',
  data() {
    return {
      userInfo: {
        registrationCode: '',
        registrationCodeMsg: '',
        account: '',
        accountMsg: '',
        password: '',
        passwordMsg: '',
        passwordVrify: '',
        passwordVrifyMsg: ''
      }
    }
  },
  methods: {
    // 注册
    onRegister() {
      const user = this.userInfo
      const codeMsg = validate.validateField(user.registrationCode, 2)
      const accountMsg = validate.validateField(user.account, 4)
      const passwordMsg = validate.validateField(user.password, 6)
      const passwordVrifyMsg = validate.validateField(user.passwordVrify, 6)

      user.registrationCodeMsg = codeMsg && `注册码${codeMsg}`
      user.accountMsg = accountMsg && `用户名${accountMsg}`
      user.passwordMsg = passwordMsg && `密码${passwordMsg}`
      user.passwordVrifyMsg = passwordVrifyMsg && `确认密码${passwordVrifyMsg}`
      if (user.password !== user.passwordVrify) {
        user.passwordMsg = '两次密码输入不一致'
        user.passwordVrifyMsg = `两次密码输入不一致`
        return
      }
      if (codeMsg || accountMsg || passwordMsg || passwordVrifyMsg) return

      this.http.post(this.api.register, user).then(res => {
        console.log(res)
        // 保存用户信息后登录
        this.router.replace('Index')
      })
    },
    go(pageName) {
      this.router.replace(pageName)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
