import React, { Component } from 'react';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';

import HorizontalStepper from './HorizontalStepper';
import Layout from './Layout';
import styles from './Country.css';

export default class Country extends Component {
  componentWillMount() {
    this.props.resetState();
    this.props.getCountries();
  }

  handleChange = event => {
    this.props.setCountry(event.target.value);
  };

  render() {
    const { countries, country } = this.props;
    return (
      <Layout>
        <HorizontalStepper activeStep={0} />
        <div className={styles.container}>
          <FormControl className={styles.form}>
            <InputLabel htmlFor="country">Country</InputLabel>
            <Select
              value={country}
              onChange={this.handleChange}
              inputProps={{
                id: 'country',
                name: 'country'
              }}
            >
              <MenuItem value="Default">
                <em>Default</em>
              </MenuItem>
              {countries.map(c =>
                <MenuItem key={c} value={c}>{c}</MenuItem>)}
            </Select>
            <Button component={Link} to="/agreement">
              Next
            </Button>
          </FormControl>
        </div>
      </Layout>
    );
  }
}
