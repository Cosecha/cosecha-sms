import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { filterTable } from '../actions';

const SMSform = ({ onFilter, onMessageChange }) => {
    let input;
    let textarea;

    return (
        <div className="filterable-table">
            <input
                value={phone}
                ref={node => {input = node;}}
                onChange={() => onFilter(input.value)}
                placeholder="Cell Number" />

            <textarea
              value={message}
              ref={node => {textarea = node;}}
              onChange={() => onMessageChange(textarea.value)}
              placeholder="Your message about Cosecha..."
              ROWS="5"
            />


        </div>
    );
};

SMSform.propTypes = {
    filter: PropTypes.string,
    onFilter: PropTypes.func,
    onMessageChange: PropTypes.func,
    message: PropTypes.string,
    phone: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        phone: state.phone,
        message: state.message
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilter: filterText => dispatch(filterTable(filterText)),
        onMessageChange: function(){}
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SMSform);
