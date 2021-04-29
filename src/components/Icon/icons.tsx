import Home from '@assets/icons/home.svg';
import MapIcon from '@assets/icons/map.svg';
import AddIcon from '@assets/icons/add.svg';
import Remove from '@assets/icons/remove.svg';
import Search from '@assets/icons/search.svg';
import Ellipsis from '@assets/icons/ellipsis.svg';
import Success from '@assets/icons/success.svg';
import ErrorIcon from '@assets/icons/error.svg';
import Close from '@assets/icons/close.svg';
import Save from '@assets/icons/save.svg';
import ArrowLeft from '@assets/icons/arrow.svg';
import ArrowDown from '@assets/icons/arrow-down.svg';
import CircleSuccess from '@assets/icons/circle-success.svg';
import CircleError from '@assets/icons/circle-error.svg';
import CircleInfo from '@assets/icons/circle-info.svg';
import CircleHelp from '@assets/icons/circle-help.svg';
import CircleClose from '@assets/icons/circle-close.svg';
import LinkOff from '@assets/icons/link-off.svg';
import Filter from '@assets/icons/filter.svg';
import Mouse from '@assets/icons/mouse.svg';
import MoveTop from '@assets/icons/move-top.svg';
import MoveBottom from '@assets/icons/move-bottom.svg';
import MoveUp from '@assets/icons/move-up.svg';
import MoveDown from '@assets/icons/move-down.svg';
import Modeling from '@assets/icons/modeling.svg';
import Viewing from '@assets/icons/viewing.svg';
import DataIntegration from '@assets/icons/data-integration.svg';
import DataProcess from '@assets/icons/data-process.svg';
import DataQuality from '@assets/icons/data-quality.svg';
import DataSecurity from '@assets/icons/data-security.svg';
import DataService from '@assets/icons/data-service.svg';
import Factory from '@assets/icons/factory.svg';
import CollapsedOpen from '@assets/icons/collapsed-open.svg';
import CollapsedClose from '@assets/icons/collapsed-close.svg';
import ZoomOut from '@assets/icons/zoom-out.svg';
import ZoomIn from '@assets/icons/zoom-in.svg';
import Pan from '@assets/icons/pan.svg';
import Undo from '@assets/icons/undo.svg';
import Redo from '@assets/icons/redo.svg';
import AlignLeft from '@assets/icons/align-left.svg';
import AlignRight from '@assets/icons/align-right.svg';
import Comment from '@assets/icons/comment.svg';
import Uncomment from '@assets/icons/uncomment.svg';
import DateIcon from '@assets/icons/date.svg';
import TimeIcon from '@assets/icons/time.svg';
import Disable from '@assets/icons/disable.svg';
import Dot from '@assets/icons/dot.svg';
import Edit from '@assets/icons/edit.svg';
import File from '@assets/icons/file.svg';
import FolderOpen from '@assets/icons/folder-open.svg';
import FolderClose from '@assets/icons/folder-close.svg';
import LabelHidden from '@assets/icons/label-hidden.svg';
import LabelShow from '@assets/icons/label-show.svg';
import Keyboard from '@assets/icons/keyboard.svg';
import Publish from '@assets/icons/publish.svg';
import Upload from '@assets/icons/upload.svg';
import Up from '@assets/icons/up.svg';
import Down from '@assets/icons/down.svg';
import Setting from '@assets/icons/setting.svg';
import Import from '@assets/icons/import.svg';
import Export from '@assets/icons/export.svg';
import Download from '@assets/icons/download.svg';
import Reload from '@assets/icons/reload.svg';
import WipeOff from '@assets/icons/delete.svg';
import MenuTemplate from '@assets/icons/menu-template.svg';
import MenuInstance from '@assets/icons/menu-instance.svg';
import MenuFunctionSet from '@assets/icons/menu-functionset.svg';
import MenuLabels from '@assets/icons/menu-labels.svg';
import MenuGather from '@assets/icons/menu-gather.svg';
import MenuRelation from '@assets/icons/menu-relation.svg';

const normalFill = '#969CA6';
const menuFill = '#7F8FA4';

