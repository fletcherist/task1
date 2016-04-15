import React from 'react';
import s from './TimeBlock.scss';

const days = ['вскр', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
function timeNow () {
  var d = new Date();
  var h = (d.getHours() < 10 ? '0' : '') + d.getHours();
  var m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
  return [h, m];
}
class TimeBlock extends React.Component {
  constructor () {
    super();
    var date = new Date();
    var day = date.getDay();
    var time = timeNow();
    time = time[0] + ':' + time[1];
    this.state = {
      day: days[day],
      time: time,
      timeFlag: true
    }
  }

  tickTack () {
    var time = timeNow();
    var spacer = this.state.timeFlag ? ':' : ' ';
    time = time[0] + spacer + time[1];
    this.setState({
      time: time,
      timeFlag: !this.state.timeFlag
    })
  }

  componentDidMount () {
    setInterval(this.tickTack.bind(this), 1000);
  }
  render () {
    return (
      <div className={s.time}>{this.state.time} {this.state.day}</div>
    );
  }
}

export default TimeBlock;
