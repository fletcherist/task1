import React from 'react';
import s from './NavBar.scss';
import classNames from 'classnames/bind';

import pervii from './channels/pervii.png';
import ntv from './channels/ntv.png';
import pyatii from './channels/5.jpg';

let cx = classNames.bind(s);

const channels = [
  {
    title: 'Первый',
    picture: pervii,
    description: 'Вечерний Ургант'
  },
  {
    title: 'НТВ',
    picture: ntv,
    description: 'Преступление и наказание'
  },
  {
    title: 'Пятый',
    picture: pyatii,
    description: 'Блаблабл'
  }
];

class Navbar extends React.Component {
  render () {
    return (
      <div className={s.navBar}>
        <div className={s.time}>20:42 пн</div>
        {channels.map((channel) => {
          return (
            <div className={cx(s.program)}>
              <div className={s.picture}>
                <img src={channel.picture} className={s.picture} />
              </div>
              <div className={s.info}>
                <div className={s.title}>{channel.title}</div>
                <div className={s.description}>{channel.description}</div>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Navbar;
