import React from 'react';

const Tags = (props) => {
    let { data, onClick } = props;
    return (
        <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary" onClick={onClick}>
            <input type="checkbox" className="custom-control-input" />
            <label className="custom-control-label" >{data}</label>
        </div>
    )
}

export default Tags;