const Icons: {
  [propsName: string]: {
    IconComp: SvgrComponent;
    defaultSize: string;
    defaultFill?: string;
  };
} = {
  home: {
    IconComp: Home,
    defaultSize: 'default',
    defaultFill: '#fff'
  },
  map: {
    IconComp: MapIcon,
    defaultSize: 'default',
    defaultFill: '#fff'
  },
  add: {
    IconComp: AddIcon,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  remove: {
    IconComp: Remove,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  'wipe-off': {
    IconComp: WipeOff,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  search: {
    IconComp: Search,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  ellipsis: {
    IconComp: Ellipsis,
    defaultSize: 'small',
    defaultFill: normalFill
  },
  success: {
    IconComp: Success,
    defaultSize: 'small'
  },
  error: {
    IconComp: ErrorIcon,
    defaultSize: 'small',
    defaultFill: normalFill
  },
  close: {
    IconComp: Close,
    defaultSize: 'small',
    defaultFill: normalFill
  },
  save: {
    IconComp: Save,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  arrow: {
    IconComp: ArrowLeft,
    defaultSize: 'small',
    defaultFill: normalFill
  },
  'arrow-down': {
    IconComp: ArrowDown,
    defaultSize: 'small',
    defaultFill: normalFill
  },
  'circle-success': {
    IconComp: CircleSuccess,
    defaultSize: 'small',
    defaultFill: normalFill
  },
  'circle-error': {
    IconComp: CircleError,
    defaultSize: 'small',
    defaultFill: normalFill
  },
  'circle-info': {
    IconComp: CircleInfo,
    defaultSize: 'small',
    defaultFill: normalFill
  },
  'circle-help': {
    IconComp: CircleHelp,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  'circle-close': {
    IconComp: CircleClose,
    defaultSize: 'large',
    defaultFill: normalFill
  },
  'link-off': {
    IconComp: LinkOff,
    defaultSize: 'small',
    defaultFill: normalFill
  },
  filter: {
    IconComp: Filter,
    defaultSize: 'small',
    defaultFill: normalFill
  },
  mouse: {
    IconComp: Mouse,
    defaultSize: 'large',
    defaultFill: normalFill
  },
  'move-top': {
    IconComp: MoveTop,
    defaultSize: 'large',
    defaultFill: normalFill
  },
  'move-bottom': {
    IconComp: MoveBottom,
    defaultSize: 'large',
    defaultFill: normalFill
  },
  'move-up': {
    IconComp: MoveUp,
    defaultSize: 'large',
    defaultFill: normalFill
  },
  'move-down': {
    IconComp: MoveDown,
    defaultSize: 'large',
    defaultFill: normalFill
  },
  modeling: {
    IconComp: Modeling,
    defaultSize: 'default',
    defaultFill: '#354052'
  },
  viewing: {
    IconComp: Viewing,
    defaultSize: 'default',
    defaultFill: '#354052'
  },
  'collapsed-open': {
    IconComp: CollapsedOpen,
    defaultSize: 'large',
    defaultFill: menuFill
  },
  'collapsed-close': {
    IconComp: CollapsedClose,
    defaultSize: 'large',
    defaultFill: menuFill
  },
  'data-integration': {
    IconComp: DataIntegration,
    defaultSize: 'default',
    defaultFill: menuFill
  },
  'data-process': {
    IconComp: DataProcess,
    defaultSize: 'default',
    defaultFill: menuFill
  },
  'data-quality': {
    IconComp: DataQuality,
    defaultSize: 'default',
    defaultFill: menuFill
  },
  'data-security': {
    IconComp: DataSecurity,
    defaultSize: 'default',
    defaultFill: menuFill
  },
  'data-service': {
    IconComp: DataService,
    defaultSize: 'default',
    defaultFill: menuFill
  },
  factory: {
    IconComp: Factory,
    defaultSize: 'default',
    defaultFill: menuFill
  },
  'zoom-out': {
    IconComp: ZoomOut,
    defaultSize: 'default',
    defaultFill: '#354052'
  },
  'zoom-in': {
    IconComp: ZoomIn,
    defaultSize: 'default',
    defaultFill: '#354052'
  },
  pan: {
    IconComp: Pan,
    defaultSize: 'default',
    defaultFill: '#354052'
  },
  undo: {
    IconComp: Undo,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  redo: {
    IconComp: Redo,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  comment: {
    IconComp: Comment,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  uncomment: {
    IconComp: Uncomment,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  'align-left': {
    IconComp: AlignLeft,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  'align-right': {
    IconComp: AlignRight,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  date: {
    IconComp: DateIcon,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  time: {
    IconComp: TimeIcon,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  disable: {
    IconComp: Disable,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  dot: {
    IconComp: Dot,
    defaultSize: 'default',
    defaultFill: normalFill
  },

  edit: {
    IconComp: Edit,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  file: {
    IconComp: File,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  'folder-open': {
    IconComp: FolderOpen,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  'folder-close': {
    IconComp: FolderClose,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  'label-hidden': {
    IconComp: LabelHidden,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  'label-show': {
    IconComp: LabelShow,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  keyboard: {
    IconComp: Keyboard,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  publish: {
    IconComp: Publish,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  up: {
    IconComp: Up,
    defaultSize: 'small',
    defaultFill: normalFill
  },
  down: {
    IconComp: Down,
    defaultSize: 'small',
    defaultFill: normalFill
  },
  upload: {
    IconComp: Upload,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  setting: {
    IconComp: Setting,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  import: {
    IconComp: Import,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  export: {
    IconComp: Export,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  download: {
    IconComp: Download,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  reload: {
    IconComp: Reload,
    defaultSize: 'default',
    defaultFill: normalFill
  },
  'menu-template': {
    IconComp: MenuTemplate,
    defaultSize: 'default',
    defaultFill: menuFill
  },
  'menu-instance': {
    IconComp: MenuInstance,
    defaultSize: 'default',
    defaultFill: menuFill
  },
  'menu-functionset': {
    IconComp: MenuFunctionSet,
    defaultSize: 'default',
    defaultFill: menuFill
  },
  'menu-labels': {
    IconComp: MenuLabels,
    defaultSize: 'default',
    defaultFill: menuFill
  },
  'menu-gather': {
    IconComp: MenuGather,
    defaultSize: 'default',
    defaultFill: menuFill
  },
  'menu-relation': {
    IconComp: MenuRelation,
    defaultSize: 'default',
    defaultFill: menuFill
  }
};

export default Icons;
