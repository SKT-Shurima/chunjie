(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{319:function(E,A,T){E.exports=T(320)},320:function(E,A,T){"use strict";T.r(A);T(321),T(311),T(312),T(331),T(334),T(313),T(335);var n=T(0),_=T.n(n),e=T(5),R=T.n(e),N=T(301),S=T.n(N),O=T(12),I=T(302),t=T.n(I),P=T(303),L=T.n(P),C=T(98),a=T.n(C),o=(T(156),Object(n.lazy)(()=>Promise.all([T.e(0),T.e(3)]).then(T.bind(null,728))));if(Object(O.f)({enforceActions:"always"}),t.a.attach(document.body),window.APP_CREATOR_NAMESPACE="",window.APP_CREATOR_APP_ID="",window.APP_CREATOR_SHOW_NAME="",window.APP_LANG="zh_CN",window.location.hash.includes("appId=")){var s=L.a.parse(window.location.hash.split("?")[1]);window.APP_CREATOR_NAMESPACE=s.namespace,window.APP_CREATOR_APP_ID=s.appId;var r=window.parent.localStorage.getItem("appTitle");window.APP_CREATOR_SHOW_NAME=r?r.replace(/^supOS-*/g,""):""}var M={en_US:T(363),zh_CN:T(364)},i={en_US:"en",zh_CN:"zh-cn"};class c extends n.Component{constructor(E){super(E),this.state={initDone:!1}}componentDidMount(){var E=window.APP_LANG;S.a.init({currentLocale:E,locales:M}).then(()=>{a.a.locale(i[E]),this.setState({initDone:!0})})}render(){return this.state.initDone&&_.a.createElement(n.Suspense,{fallback:""},_.a.createElement(o,null))}}R.a.render(_.a.createElement(c,null),document.getElementById("supngin-root"))},342:function(E,A){},351:function(E,A){},362:function(E,A,T){var n={"./es-us":227,"./es-us.js":227,"./zh-cn":156,"./zh-cn.js":156};function _(E){var A=e(E);return T(A)}function e(E){if(!T.o(n,E)){var A=new Error("Cannot find module '"+E+"'");throw A.code="MODULE_NOT_FOUND",A}return n[E]}_.keys=function(){return Object.keys(n)},_.resolve=e,E.exports=_,_.id=362},363:function(E){E.exports=JSON.parse('{"USERNAME":"username","PASSWORD":"password","LOGIN":"Login"}')},364:function(E){E.exports=JSON.parse('{"MENU":{"FACTORY":{"TITLE":"工业数据资产","SHORT_NAME":"资产","TEMPLATE":"对象模板","INSTANCE":"对象实例","RELATION":"关系图谱","FUNCTION_SET":"功能集合","LABEL_MANAGER":"标签管理","GATHER":"数据集合"},"PROCESS":{"TITLE":"数据开发","SHORT_NAME":"开发","OPERATIONS":"运维中心","DEV":"开发任务","DEV_DETAIL":"开发详情","RELEASE":"发布任务","RELEASE_DETAIL":"发布详情"},"INTEGRATE":{"TITLE":"数据源管理","SHORT_NAME":"数据源","SOURCE":"数据源","SYNCING_TASK":"数据同步任务","PLUGIN_SERVER":"外挂时序数据库"}},"ASPECT":{"MENU":{"BASIC":"基础信息","ATTR":"属性","SERVICE":"服务","EVENT":"事件","SUBSCRIBE":"订阅","RELATION":"关系","LATITUDE":"统计维度","PROCESS":"数据加工","BLOOD":"数据血缘"}},"FORM":{"NAME":"名称","OBJECT_NAME":"对象名称","EN_NAME":"别名","PARENT_TEMP":"父模板","LABEL":"标签","APP":"App","NAMESPACE":"命名空间","ICON":"图标","FUNCTION_SET":"功能集合","DESCRIPTION":"描述","PRIMARY_FIELD":"主显示字段","DATATYPE":"类型","DATA_SOURCE":"数据来源","READ_WRITE_STATUS":"读写状态","REQUIRE":"是否必填","APP_VISIBLE":"对其他APP可见","UNIQUE_IDENTIFIER":"唯一标识符","CODE":"编码"},"TABLE":{"NAME":"名称","EN_NAME":"别名","NAMESPACE":"命名空间","DATATYPE":"类型","PERSISTENCE_HISTORY":"持久化/历史","DEFAULT_VALUE":"默认值","VALUE":"值","DESCRIPTION":"描述","INPUT":"输入","OUTPUT":"输出","GATHER":"数据集合","NUMBER_OF_CUSTOM_ATTR":"自定义属性数量","PARENT_TEMPLATE":"父模板","OPERATING":"操作"},"COMMON":{"TEMPLATE":"对象模板","INSTANCE":"对象实例","FUNCTION_SET":"功能集合","LABEL_MANAGER":"标签管理","GATHER":"数据集合","BASIC_INFO":"基础信息","DEFAULT":"默认","LABEL":"标签","APP":"APP","SAVE":"保存","CANCEL":"取消","CONFIRM":"确认","CLEAR":"清除","VIEW":"查看","EDIT":"编辑","DETAIL":"详情","DELETE":"删除","NEW":"新建","NO_LABEL":"无标签","MIGRATE":"迁移","COPY":"复制","UNBIND":"解绑","IMPORT":"导入","EXPORT":"导出","DEFAULT_VALUE":"默认值","SEARCH":"搜索"},"TERM":{"OBJECT":"对象","TEMP":"模板","INSTANCE":"实例","APP":"APP","LABEL":"标签","NAME":"名称","SERVICE":"服务","ATTR":"属性"},"STATEMENT":{"PLEASE_INPUT_SEARCH":"请输入{name}搜索","PLEASE_SELECT_LEFT_OBJ":"请选择左侧对象","DELETE_THIS_OBJ":"删除该{name}？","CONFIRM_DELETE":"请确认删除","OBJ_CANNOT_EMPTY":"{name}不能为空!","MODIFY_STATUS":"修改{status, plural, =0 {失败} =1 {成功}}!","OBJ_IMPORT_EXPORT_STATUS":"{name}{type, plural, =1 {导入} =2 {导出}}{status, plural, =0 {失败} =1 {成功}}!","OPERATE_SUCCESS":"{type, plural, =1 {新建} =2 {编辑} =3 {删除}}成功!","PLEASE_CHOOSE_DELETE_OBJ":"请选择要删除的{name}!"},"FACTORY":{"TEMPLATE":{"ADD_TEMP":"新增模板","PLATFORM_OBJECT":"平台对象","EXTERNAL_DATA_SHEET":"外部数据表","TEMP_INFO":"对象模板信息"},"LABEL_MANAGER":{"LABEL_CATEGORY":"标签类目"},"BASIC":{"FOUNDER":"创建人","MODIFIER":"修改人"},"ATTR":{"BINDING_RELATION":"绑定关系","ATTR_LABEL":"属性标签","MY_ATTR":"我的属性","OTHER_ATTR":"其他属性"},"SERVICE":{"SERVICE_LABEL":"服务标签","MY_SERVICE":"我的服务","OTHER_SERVICE":"其他服务","NO_DEBUG_RESULT":"无调试结果"},"EVENT":{"EVENT_LABEL":"事件标签","MY_EVENT":"我的事件","OTHER_EVENT":"其他事件"},"SUBSCRIBE":{"SUBSCRIBE_LABEL":"订阅标签","MY_SUBSCRIBE":"我的订阅","OTHER_SUBSCRIBE":"其他订阅"}},"MESSAGE":{"T":{"AA":"请先选择一个模板!","AB":"该模板下不允许创建子模板!","AC":"表单模板下只允许新建一级模板!","AD":"暂不允许在关系模板下创建新模板!"},"I":{"AA":"sss"}}}')}},[[319,2,0]]]);
//# sourceMappingURL=app.1.1a5d1572021_05_07_18_34_34.js.map