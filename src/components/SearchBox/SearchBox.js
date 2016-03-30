import React from 'react';
import s from './SearchBox.scss';

class SearchBox extends React.Component {
  render () {
    return (
      <div className={s.container}>
        <input className={s.input}/>
      </div>
    )
  }
}

export default SearchBox;
