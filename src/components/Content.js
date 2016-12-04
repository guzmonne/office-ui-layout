import React, {PropTypes as T} from 'react'
import {Breadcrumb, IBreadcrumbItem} from 'office-ui-fabric-react/lib/Breadcrumb'
import {CommandBar} from 'office-ui-fabric-react/lib/CommandBar'
import {IContextualMenuItem} from 'office-ui-fabric-react/lib/ContextualMenu'
import {MarqueeSelection} from 'office-ui-fabric-react/lib/MarqueeSelection'
import {
  Selection,
  SelectionMode,
  SelectionZone,
} from 'office-ui-fabric-react/lib/utilities/selection'
import {Check} from 'office-ui-fabric-react/lib/Check'
import {identity, createListItems} from '../utils/'
import {menuItems as defaultMenuItems, farMenuItems as defaultFarMenuItems} from './items.js'
import '../_styles/Content.css'

class Content extends React.Component {
  constructor() {
    super()
    this.state = {
      items: createListItems(200),
      selection: new Selection({onSelectionChanged: this._onSelectionChanged}),
      selectionMode: SelectionMode.multiple,
      canSelect: 'all',
    }
    this.state.selection.setItems(this.state.items, false)
  }

  componentDidMount() {
    this._hasMounted = true
  }

  _onSelectionChanged = () => {
    if (this._hasMounted) this.forceUpdate()
  }

  render() {
    const {breadcrumbs, maxBreadcrumbs, menuItems, farMenuItems} = this.props
    const {items, selection, selectionMode} = this.state
    return (
      <div className="container">
        <Breadcrumb className="breadcrumbs" items={breadcrumbs}
          maxDisplayedItems={maxBreadcrumbs}
        />
        <CommandBar isSearchBoxVisible={true}
          searchPlaceholderText="Search..."
          items={menuItems}
          farItems={farMenuItems}
        />
        <div className="selection">
          <MarqueeSelection selection={selection} isEnabled={selectionMode === SelectionMode.multiple}>
            <SelectionZone selection={selection}
              selectionMode={selectionMode}
              onItemInvoked={item => alert(item)}>
            {items.map((item, index) => (
              <div key={index} className="selection-item" data-selection-index={index}>
              {(selectionMode !== SelectionMode.none) && (
                <span className="check" data-selection-toggle={true}>
                  <Check checked={selection.isIndexSelected(index)} />
                </span>
              )}
                <span className="name">{item.name}</span>
              </div>
            ))}  
            </SelectionZone>
          </MarqueeSelection>
        </div>
      </div>
    )
  }
}

Content.propTypes = {
  items: T.arrayOf(T.shape(IBreadcrumbItem)),
  menuItems: T.arrayOf(T.shape(IContextualMenuItem)),
  farMenuItems: T.arrayOf(T.shape(IContextualMenuItem)),
  maxBreadcrumbs: T.number,
}

Content.defaultProps = {
  maxBreadcrumbs: 3,
  breadcrumbs: [
    {text: 'Files', 'key': 'Files', onClick: identity},
    {text: 'This is folder 1', 'key': 'f1', onClick: identity},
    {text: 'This is folder 2', 'key': 'f2', onClick: identity},
    {text: 'This is folder 3', 'key': 'f3', onClick: identity},
    {text: 'This is folder 4', 'key': 'f4', onClick: identity},
    {text: 'Home', 'key': 'f5', onClick: identity},
  ],
  menuItems: defaultMenuItems,
  farMenuItems: defaultFarMenuItems,
}

export default Content
