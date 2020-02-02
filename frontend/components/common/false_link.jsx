import React from 'react';
import { Link } from 'react-router-dom';

const FalseLink = ({ to="#", className, children }) => (
    <Link
        to={to}
        className={className}
        onClick={e => e.preventDefault()}
    >
        {children}
    </Link>
);

export default FalseLink;