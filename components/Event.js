import React from 'react';

const Event = (props) => {
    const { name, url, description } = props.info;

    return (
        <a href={ url } target="__blank" className="list-group-item active text-light mb-1">
            <h3 className="nmb-3">{ name.text }</h3>
            <p className="mb-1">{ description.text.substr(0, 100) }</p> 
        </a>
    );
};

export default Event;