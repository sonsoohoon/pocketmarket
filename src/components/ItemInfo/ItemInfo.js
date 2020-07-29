import React from "react";
import './ItemInfo.css';

class ItemInfo extends React.Component {
    render() {
        return (
          <div className="item">
              <h5>{this.props.item.itemName}</h5>
              <div>{this.props.item.itemPrice}</div>
          </div>
        );
    }
}

export default ItemInfo;