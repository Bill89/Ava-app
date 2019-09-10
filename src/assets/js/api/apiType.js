export const api = {
  register: 'interface/mycontroller/register', // 注册
  login: 'interface/mycontroller/login', // 登录
  userInfo: 'interface/mycontroller/userInfo' // 用户信息
}

// 提交修改类的api需要添加到blockApi
// 请求时需阻塞
export const blockApi = ['AT003', 'AT005', 'AT006', 'NF116']

// 请求失败时需要公共处理的错误提示
export const errApiIgnore = ['NF700', 'NF147', 'NF113', 'NF735', 'I020']
