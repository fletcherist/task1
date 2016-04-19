import React from 'react';
import s from './Item.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(s);

function makeTime (time) {
  var hours = time.getHours();
  if (hours < 10) { hours = '0' + hours };
  var minutes = time.getMinutes();
  if (minutes < 10) { minutes = '0' + minutes };
  return `${hours}:${minutes}`;
}

// function scrollToElement (element) {
//   var el = document.getElementById(element);
//   var yPos = el.getClientRects()[0].top;
//   var yScroll = window.scrollY;
//   var interval = setInterval(function() {
//     yScroll -= 10;
//     window.scroll(0, yScroll);
//     if (el.getClientRects()[0].top >= 0) {
//       clearInterval(interval);
//     }
//   }, 5);
// }
class Item extends React.Component {
  static propTypes = {
    info: React.PropTypes.object.isRequired
  }
  render () {
    // console.log(this.props.info);
    const { title, id, timeStart } = this.props.info;
    var time = new Date(timeStart);
    var timeFormatted = makeTime(time);

    var now = new Date();
    var alreadyOverFlag = false;
    var hotFlag = false
    var difference = (time - now) / 1000 / 60;
    if (difference + 60 < 0) {
      alreadyOverFlag = true;
    } else if (difference + 60 < 150) {
      hotFlag = true;
      setTimeout(() => {
        location.href = '#' + id;
      }, 1000);
    }
    return (
      <div id={id} key={id} className={cx({item: true, alreadyOver: alreadyOverFlag, hot: hotFlag})} ref={(r) => this.element = r}>
        <div className={s.time}>{timeFormatted}</div>
        <div className={s.title}>{title}</div>
        {hotFlag && (
          <div className={s.hotMessage}>сейчас в эфире</div>
        )}
      </div>
    )
  }
}

export default Item;
