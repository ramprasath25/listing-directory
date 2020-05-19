import React from 'react';

const Features = (props) => {
    let { data, onChange } = props
    return (
        <div className="custom-control custom-checkbox checkbox-outline checkbox-outline-primary" >
            <input type="checkbox" className="custom-control-input" onChange={onChange} />
            <label className="custom-control-label" >{data.title}</label>
        </div>
    )
}

export default Features;