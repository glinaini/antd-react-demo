import React ,{ Component } from 'react'
import { Steps, Table, Tag, Divider, Card } from 'antd';

const {Step} = Steps;
const { Column, ColumnGroup } = Table;

const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

class Home extends Component {


  minDepth = (root) => {
    if(!root) return 0;
    if(!root.left && !root.right) return 1;
    if(!root.left) return this.minDepth(root.right)+1;
    if(!root.rigth) return this.minDepth(root.left)+1;
    return Math.min(this.minDepth(root.left), this.minDepth(root.right))+1;
  }
  
  
  render() {
    console.log(this.minDepth([10, 5, 11, 9, 7, 8, 6, 12, 13, 87, 4, 2, 3, 1]))
    console.log(this.minDepth([8,4,1,6,5,7,15,14,13,16]))
    console.log(this.minDepth([3,9,20,null,null,15,7]))

    return (
      <div>
        <div>home11111</div>
        <Card>
          <Steps  current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Steps>
        </Card>
        <Card style={{marginTop:20}}>
          <Table dataSource={data}>
            <ColumnGroup title="Name">
              <Column title="First Name" dataIndex="firstName" key="firstName" />
              <Column title="Last Name" dataIndex="lastName" key="lastName" />
            </ColumnGroup>
            <Column title="Age" dataIndex="age" key="age" />
            <Column title="Address" dataIndex="address" key="address" />
            <Column
              title="Tags"
              dataIndex="tags"
              key="tags"
              render={tags => (
                <span>
                  {tags.map(tag => (
                    <Tag color="blue" key={tag}>
                      {tag}
                    </Tag>
                  ))}
                </span>
              )}
            />
            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <span>
                  {/* <a href='#'>Invite {record.lastName}</a> */}
                  <span href='#'>Invite {record.lastName}</span>
                  <Divider type="vertical" />
                  <span>Delete</span>
                </span>
              )}
            />
          </Table>
        </Card>

      </div>
    )
  }
}

// Home.contextTypes = {
//   store: React.PropTypes.object
// }

export default Home;
