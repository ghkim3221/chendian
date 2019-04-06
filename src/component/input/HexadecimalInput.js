import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { changeValue } from '../../action/value';

const asHexadecimal = (value) => {
  if (value) {
    return Number(value).toString(16);
  } else {
    return '';
  }
};

class HexadecimalInput extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { value } = event.target;

    if (/[a-fA-F0-9]*/.test(value)) {
      const decimalValue = parseInt(value, 16);
      this.props.change(decimalValue);
    }
  }

  render() {
    return (
      <input
        type="text"
        className={classNames('form-control', 'px-3', 'py-5', this.props.className)}
        value={asHexadecimal(this.props.value)}
        placeholder="input hexadecimal numbers"
        onChange={this.onChange} />
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.value
});

const mapDispatchToProps = (dispatch) => ({
  change: (value) => dispatch(changeValue(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(HexadecimalInput);