## SupDAM 自定义 icon 组件库

### SupDAMIcon 属性说明

| 参数      | 说明           | 类型                | 默认值  | 是否必选 | 可选参数 |
| --------- | -------------- | ------------------- | ------- | -------- | -------- |
| type      | icon 类型标识  | string              | 无      | 是       | 无       |
| primary   | 高亮显示       | boolean             | false   | 非       | 无       |
| disabled  | 不可用状态     | boolean             | false   | 非       | 无       |
| width     | 图标宽度       | string              | string  | 非       | 无       |
| height    | 图标高度       | string              | false   | 非       | 无       |
| fill      | svg 填充色     | string              | #969CA6 | 非       | 无       |
| className | svg class 样式 | string              | false   | 非       | 无       |
| style     | svg style 样式 | React.CSSProperties | 无      | 是       | 无       |

- tips: 当含有 width 和 height 时,图标大小以最小值显示

### 使用方式

```
import Icon from '@component/Icon';

ReactDOM.render(
  <div className="supngin-wrapper">
    <Icon type='add' color='red' className='supngin-icon' />
    <Icon type='delete' primary style={{ fontSize: '32px' }} />
  </div>,
  mountNode,
);
```

### 图标类型示例

| type             | 显示                                                 |
| ---------------- | ---------------------------------------------------- |
| home             | ![首页](../../assets/icons/home.svg)                 |
| map              | ![地图](../../assets/icons/map.svg)                  |
| add              | ![添加](../../assets/icons/add.svg)                  |
| remove           | ![删除](../../assets/icons/remove.svg)               |
| search           | ![搜索](../../assets/icons/search.svg)               |
| ellipsis         | ![省略](../../assets/icons/ellipsis.svg)             |
| success          | ![成功](../../assets/icons/success.svg)              |
| error            | ![失败](../../assets/icons/error.svg)                |
| close            | ![关闭](../../assets/icons/close.svg)                |
| save             | ![帮助](../../assets/icons/save.svg)                 |
| arrow            | ![箭头-左](../../assets/icons/arrow.svg)             |
| arrow-down       | ![箭头-下](../../assets/icons/arrow-down.svg)        |
| circle-success   | ![成功](../../assets/icons/circle-success.svg)       |
| circle-error     | ![失败](../../assets/icons/circle-error.svg)         |
| circle-info      | ![信息](../../assets/icons/circle-info.svg)          |
| circle-help      | ![帮助](../../assets/icons/circle-help.svg)          |
| link-off         | ![未连通](../../assets/icons/link-off.svg)           |
| circle-close     | ![关闭](../../assets/icons/circle-close.svg)         |
| mouse            | ![鼠标](../../assets/icons/mouse.svg)                |
| filter           | ![过滤](../../assets/icons/filter.svg)               |
| move-top         | ![上移](../../assets/icons/move-top.svg)             |
| move-bottom      | ![下移](../../assets/icons/move-bottom.svg)          |
| move-up          | ![置顶](../../assets/icons/move-up.svg)              |
| move-down        | ![置底](../../assets/icons/move-down.svg)            |
| modeling         | ![建模](../../assets/icons/modeling.svg)             |
| viewing          | ![洞察](../../assets/icons/viewing.svg)              |
| zoom-out         | ![缩小](../../assets/icons/zoom-out.svg)             |
| zoom-in          | ![放大](../../assets/icons/zoom-in.svg)              |
| pan              | ![平移](../../assets/icons/pan.svg)                  |
| publish          | ![发布](../../assets/icons/publish.svg)              |
| folder-open      | ![文件夹-打开](../../assets/icons/folder-open.svg)   |
| folder-close     | ![文件夹-关闭](../../assets/icons/folder-close.svg)  |
| file             | ![文件](../../assets/icons/file.svg)                 |
| setting          | ![设置](../../assets/icons/setting.svg)              |
| label-hidden     | ![标签隐藏](../../assets/icons/label-hidden.svg)     |
| label-show       | ![标签显示](../../assets/icons/setting.svg)          |
| date             | ![日期](../../assets/icons/date.svg)                 |
| time             | ![时间](../../assets/icons/time.svg)                 |
| up               | ![向上](../../assets/icons/up.svg)                   |
| down             | ![向下](../../assets/icons/down.svg)                 |
| keyboard         | ![键盘](../../assets/icons/keyboard.svg)             |
| upload           | ![上传](../../assets/icons/upload.svg)               |
| dot              | ![点](../../assets/icons/dot.svg)                    |
| edit             | ![编辑](../../assets/icons/edit.svg)                 |
| 菜单             | -------------                                        |
| collapsed-open   | ![菜单展开](../../assets/icons/collapsed-open.svg)   |
| collapsed-close  | ![菜单关闭](../../assets/icons/collapsed-close.svg)  |
| data-integration | ![数据集合](../../assets/icons/data-integration.svg) |
| data-process     | ![数据加工](../../assets/icons/data-process.svg)     |
| data-quality     | ![数据质量](../../assets/icons/data-quality.svg)     |
| data-security    | ![数据安全](../../assets/icons/data-security.svg)    |
| data-service     | ![数据服务](../../assets/icons/data-service.svg)     |
| factory          | ![工厂](../../assets/icons/factory.svg)              |
| 脚本编辑器       | --------------                                       |
| undo             | ![撤销](../../assets/icons/undo.svg)                 |
| redo             | ![重做](../../assets/icons/redo.svg)                 |
| comment          | ![注释](../../assets/icons/comment.svg)              |
| uncomment        | ![取消注释](../../assets/icons/uncomment.svg)        |
| align-left       | ![左对齐](../../assets/icons/align-left.svg)         |
| align-right      | ![右对齐](../../assets/icons/align-right.svg)        |
| import           | ![导入](../../assets/icons/import.svg)               |
| export           | ![导出](../../assets/icons/export.svg)               |
| download         | ![下载](../../assets/icons/download.svg)             |
