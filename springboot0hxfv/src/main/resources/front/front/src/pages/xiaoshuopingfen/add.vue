<template>
<div :style='{"width":"100%","padding":"40px 7%","margin":"0 auto","position":"relative","background":"none"}'>
    <el-form
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="150px"
    >
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","alignItems":"center","background":"linear-gradient(90deg, rgba(238,177,238,1) 0%, rgba(165,228,222,1) 30%, rgba(165,228,222,1) 100%)","display":"flex"}' label="评分编号" prop="pingfenbianhao">
              <el-input v-model="ruleForm.pingfenbianhao" placeholder="评分编号" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","alignItems":"center","background":"linear-gradient(90deg, rgba(238,177,238,1) 0%, rgba(165,228,222,1) 30%, rgba(165,228,222,1) 100%)","display":"flex"}' label="小说名称" prop="xiaoshuomingcheng">
            <el-input v-model="ruleForm.xiaoshuomingcheng" 
                placeholder="小说名称" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","alignItems":"center","background":"linear-gradient(90deg, rgba(238,177,238,1) 0%, rgba(165,228,222,1) 30%, rgba(165,228,222,1) 100%)","display":"flex"}' label="小说分类" prop="xiaoshuofenlei">
            <el-input v-model="ruleForm.xiaoshuofenlei" 
                placeholder="小说分类" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","alignItems":"center","background":"linear-gradient(90deg, rgba(238,177,238,1) 0%, rgba(165,228,222,1) 30%, rgba(165,228,222,1) 100%)","display":"flex"}' label="章节" prop="zhangjie">
            <el-input v-model="ruleForm.zhangjie" 
                placeholder="章节" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","alignItems":"center","background":"linear-gradient(90deg, rgba(238,177,238,1) 0%, rgba(165,228,222,1) 30%, rgba(165,228,222,1) 100%)","display":"flex"}'  label="评分" prop="pingfen">
            <el-select v-model="ruleForm.pingfen" placeholder="请选择评分"  >
              <el-option
                  v-for="(item,index) in pingfenOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","alignItems":"center","background":"linear-gradient(90deg, rgba(238,177,238,1) 0%, rgba(165,228,222,1) 30%, rgba(165,228,222,1) 100%)","display":"flex"}' label="评分时间" prop="pingfenshijian" >
              <el-date-picker
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  v-model="ruleForm.pingfenshijian" 
                  type="date"
                  placeholder="评分时间">
              </el-date-picker> 
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","alignItems":"center","background":"linear-gradient(90deg, rgba(238,177,238,1) 0%, rgba(165,228,222,1) 30%, rgba(165,228,222,1) 100%)","display":"flex"}' label="会员账号" prop="huiyuanzhanghao">
            <el-input v-model="ruleForm.huiyuanzhanghao" 
                placeholder="会员账号" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","alignItems":"center","background":"linear-gradient(90deg, rgba(238,177,238,1) 0%, rgba(165,228,222,1) 30%, rgba(165,228,222,1) 100%)","display":"flex"}' label="会员姓名" prop="huiyuanxingming">
            <el-input v-model="ruleForm.huiyuanxingming" 
                placeholder="会员姓名" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px 0","alignItems":"center","background":"linear-gradient(90deg, rgba(238,177,238,1) 0%, rgba(165,228,222,1) 30%, rgba(165,228,222,1) 100%)","display":"flex"}' label="评语" prop="pingyu">
            <el-input
              type="textarea"
              :rows="8"
              placeholder="评语"
              v-model="ruleForm.pingyu">
            </el-input>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"30px 0 20px 140px"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"0 10px","color":"#fff","minWidth":"140px","outline":"none","borderRadius":"10px","background":"linear-gradient(90deg, rgba(32,173,158,1) 0%, rgba(138,228,219,1) 50%, rgba(32,173,158,1) 100%),#20ad9e","width":"auto","lineHeight":"44px","fontSize":"14px","height":"44px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"0px solid rgba(64, 158, 255, 1)","cursor":"pointer","padding":"0 15px","margin":"0 10px","color":"#fff","minWidth":"140px","outline":"none","borderRadius":"10px","background":"linear-gradient(90deg, rgba(153,153,153,1) 0%, rgba(204,204,204,1) 50%, rgba(153,153,153,1) 100%),#999","width":"auto","lineHeight":"44px","fontSize":"14px","height":"44px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        id: '',
        baseUrl: '',
        ro:{
            pingfenbianhao : false,
            xiaoshuomingcheng : false,
            xiaoshuofenlei : false,
            zhangjie : false,
            pingfen : false,
            pingyu : false,
            pingfenshijian : false,
            huiyuanzhanghao : false,
            huiyuanxingming : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          pingfenbianhao: this.getUUID(),
          xiaoshuomingcheng: '',
          xiaoshuofenlei: '',
          zhangjie: '',
          pingfen: '',
          pingyu: '',
          pingfenshijian: '',
          huiyuanzhanghao: '',
          huiyuanxingming: '',
        },
        pingfenOptions: [],


        rules: {
          pingfenbianhao: [
          ],
          xiaoshuomingcheng: [
          ],
          xiaoshuofenlei: [
          ],
          zhangjie: [
          ],
          pingfen: [
          ],
          pingyu: [
          ],
          pingfenshijian: [
          ],
          huiyuanzhanghao: [
          ],
          huiyuanxingming: [
          ],
        },
      };
    },
    computed: {



    },
    components: {
    },
    created() {
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
      this.ruleForm.pingfenshijian = this.getCurDate()
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='pingfenbianhao'){
              this.ruleForm.pingfenbianhao = obj[o];
              this.ro.pingfenbianhao = true;
              continue;
            }
            if(o=='xiaoshuomingcheng'){
              this.ruleForm.xiaoshuomingcheng = obj[o];
              this.ro.xiaoshuomingcheng = true;
              continue;
            }
            if(o=='xiaoshuofenlei'){
              this.ruleForm.xiaoshuofenlei = obj[o];
              this.ro.xiaoshuofenlei = true;
              continue;
            }
            if(o=='zhangjie'){
              this.ruleForm.zhangjie = obj[o];
              this.ro.zhangjie = true;
              continue;
            }
            if(o=='pingfen'){
              this.ruleForm.pingfen = obj[o];
              this.ro.pingfen = true;
              continue;
            }
            if(o=='pingyu'){
              this.ruleForm.pingyu = obj[o];
              this.ro.pingyu = true;
              continue;
            }
            if(o=='pingfenshijian'){
              this.ruleForm.pingfenshijian = obj[o];
              this.ro.pingfenshijian = true;
              continue;
            }
            if(o=='huiyuanzhanghao'){
              this.ruleForm.huiyuanzhanghao = obj[o];
              this.ro.huiyuanzhanghao = true;
              continue;
            }
            if(o=='huiyuanxingming'){
              this.ruleForm.huiyuanxingming = obj[o];
              this.ro.huiyuanxingming = true;
              continue;
            }
          }
        }
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
            if((json.huiyuanzhanghao!=''&&json.huiyuanzhanghao) || json.huiyuanzhanghao==0){
                this.ruleForm.huiyuanzhanghao = json.huiyuanzhanghao
            }
            if((json.huiyuanxingming!=''&&json.huiyuanxingming) || json.huiyuanxingming==0){
                this.ruleForm.huiyuanxingming = json.huiyuanxingming
            }
          }
        });
        this.pingfenOptions = "1,2,3,4,5,6,7,8,9,10".split(',')
      },

    // 多级联动参数
      // 多级联动参数
      info(id) {
        this.$http.get('xiaoshuopingfen/detail/${id}', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

        //更新跨表属性
        var crossuserid;
        var crossrefid;
        var crossoptnum;
        this.$refs["ruleForm"].validate(valid => {
          if(valid) {
            if(this.type=='cross'){
                 var statusColumnName = localStorage.getItem('statusColumnName');
                 var statusColumnValue = localStorage.getItem('statusColumnValue');
                 if(statusColumnName && statusColumnName!='') {
                     var obj = JSON.parse(localStorage.getItem('crossObj'));
                     if(!statusColumnName.startsWith("[")) {
                         for (var o in obj){
                             if(o==statusColumnName){
                                 obj[o] = statusColumnValue;
                             }
                         }
                         var table = localStorage.getItem('crossTable');
                         this.$http.post(table+'/update', obj).then(res => {});
                     } else {
                            crossuserid=Number(localStorage.getItem('userid'));
                            crossrefid=obj['id'];
                            crossoptnum=localStorage.getItem('statusColumnName');
                            crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                     }
                 }
            }
            if(crossrefid && crossuserid) {
                 this.ruleForm.crossuserid=crossuserid;
                 this.ruleForm.crossrefid=crossrefid;
                 var params = {
                     page: 1,
                     limit: 10,
                     crossuserid:crossuserid,
                     crossrefid:crossrefid,
                 }
                 this.$http.get('xiaoshuopingfen/list', {
                  params: params
                 }).then(res => {
                     if(res.data.data.total>=crossoptnum) {
                         this.$message({
                          message: localStorage.getItem('tips'),
                          type: 'success',
                          duration: 1500,
                         });
                          return false;
                     } else {
                         // 跨表计算


                          this.$http.post('xiaoshuopingfen/add', this.ruleForm).then(res => {
                              if (res.data.code == 0) {
                                  this.$message({
                                      message: '操作成功',
                                      type: 'success',
                                      duration: 1500,
                                      onClose: () => {
                                          this.$router.go(-1);
                                      }
                                  });
                              } else {
                                  this.$message({
                                      message: res.data.msg,
                                      type: 'error',
                                      duration: 1500
                                  });
                              }
                          });
                     }
                 });
             } else {


                  this.$http.post('xiaoshuopingfen/add', this.ruleForm).then(res => {
                     if (res.data.code == 0) {
                          this.$message({
                              message: '操作成功',
                              type: 'success',
                              duration: 1500,
                              onClose: () => {
                                  this.$router.go(-1);
                              }
                          });
                      } else {
                          this.$message({
                              message: res.data.msg,
                              type: 'error',
                              duration: 1500
                          });
                      }
                  });
             }
          }
        });
      },
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
      // 返回
      back() {
        this.$router.go(-1);
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 15px;
	  color: #992298;
	  font-weight: 500;
	  width: 150px;
	  font-size: 15px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 150px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 0;
	  border-radius: 0;
	  padding: 0 10px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  color: #333;
	  background: #fff;
	  width: 360px;
	  font-size: 14px;
	  line-height: 32px;
	  height: 32px;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border: 0;
	  border-radius: 0;
	  padding: 0 30px 0 10px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  color: #333;
	  background: #fff;
	  width: 320px;
	  font-size: 14px;
	  line-height: 32px;
	  height: 32px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border: 0;
	  border-radius: 0;
	  padding: 0 10px 0 30px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  color: #333;
	  background: #fff;
	  width: 400px;
	  font-size: 14px;
	  line-height: 32px;
	  height: 32px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  border: 1px dashed #992298;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #992298;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  border: 1px dashed #992298;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #992298;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  border: 1px dashed #992298;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #992298;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 0;
	  border-radius: 0;
	  padding: 12px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  color: #333;
	  width: 400px;
	  font-size: 14px;
	  height: 120px;
	}
</style>
