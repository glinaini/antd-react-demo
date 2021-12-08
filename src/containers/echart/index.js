import React ,{ Component } from 'react'
import { Button, Card } from 'antd'
import { withRouter } from 'react-router-dom';
import ReactEcharts from 'echarts-for-react';
import styles from './index.module.scss'



class MyEChart extends Component {
  
  gotoHome=()=>{
    this.props.history.push('/home');
  }

  showProvince = () => {
    const option = {
      title: {
        text: '',
        subtext: '图像内容',
        left: 'center'
      },
      tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
          left: 'center',
          top: 'bottom',
          data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
      },
      toolbox: {
          // show: true,
          feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              magicType: {
                  show: true,
                  type: ['pie', 'funnel']
              },
              restore: {show: true},
              saveAsImage: {show: true}
          }
      },
      series: [
          // {
          //     name: '半径模式',
          //     type: 'pie',
          //     radius: [20, 110],
          //     center: ['25%', '50%'],
          //     roseType: 'radius',
          //     label: {
          //         show: false
          //     },
          //     emphasis: {
          //         label: {
          //             show: true
          //         }
          //     },
          //     data: [
          //         {value: 10, name: 'rose1'},
          //         {value: 5, name: 'rose2'},
          //         {value: 15, name: 'rose3'},
          //         {value: 25, name: 'rose4'},
          //         {value: 20, name: 'rose5'},
          //         {value: 35, name: 'rose6'},
          //         {value: 30, name: 'rose7'},
          //         {value: 40, name: 'rose8'}
          //     ]
          // },
          {
              name: '面积模式',
              type: 'pie',
              radius: [30, 110],
              center: ['50%', '50%'],
              roseType: 'area',
              data: [
                  {value: 10, name: 'rose1'},
                  {value: 5, name: 'rose2'},
                  {value: 15, name: 'rose3'},
                  {value: 25, name: 'rose4'},
                  {value: 20, name: 'rose5'},
                  {value: 35, name: 'rose6'},
                  {value: 30, name: 'rose7'},
                  {value: 40, name: 'rose8'}
              ]
          }
      ]
    }

    return option
  }
  
  render() {
       return (
      <div className={styles.Wrap}>
      <Card >
        {/* <Button>跳转</Button> */}
        <Button type="primary" onClick={()=>{this.gotoHome()}}>跳转Home</Button>
      </Card>
      <Card className={styles.margintop20}>
        <div>
          <ReactEcharts
          style={{ width: '50%', height:'500px' }}
          option={this.showProvince()}
        />
        </div>
      </Card>
      </div>

    )
  }
}

export default withRouter(MyEChart);
