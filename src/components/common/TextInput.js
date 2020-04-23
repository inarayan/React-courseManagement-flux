import React from 'react';
import propTypes from 'prop-types';

function TextInput(props){
    
    let wrapperClass = "form-group";
    if(props.error.length>0){
        wrapperClass+=" has-error";
    }
    return (<div className={wrapperClass}>
        <label htmlFor={props.id}>{props.label}</label>
        <div className="field">
          <input
            id={props.id}
            type="text"
            name={props.name}
            onChange={props.onChange}
            className="form-control"
            value={props.value}
          />
        </div>
        {props.error && <div className="alert alert-danger">{props.error}</div>}
      </div>);
}

TextInput.propTypes={
    id:propTypes.string.isRequired,
    name:propTypes.string.isRequired,
    label:propTypes.string.isRequired,
    onChange:propTypes.func.isRequired,
    value:propTypes.string.isRequired,
    error:propTypes.string.isRequired
}

TextInput.defaultProps={
    error:""
}
export default TextInput;