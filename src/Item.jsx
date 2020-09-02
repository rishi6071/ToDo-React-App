import React from 'react';

const Item = (props) => {

    return(
        <>
            <li>{props.text} 
                <i 
                    className="fa fa-trash" 
                    onClick={() => {
                        props.onSelect(props.id);
                    }} 
                    aria-hidden="true">
                </i>
            </li>
        </>
    );
}

export default Item;