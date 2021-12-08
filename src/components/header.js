import React from 'react'
import { Layout, Avatar } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../store/connect'
import { filterData } from '../utils'
import styles from './index.module.scss'
import classnames from 'classnames'

const { Header } = Layout

class AppHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      onSlidecollapsed: this.props.onSlidecollapsed,
    }
  }

  toggle = () => {
    this.state.onSlidecollapsed()
  }

  render() {
    let { slidecollapsed } = this.props
    slidecollapsed = filterData(slidecollapsed, 'slidecollapsed')
    return (
      <Header className={classnames('site-layout-header', styles.allWrap)} style={{ padding: 0 }}>
        {React.createElement(slidecollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: this.toggle,
        })}

        <div className={styles.avatarImgWrap}>
          <Avatar size={45} className={styles.avatarImg}>User</Avatar>
        </div>
      </Header>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)
