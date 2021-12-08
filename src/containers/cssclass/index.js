import React, { Component } from 'react'
import styles from './index.module.scss'
import WrapDiv from '../../components/component/wrapDiv'
import { Divider } from 'antd'
import {
  // MenuUnfoldOutlined,
  // UserOutlined,
  // VideoCameraOutlined,
  // UploadOutlined,
  CodepenCircleOutlined
} from '@ant-design/icons'
import NumberCountup from '../../components/component/numberCountup'

class CssClass extends Component {
  render() {
    console.log(styles)
    return (
      <WrapDiv>
        <div className={styles.contentWrap}>
        <NumberCountup />

          <div>
            <h2>Css</h2>
            <h3>一、css将元素水平和垂直居中(只使用两行css代码)</h3>
            <p> display: grid; </p>
            <p> place-items: center; </p>
            <p>place-items 是将 justify-items 和 align-items 结合在一起的简写属性</p>
            <p>上面的代码等同于下面的代码：</p>
            <p>display: grid;</p>
            <p>justify-items: center;</p>
            <p>glign-items: center;</p>
          </div>
          <Divider />
          {/* <div>3</div> */}
          {/* <div>4</div> */}
        </div>
        <div>
          <h3>二、Flexbox 与 margin 的配合</h3>
          <p>与flexbox结合使用， margin：auto;可以轻松的将flex项目水平和垂直居中</p>
          <p></p>
          <div className={styles.isParentWrap}>
            <div className={styles.isChildWrap}></div>
          </div>
          <Divider />
        </div>
        <div className={styles.ulAndLiWrap}>
          <h3>三、列表的marker属性(伪类自定义内容)</h3>
          <p>(每个li项旁边的默认小圆圈称为marker)</p>
          <ul>
            <li>li列表一</li>
            <li>li列表二</li>
            <li>li列表三</li>
            <li>li列表四</li>
          </ul>
          <Divider />
        </div>
        <div>
          <h3>四、text-align 属性</h3>
          <p>(居中的旧方法，text-align 属性仅内容居中)</p>
          <p style={{textAlign:'center'}}>居中内容</p>
          <Divider />
        </div>
        <div>
          <h3>五、display: inline-Flex 属性</h3>
          <p>(内联的方式显示徽章列表)</p>
          <CodepenCircleOutlined  className={styles.badge} style={{ fontSize: '40px', color: '#08c' }} />
          <CodepenCircleOutlined  className={styles.badge} style={{ fontSize: '40px', color: '#08c' }} />
          <Divider />
        </div>
        <div>
          <h3>六、background-repeat: round 属性</h3>
          <p>(可以防止背景裁剪，可以均匀分布，呈现完整的图标，而不会出现宽度不够只展示一半的问题)</p>
          <div>background-repeat: round<div className={styles.elementIsBackground}></div></div>
          <Divider />

        </div>
        <div>
          <h3>七、数字滚动展示</h3>
          {/* <p>(可以防止背景裁剪，可以均匀分布，呈现完整的图标，而不会出现宽度不够只展示一半的问题)</p> */}
          {/* <div>background-repeat: round<div className={styles.elementIsBackground}></div></div> */}
          <NumberCountup />
          <Divider />

        </div>
        
      </WrapDiv>
    )
  }
}

export default CssClass
