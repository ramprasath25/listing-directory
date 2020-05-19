import React from 'react';

const Locations = (props) => {
    let { data, onClick } = props;

    return (
        <label className="control control-radio">
            {data.title}
            <input type="radio" name="radio" value={data.title} onClick={onClick} name="location" />
            <div className="control_indicator"></div>
        </label>
    )
}

export default Locations;