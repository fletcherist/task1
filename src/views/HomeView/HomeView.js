import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment, doubleAsync } from '../../redux/modules/counter'
import layout from './layout.jpg';
import logotype from './logotype.svg';
import classes from './HomeView.scss';
import SearchBox from 'components/SearchBox';

type Props = {
  counter: number,
  doubleAsync: Function,
  increment: Function
};

export class HomeView extends React.Component<void, Props, void> {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    doubleAsync: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired
  };

  render () {
    return (
      <div>
        <div className={classes.layout} style={{background: `url(${layout})`}}></div>
        <div className={classes.logotype}><img src={logotype}/></div>
        {'//'}
        <div className={classes.container}>
          <h1 className={classes.title}>Реактивная телепрограмма</h1>
        </div>
        <SearchBox/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
})
export default connect((mapStateToProps), {
  increment: () => increment(1),
  doubleAsync
})(HomeView)
