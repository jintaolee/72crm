(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6fbf"],{QhmF:function(e,t,i){"use strict";i.r(t);var s=i("6zBA"),n=i("ooHJ"),a=i("ExMk"),o={name:"examine-handle",components:{XhUserCell:i("8GhS").p},computed:{title:function(){return 1==this.status?"审批通过":0==this.status?"审批拒绝":2==this.status?"撤回审批":""},placeholder:function(){return 1==this.status?"请输入审批意见（选填）":0==this.status?"请输入审批意见（必填）":2==this.status?"请输入撤回理由（必填）":""}},watch:{show:{handler:function(e){this.showDialog=e},deep:!0,immediate:!0}},data:function(){return{loading:!1,showDialog:!1,handleType:1,selectUsers:[],content:""}},props:{show:{type:Boolean,default:!1},status:{type:[String,Number],default:1},id:[String,Number],detail:{type:Object,default:function(){return{}}},examineType:{type:String,default:""}},mounted:function(){},methods:{submitInfo:function(){0!=this.status&&2!=this.status||this.content?0==this.status||1==this.status?this.handlePassAndReject():2==this.status&&this.handleRevoke():this.$message.error(this.placeholder)},handleRevoke:function(){var e=this;this.loading=!0,this.getExamineRevokeRequest()({id:this.id,content:this.content}).then(function(t){e.loading=!1,e.$message.success(t.data),e.$emit("save"),e.hiddenView()}).catch(function(){e.loading=!1})},getExamineRevokeRequest:function(){return"crm_contract"==this.examineType?s.f:"crm_receivables"==this.examineType?n.f:"oa_examine"==this.examineType?a.f:void 0},handlePassAndReject:function(){var e=this;this.loading=!0;var t={id:this.id,status:this.status,content:this.content,flow_id:this.detail.flow_id};1==this.status&&0==this.detail.config&&(1==this.handleType?t.is_end=1:t.check_user_id=this.selectUsers[0].id),this.getExamineRequest()(t).then(function(t){e.loading=!1,e.$message.success(t.data),e.$emit("save",{type:e.status}),e.hiddenView()}).catch(function(){e.loading=!1})},getExamineRequest:function(){return"crm_contract"==this.examineType?s.a:"crm_receivables"==this.examineType?n.a:"oa_examine"==this.examineType?a.b:void 0},handleClick:function(e){"cancel"==e?this.hiddenView():"confirm"==e&&this.submitInfo()},selectUserFocus:function(){this.handleType=2},selectExamineUser:function(e){this.selectUsers=e.value},hiddenView:function(){this.$emit("close")}}},l=(i("rzp2"),i("KHd+")),c=Object(l.a)(o,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{title:e.title,width:"400px","append-to-body":!0,visible:e.showDialog},on:{close:e.hiddenView,"update:visible":function(t){e.showDialog=t}}},[1==e.status&&0==e.detail.config?i("div",{staticClass:"handle-type"},[i("flexbox",{staticClass:"handle-item"},[i("el-radio",{attrs:{label:1},model:{value:e.handleType,callback:function(t){e.handleType=t},expression:"handleType"}},[i("span")]),e._v(" "),i("div",{staticStyle:{"font-size":"12px"},nativeOn:{click:function(t){e.handleType=1}}},[e._v("审核结束")])],1),e._v(" "),i("flexbox",{staticClass:"handle-item",attrs:{id:"selectUser"}},[i("el-radio",{attrs:{label:2},model:{value:e.handleType,callback:function(t){e.handleType=t},expression:"handleType"}},[i("span")]),e._v(" "),i("xh-user-cell",{staticClass:"select-user",attrs:{placeholder:"选择下一审批人"},on:{focus:e.selectUserFocus,"value-change":e.selectExamineUser}})],1)],1):e._e(),e._v(" "),1==e.status&&0==e.detail.config?i("div",{staticClass:"title"},[e._v("意见")]):e._e(),e._v(" "),i("el-input",{attrs:{type:"textarea",resize:"none",rows:5,placeholder:e.placeholder},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.handleClick("cancel")}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleClick("confirm")}}},[e._v("确 定")])],1)],1)},[],!1,null,"46cdfebe",null);c.options.__file="ExamineHandle.vue";t.default=c.exports},hW97:function(e,t,i){},rzp2:function(e,t,i){"use strict";var s=i("hW97");i.n(s).a}}]);