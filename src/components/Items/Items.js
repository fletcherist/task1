import React from 'react';
import { connect } from 'react-redux';
import s from './Items.scss';
import arrow from './Arrow.svg';
import Loader from '../Loader';
import Item from '../Item';

class Items extends React.Component {
  static propTypes = {
    program: React.PropTypes.object,
    isFetching: React.PropTypes.bool
  }
  render () {
    var programmList;
    var errorFlag = false;
    if (this.props.program &&
        this.props.program['p:program'] &&
        this.props.program['p:program']['p:day']
    ) {
      if (this.props.program['p:program']['p:day']['p:item']) {
        programmList = this.props.program['p:program']['p:day']['p:item'] || undefined;
      } else {
        errorFlag = true;
      }
    }
    console.log(this.props.program);
    return (
      <div className={s.container}>
        {programmList && !errorFlag && (
          <div className>
            {programmList.map((program) => {
              return (<Item info={program}/>)
            })}
          </div>
        )}
        {!programmList && (
          <div>
            {errorFlag && !this.props.isFetching && (<ErrorHandlingData/>)}
            {!errorFlag && !this.props.isFetching && (<StartScreen />)}
          </div>
        )}
        {this.props.isFetching && (<Loader/>)}
      </div>
    )
  }
}

class StartScreen extends React.Component {
  render () {
    return (
      <div className={s.startScreen}>
        <div className={s.startScreenTitle}>Для начала работы <br/> выберите канал из списка</div>
        <div><img src={arrow} width='150px'/></div>
      </div>
    )
  }
}

const ErrorHandlingData = ({channel}) => {
  return (
    <div>
      Программа передач на сегодня отсутствует
    </div>
  )
}
ErrorHandlingData.propTypes = {
  channel: React.PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    program: state.parser.program,
    isFetching: state.parser.isFetching
  }
}
export default connect(mapStateToProps)(Items);
