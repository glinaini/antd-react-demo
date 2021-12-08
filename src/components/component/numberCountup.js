import React from 'react'
import CountUp from 'react-countup'

// 数字滚动动画

class NumberCountup extends React.Component {

  componentDidMount(){
    // this.onTrun()
  }
  // onTrun(){}
  render(){


    return(
      <div>
        数字滚动动画
        <CountUp start={0} end={111} duration='3' />
        
      </div>
    )
  }
}


export default NumberCountup;



// 小数位数，decimals: number
// 设置宽松，一般情况是true，useEasing: boolean
// 设置分组功能，设为true才能用千位分割器等功能，useGrouping: boolean
// 指定千位分隔符的字符，比如说最常见的”,”，separator: string
// 指定小数字符，decimal: string
// 动画值前缀，prefix: string
// 动画值后缀，可以加单位，suffix: string
// span元素的CSS类名，className: string
// 如果设置为true，CountUp组件将始终在每个重新渲染上进行动画处理，redraw: boolean
// 动画完成后调用的函数，onComplete: function
// 在动画开始前调用的函数，onStart: function
// Easing function，一般用不到，easingFn: function
// 用于自定义数字格式的方法，formattingFn: function