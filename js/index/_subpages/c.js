import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


function template(state, props) {
  return (
    <Carousel afterChange={this.onChange}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  )
}

export default function(Pager) {
  return Pager({
    template,

    data: {
      title: '这是c页面'
    },

    onChange(a, b, c){
      console.log(a, b, c);
    },
    
    onLoad(options){

    },

    onUnload(){

    },

    onReady(){

    }
  })
}