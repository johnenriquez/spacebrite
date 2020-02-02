import React from 'react';
import { Link } from 'react-router-dom';

const doNothing = e => e.preventDefault();

const FalseLink = ({ to = "#", className, onClick = doNothing, children }) => (
    <Link
        to={to}
        className={`falselink${className ? " " + className : ""}`}
        onClick={onClick}
    >
        {children}
    </Link>
);

export default FalseLink;