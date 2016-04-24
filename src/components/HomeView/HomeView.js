import React from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../../redux/modules/parser';
import s from './HomeView.scss';
import Navbar from '../Navbar';
import Items from '../Items';

export class HomeView extends React.Component {
  static propTypes = {
    fetchData: React.PropTypes.func.isRequired
  }
  componentWillMount () {
    // this.props.fetchData();
  }
  render () {
    return (
      <div>
        <div className={s.title}>Реактивная телепрограмма</div>
        <div className={s.layout}>
          <Items />
          <Navbar />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
})
export default connect((mapStateToProps), {
  fetchData
})(HomeView)
