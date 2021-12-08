
import { Table } from 'antd'
import React, { Component } from 'react'

class Tables extends Component {


  mergeCells = (text, data, key , index)=>{
    console.log('data', data);
    console.log('index', index);
    if(index!==0 && text===data[index-1][key]){
      return 0
    }
    let rowSpan = 1
    for(let i = index+1; i<data.length; i++){
      if(text !== data[i][key]){
        break
      }
      rowSpan++
    }
    return rowSpan
  }

  
  
  render(){
    const data =[
      {
        class:'1班',
        name1:'栗子',
        age:16,
        add: '南巷12号'
      },
      {
        class:'1班',
        name1:'草莓',
        age:11,
        add: '北巷2号'
      },
      {
        class:'2班',
        name1:'草莓1',
        age:11,
        add: '北巷2号'
      },
      {
        class:'3班',
        name1:'草莓11',
        age:12,
        add: '北巷21号'
      },
      {
        class:'3班',
        name1:'胡萝卜',
        age:10,
        add: '东巷21号'
      },
    ]
    const columns =[
      {
        title:'班级',
        dataIndex:'class',
        key:'class',
        render:(text,record,index)=>{
          const obj = {
            children: text != null ? text: '',
            props: {}
          }
          obj.props.rowSpan = this.mergeCells(text,data,'class', index)
          return obj
        }
      },
      {
        title:'姓名',
        dataIndex: 'name1',
        key:'name1',
      },
      {
        title:'年龄',
        dataIndex:'age',
        key:'age',
        
      },
      {
        title:'地址',
        dataIndex:'add',
        key:'add',

      }
    ]
    return(
      <div>
        <div>1.表单的单元格</div>
        <div>
          <Table key='' columns={columns} dataSource={data} bordered />
        </div>
      </div>
    )
  }
}

export default Tables
