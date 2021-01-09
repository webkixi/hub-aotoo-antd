import { Form, Input, InputNumber, Button, Radio } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

function template(state, props) {
  return (
    <Form {...layout} name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'age']}
        label="Age"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'website']} label="Website">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'chooseone']} label="Choose one">
        <Radio.Group onChange={this.onChange} value={state.radioValue}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <h4>
        <a href="http://www.agzgz.com" target="_blank">{state.title}</a>
      </h4>
    </Form>
  )
}

export default function(Pager) {
  return Pager({
    template,

    data: {
      title: 'by aotoo-hub 脚手架',
      radioValue: 1
    },

    onFinish(values){
      console.log('Success:', values);
    },

    onChange(e){
      this.setData({
        radioValue: e.target.value
      })
    },
    
    onLoad(options){

    },

    onUnload(){

    },

    onReady(){

    }
  })
}