<template>
  <div id="app">

    <router-view/>


    <div slot="content" class="login">
      <h1 class="tc">登录</h1>

      <div class="form-box">
        <el-form :model="loginForm" :rules="rules" ref="ruleForm"  class="login-form">
          <el-form-item  prop="mobile">
            <el-input v-model="loginForm.mobile" placeholder="请输入手机号码"></el-input>
          </el-form-item>
          <el-form-item  prop="password">
            <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <!-- <el-form-item  prop="code" class="code-item cf">
               <el-input v-model="loginForm.code" class="code-inp fl" placeholder="请输入验证码"></el-input>
               <div class="yzm-pic fr">
                   ABCD
                   <img src="" alt="">
               </div>
           </el-form-item>-->

          <el-form-item  class="forget-pwd-item cf">
                        <span class="fl">
                            <el-checkbox label="下次自动登录" name="type" v-model="loginForm.autoLogin"></el-checkbox>
                        </span>

            <a href="/" class="forget-pwd fr">
              忘记密码?
            </a>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" class="login-btn" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>

        <div class="reg-item tc">
          还没有注册账号,<a class="reg-link" href="">立即注册</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Input,Radio,Button,Checkbox,Form,FormItem,Message} from 'element-ui';

  Vue.use(Input);
  Vue.use(Radio);
  Vue.use(Checkbox);
  Vue.use(Button);
  Vue.use(Form);
  Vue.use(FormItem);
  Vue.prototype.$message = Message;

export default {
  name: 'Login',
  data(){
    return{
      loginForm: {
        mobile: '',
        password: '',
        code: '',
        autoLogin: false
      },
      rules: {
        mobile: [
          { required: true, trigger: 'blur',validator:(rule, value, callback)=>{
            if(value.trim() === ""){
              callback(new Error('请输入手机号码'));
            }else if (!/^((13[0-9])|(14[5,7,9])|(15[^4])|(18[0-9])|(17[0,1,3,5,6,7,8]))\d{8}$/.test(value)){
              callback(new Error('手机号码格式错误'));
            } else {
              callback();
            }
          }},
        ],
        password: [
          { required: true, trigger: 'blur' ,validator:(rule, value, callback)=>{
            if(value.trim() === ""){
              callback(new Error('请输入密码'));
            }else if (value.length < 6){
              callback(new Error('密码输入有误'));
            } else {
              callback();
            }
          }}
        ],
        /*code: [
            { required: true, message: '请输入验证码', trigger: 'blur' }
        ]*/
      }
    }
  },
  components:{
  },
  created(){
  },
  methods: {
    submitForm(formName) {
      alert(2)
      /*let _this = this;
      this.$refs[formName].validate((valid) => {
          if (valid) {
              _this.apiLogin();
          } else {
              console.log('error submit!!');
              return false;
          }
      });*/
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
