(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Register"],{"96c3":function(e,r,s){"use strict";r["a"]={validateField:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e+="",e?e.length<r?"长度不符":/[\u4E00-\u9FA5]/.test(e)?"格式错误":"":"不能为空"}}},fd1c:function(e,r,s){"use strict";s.r(r);var a=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",[s("header",{staticClass:"bcblue tc f18 h44 lh44 white"},[e._v("注册")]),s("van-cell-group",[s("van-field",{attrs:{required:"",clearable:"",label:"注册码","right-icon":"question-o",placeholder:"2-8位字符，由字母、数字组成","error-message":e.userInfo.registrationCodeMsg},on:{"click-right-icon":function(r){return e.$dialog({message:"注册码是您进入Ava平台的唯一凭证，请您先获取注册码"})}},model:{value:e.userInfo.registrationCode,callback:function(r){e.$set(e.userInfo,"registrationCode","string"===typeof r?r.trim():r)},expression:"userInfo.registrationCode"}}),s("van-field",{attrs:{required:"",clearable:"",label:"用户名","error-message":e.userInfo.accountMsg,placeholder:"4-16位字符，由字母、数字组成"},model:{value:e.userInfo.account,callback:function(r){e.$set(e.userInfo,"account","string"===typeof r?r.trim():r)},expression:"userInfo.account"}}),s("van-field",{attrs:{type:"password",label:"密 码",placeholder:"6-20位字符，区分大小写",required:"",clearable:"","error-message":e.userInfo.passwordMsg},model:{value:e.userInfo.password,callback:function(r){e.$set(e.userInfo,"password","string"===typeof r?r.trim():r)},expression:"userInfo.password"}}),s("van-field",{attrs:{type:"password",label:"确认密码",placeholder:"6-20位字符，区分大小写",required:"",clearable:"","error-message":e.userInfo.passwordVrifyMsg},model:{value:e.userInfo.passwordVrify,callback:function(r){e.$set(e.userInfo,"passwordVrify","string"===typeof r?r.trim():r)},expression:"userInfo.passwordVrify"}})],1),s("div",{staticClass:"p16"},[s("van-button",{attrs:{type:"primary",size:"large"},on:{click:e.onRegister}},[e._v("注册")])],1),s("div",{staticClass:"p16"},[s("van-button",{attrs:{plain:"",type:"primary",size:"large"},on:{click:function(r){return e.go("Login")}}},[e._v("已有账号登录》")])],1)],1)},o=[],t=(s("a481"),s("96c3")),n={name:"Register",data:function(){return{userInfo:{registrationCode:"",registrationCodeMsg:"",account:"",accountMsg:"",password:"",passwordMsg:"",passwordVrify:"",passwordVrifyMsg:""}}},methods:{onRegister:function(){var e=this,r=this.userInfo,s=t["a"].validateField(r.registrationCode,2),a=t["a"].validateField(r.account,4),o=t["a"].validateField(r.password,6),n=t["a"].validateField(r.passwordVrify,6);if(r.registrationCodeMsg=s&&"注册码".concat(s),r.accountMsg=a&&"用户名".concat(a),r.passwordMsg=o&&"密码".concat(o),r.passwordVrifyMsg=n&&"确认密码".concat(n),r.password!==r.passwordVrify)return r.passwordMsg="两次密码输入不一致",void(r.passwordVrifyMsg="两次密码输入不一致");s||a||o||n||this.http.post(this.api.register,r).then(function(r){console.log(r),e.router.replace("Index")})},go:function(e){this.router.replace(e)}}},i=n,c=s("2877"),l=Object(c["a"])(i,a,o,!1,null,"76dc7a76",null);r["default"]=l.exports}}]);