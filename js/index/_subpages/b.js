import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

ao2.inject.css(`
[data-theme='compact'] .site-collapse-custom-collapse .site-collapse-custom-panel,
.site-collapse-custom-collapse .site-collapse-custom-panel {
  background: #f7f7f7;
  border-radius: 2px;
  margin-bottom: 24px;
  border: 0px;
  overflow: hidden;
}
`)

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function template(state, props) {
  return (
    <Collapse
    bordered={false}
    defaultActiveKey={['1']}
    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
    className="site-collapse-custom-collapse"
  >
    <Panel header="This is panel header 1" key="1" className="site-collapse-custom-panel">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2" className="site-collapse-custom-panel">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3" className="site-collapse-custom-panel">
      <p>{text}</p>
    </Panel>
  </Collapse>
  )
}

export default function(Pager) {
  return Pager({
    template,

    data: {
      title: '这是b页面'
    },
    
    onLoad(options){

    },

    onUnload(){

    },

    onReady(){

    }
  })
}