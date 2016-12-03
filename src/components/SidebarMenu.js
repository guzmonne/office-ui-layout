import React, {PropTypes as T} from 'react'
import {Nav, INavLinkGroup} from 'office-ui-fabric-react/lib/Nav'

const SidebarMenu = ({groups, expanded, collapsed}) => (
  <div className='SidebarMenu'>
    <Nav groups={groups}
      expandedStateText={expanded}
      collapsedStateText={collapsed}
    />
  </div>
)

SidebarMenu.props = {
  groups: INavLinkGroup,
  expanded: T.string,
  collapsed: T.string,
}

SidebarMenu.defaultProps = {
  groups: [{
    links: [{
      name: 'Home',
      url: 'http://example.com',
      links: [{
        name: 'Activity',
        url: 'http://msn.com',
      }, {
        name: 'News',
        url: 'http://msn.com',
      }],
      isExpanded: true,
    }, {
      name: 'Documents',
      url: 'http://example.com',
      isExpanded: true,
    }, {
      name: 'Pages',
      url: 'http://msn.com',
    }, {
      name: 'Notebook',
      url: 'http://msn.com',
    }, {
      name: 'Long Name Test for elipsis. Longer than 12em!',
      url: 'http://example.com',
    }, {
      name: 'Edit Link',
      url: 'http://example.com',
      iconClassName: 'ms-Icon--Edit',
    }, {
      name: 'Edit',
      url: '#',
      icon: 'Edit',
      onClick: () => {},
    }]
  }],
  expanded: 'expanded',
  collapsed: 'collapsed',
}

export default SidebarMenu
