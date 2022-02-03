import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFilter } from '../../redux/action';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <form>
      <label>
        Find contacts by name
        <br />
        <input type="text" value={value} onChange={onChangeFilter}></input>
      </label>
    </form>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter:(event)=>dispatch(addFilter(event.target.value))
});


export default connect(mapStateToProps,mapDispatchToProps)(Filter);
