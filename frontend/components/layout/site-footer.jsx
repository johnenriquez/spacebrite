import React from 'react';

import Icon from '../common/icon';
import FalseLink from '../common/false_link';


const footerMenu = [
    { "About Spacebrite": [
            { "Our story": "#" },
            { "The Spacebrite blog": "#" },
            { "Media center": "#" },
            { "Annual reports": "#" },
            { "Careers": "#" },
        ]
    },
    { "Support": [
            { "Help and contact": "#" },
            { "Before you book": "#" },
            { "At the airport": "#" },
            { "On the flight": "#" },
            { "Lost property": "#" },
        ]
    },
    { "Policies": [
            { "Sustainability": "#" },
            { "Conditions of Carriage": "#" },
            { "Tarmac delay plan": "#" },
            { "Customer commitment": "#" },
        ]
    },
    { "More": [
            { "Business Travel": "#" },
            { "Spacebrite Cargo": "#" },
            { "Travel trade": "#" },
            { "Affiliates": "#" },
            { "Partners": "#" },
        ]
    },
];

const FooterLinkSection = ({section, key}) => {
    let title = Object.keys(section)[0];
    let links = Object.values(section)[0];
    return (
        <li key={key} className="link-section">
            <h3>{title}</h3>
            <ul>
                {links.map((link, i) => (
                    <FooterLinkItem
                        key={i}
                        to={Object.values(link)[0]}
                        text={Object.keys(link)[0]}
                    />
                ))}
            </ul>
        </li>
    );
}

const FooterLinkList = ({menu}) => (
    <ul className="footer-link-list">
        {menu.map((section, i) => <FooterLinkSection key={i} section={section} />)}
    </ul>
);

const FooterLinkItem = ({ key, text, to }) => (
    <li key={key}><FalseLink to={to}>{text}</FalseLink></li>
);

const SiteFooter = () => (
    <footer className="site-footer">
        <div className="footer-interlude">
            <FalseLink>Ready to go? Let's get started planning your trip <Icon className="fas fa-angle-right" /></FalseLink>
        </div>
        <div className="footer-links">
            <div className="container">
                <FooterLinkList menu={ footerMenu } />
            </div>
        </div>
        <div className="footer-copyright">
            <a href="https://github.com/johnenriquez/spacebrite"><Icon className="fab fa-github" /></a>
        </div>
    </footer>
);


export default SiteFooter;