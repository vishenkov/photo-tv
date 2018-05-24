import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Country from '../components/Country';
import * as CountryActions from '../actions/country';

function mapStateToProps(state) {
  return {
    country: state.country.country,
    countries: state.country.countries,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CountryActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Country);
