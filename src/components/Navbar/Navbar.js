import React from 'react';
import { connect } from 'react-redux';
import s from './NavBar.scss';
import classNames from 'classnames/bind';

import pervii from './channels/pervii.png';
import ntv from './channels/ntv.png';
import pyatii from './channels/5.jpg';
import tnt from './channels/tnt.jpg';
import sts from './channels/sts.jpg';
import ren from './channels/ren.jpg';
import tvc from './channels/tvc.jpg';
import nick from './channels/nick.jpg';
import mir from './channels/mir.jpg';
import kultura from './channels/k.jpg';

import TimeBlock from '../TimeBlock';
import { fetchData } from '../../redux/modules/parser';

let cx = classNames.bind(s);

const channels = [
  {
    title: 'Первый',
    picture: pervii,
    description: 'Главные новости.',
    key: '1tv'
  },
  {
    title: 'НТВ',
    picture: ntv,
    description: 'Не для слабонервных',
    key: 'ntv'
  },
  {
    title: 'Пятый',
    picture: pyatii,
    description: 'Новости. Кино. Программы.',
    key: 'spbtv'
  },
  {
    title: 'ТНТ',
    picture: tnt,
    description: 'Молодёжный телеканал',
    key: 'tnt-tv'
  },
  {
    title: 'СТС',
    picture: sts,
    description: 'Развлекательные телесериалы',
    key: 'ctc-tv'
  },
  {
    title: 'Россия Культура',
    picture: kultura,
    description: 'От Шопена до Шопенгауэра',
    key: 'tvkultura'
  },
  {
    title: 'РЕН-ТВ',
    picture: ren,
    description: 'Интересное об инопланетянах и массонах',
    key: 'ren-tv'
  },
  {
    title: 'ТВ Центр',
    picture: tvc,
    description: 'Репортажи с места событий',
    key: 'tvci'
  },
  {
    title: 'Nickelodeon',
    picture: nick,
    description: 'Мультфильмы для детей',
    key: 'nickelodeon-ru'
  },
  {
    title: 'МИР 24',
    picture: mir,
    description: 'Ничего, кроме новостей',
    key: 'mirtv24'
  }
];
class Navbar extends React.Component {
  static propTypes = {
    fetchData: React.PropTypes.func.isRequired
  };
  render () {
    var self = this;
    return (
      <div className={s.navBar}>
        <TimeBlock />
        {channels.map((channel) => {
          return (
            <div className={cx(s.program)}
              key={channel.key} onClick={function () { self.props.fetchData(channel.key) }}>
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

const mapStateToProps = () => {
  return {}
}
export default connect(mapStateToProps, { fetchData })(Navbar);
