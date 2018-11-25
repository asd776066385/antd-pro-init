import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva';

const namespace = 'cards';

// const mapStateToProps = (state) => {
//   const cardList = state[namespace].data;
//   return {
//     cardList,
//   };
// };

// @connect(mapStateToProps)
@connect(({ cards }) => ({
  cards,
}))
class CardsDemo extends Component {
  onClickAdd = () => {
    const action = {
      type: `${namespace}/addNewCard`,
      payload: {
        setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        punchline: 'here we use dva',
      },
    };
    this.props.dispatch(action);
  }

  render() {
    const { cards } = this.props;
    return (
      <div>
        {
          cards.data.map(card => {
            return (
              <Card key={card.id}>
                <div>Q: {card.setup}</div>
                <div>
                  <strong>A: {card.punchline}</strong>
                </div>
              </Card>
            );
          })
        }
        <div>
          <Button onClick={this.onClickAdd}> 添加卡片 </Button>
        </div>
      </div>
    );
  }
}

export default CardsDemo;