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
            { "At the spaceport": "#" },
            { "During the flight": "#" },
            { "Interplanetary hazards" : "#" },
            { "Lost property": "#" },
        ]
    },
    { "Policies": [
            { "Sustainability": "#" },
            { "Conditions of Carriage": "#" },
            { "Tarmac delay plan": "#" },
            { "Customer commitment": "#" },
            { "Space pirate deterrence": "#" },
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
        <div className="container">
            <div className="footer-links">
                <FooterLinkList menu={ footerMenu } />
            </div>
            <div className="colophon">
                <p>&copy; 2020 Spacebrite Space Lines, Inc. | Travel may be on other spacelines.</p>
                <p>Terms and conditions apply to all offers and NovaMiles benefits. See specific offer for details, and visit <FalseLink>NovaMiles Membership Guide &amp; Program Rules</FalseLink></p>
            </div>
            <div className="footer-icons">
                <ul>
                    <li><Icon className="fas fa-globe" /> <FalseLink>Earth - English</FalseLink> <Icon className="fas fa-arrows-alt-h" /> <FalseLink className="dim">Garblovian</FalseLink></li>
                    <li><a href="https://github.com/johnenriquez/spacebrite"><Icon className="fab fa-github" /> Source</a></li>
                </ul>
            </div>
        </div>
    </footer>
);


export default SiteFooter;