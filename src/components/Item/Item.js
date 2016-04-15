import React from 'react';
import s from './Item.scss';

function makeTime (time) {
  var hours = time.getHours();
  if (hours < 10) { hours = '0' + hours };
  var minutes = time.getMinutes();
  if (minutes < 10) { minutes = '0' + minutes };
  return `${hours}:${minutes}`;
}

class Item extends React.Component {
  static propTypes = {
    info: React.PropTypes.object.isRequired
  }
  render () {
    console.log(this.props.info);
    const { title, id, timeOrgigin, timeStart } = this.props.info;
    var time = new Date(timeStart);
    time = makeTime(time);
    return (
      <div key={id} className={s.item}>
        <div className={s.time}>{time}</div>
        <div className={s.title}>{title}</div>
      </div>
    )
  }
}

export default Item;
