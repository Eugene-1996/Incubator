import React from 'react';

type FooterPropsType = {
    title: string 
}


const Footer = (props:FooterPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    );
};

export default Footer;