import {identity} from '../utils/'

export const menuItems = [{
  key: 'newItem',
  name: 'Selection Mode',
  ariaLabel: 'Selection Mode',
  onClick: identity,
  items: [{
    key: 'selectionModeNone',
    name: 'None',
    canCheck: true,
    checked: false,
  }, {
    key: 'selectionModeSingle',
    name: 'Single Mode',
    canCheck: true,
    checked: true,
  }, {
    key: 'selectionModeMulti',
    name: 'Multi Mode',
    canCheck: true,
    checked: false,
  }]
}, {
  key: 'upload',
  name: 'Upload',
  icon: 'Upload',
  onClick: identity,
}, {
  key: 'share',
  name: 'Share',
  icon: 'Share',
  onClick: identity
}, {
  key: 'download',
  name: 'Download',
  icon: 'Download',
  onClick: identity
}, {
  key: 'move',
  name: 'Move to...',
  icon: 'MoveToFolder',
  onClick: identity
}, {
  key: 'copy',
  name: 'Copy to...',
  icon: 'Copy',
  onClick:identity
}, {
  key: 'rename',
  name: 'Rename...',
  icon: 'Edit',
  onClick:identity
}, {
  key: 'disabled',
  name: 'Disabled...',
  icon: 'Cancel',
  disabled: true,
  onClick:identity
}]

export const farMenuItems = [{
  key: 'sort',
  name: 'Sort',
  icon: 'SortLines',
  onClick: identity
}, {
  key: 'tile',
  name: 'Grid view',
  icon: 'Tiles',
  onClick: identity
}, {
  key: 'info',
  name: 'Info',
  icon: 'Info',
  onClick: identity
}]