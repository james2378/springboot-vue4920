<template>
  <div :style='{"width":"100%","padding":"40px 7%","margin":"0 auto","position":"relative","background":"none"}'>
    <div class="section-title" :style='{"padding":"50px 0 0","margin":"0px 0","color":"#000","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230510/6e792688c5fc46fc8bd7b19893e0186f.png) no-repeat center top","fontSize":"30px","lineHeight":"54px","fontWeight":"bold"}'>{{detail.chaptertitle}}</div>
    <div class="section-content">
      <div class="content-title">{{detail.title}}</div>
      <div class="content-sub-title">发布时间：{{detail.addtime}}</div>
      <el-divider></el-divider>
      <div class="content-detail" v-html="detail.content"></div>
      <el-divider></el-divider>
	  <div style="display: flex;align-items: center;justify-content: center;width: 50%;position: fixed;bottom: 2%;left: 25%;">
		  <el-button type="primary" @click="prepClick">上一章</el-button>
		  <el-button type="warning" @click="catalogueClick">目录</el-button>
		  <el-button type="primary" @click="nextClick">下一章</el-button>
	  </div>
    </div>
  </div>
</template>

<script>
  export default {
    //数据集合
    data() {
      return {
        detail: {},
		id:'',
		chapterList:[],
      }
    },
    created() {
      this.id = this.$route.query.id
      this.getDetail(1)
    },
	methods:{
		getDetail(type){
			this.$http.get('chapterxiaoshuodangan/detail/' + this.id, {}).then(res => {
				if (res.data.code == 0) {
					this.detail = res.data.data;
					window.scrollTo( 0, 100 )
					if(type){
						this.getChapterList()
					}
				}
			});
		},
		getChapterList(){
			this.$http.get('chapterxiaoshuodangan/list', {
				params: {
					refid: this.detail.refid,
                    limit: 1000,
				}
			}).then(res => {
				if (res.data.code == 0 && res.data.data.list.length > 0) {
					this.chapterList = res.data.data.list
				}
			});
		},
		prepClick(){
			for(let x in this.chapterList){
				if(this.chapterList[x].id==this.id){
					if(x==0){
						this.$message.warning('没有上一章了!')
						return false
					}
					this.id = this.chapterList[Number(x) - 1].id
					this.getDetail()
					break;
				}
			}
		},
		catalogueClick(){
			this.$http.get('xiaoshuodangan/detail/' + this.detail.refid, {}).then(res => {
				if (res.data.code == 0) {
					this.$router.push({path: '/index/xiaoshuodanganDetail', query: {detailObj: JSON.stringify(res.data.data)}});
				}
			});
		},
		nextClick(){
			for(let x in this.chapterList){
				if(this.chapterList[x].id==this.id){
					if(x==this.chapterList.length - 1){
						this.$message.warning('已经是最后一章了!')
						return false
					}
					if(this.chapterList[Number(x) + 1].vipread=='是' && localStorage.getItem('vip')!='是'){
						this.$message.warning('下一章为vip章节，请购买会员后阅读!')
						return false
					}
					this.id = this.chapterList[Number(x) + 1].id
					this.getDetail()
					break;
				}
			}
		},
	}
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .section {
    width: 900px;
    margin: 0 auto;
  }

  .section-content {
      margin-top: 30px;
  }
  .content-title {
      text-align: center;
      font-size: 22px;
      font-weight: bold;
  }
  .content-sub-title {
      text-align: center;
      margin-top: 20px;
      color: #888888;
      font-size: 14px;
  }
</style>
