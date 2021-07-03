import React, {useState} from 'react'
import styled from '@emotion/styled'
import {Link} from '@reach/router'
import {colors} from '../styles'
import {mq} from '../styles'
import {IconClose} from '@apollo/space-kit/icons/IconClose'
import {IconMenu} from '@apollo/space-kit/icons/IconMenu'

/**
 * Main navigation.
 * Displays few links with navigation functionality
 */

const MainNavigation = () => {
    const [hamburger, setHamburger] = useState(true);

    const openMenu = () => setHamburger(false)

    const closeMenu = () => setHamburger(true)

    return (
        <NavWrapper menuState={hamburger}>
            {hamburger && <a href="#menu" className="menu-responsive" id="menu_open" onClick={openMenu}>
                <IconMenu href="#menu"/>
            </a>}
            <NavList id="menu">
                <li>
                    <Link to="/">Home</Link>
                    <a href="#" className="menu-responsive" id="menu_close" onClick={closeMenu}>
                        <IconClose href="#" id="menu_close"/>
                    </a>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/business">Business</Link>
                </li>
                <li>
                    <Link to="/candidates">Candidates</Link>
                </li>
                <li>
                    <Link to="/jobs">Jobs</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </NavList>
        </NavWrapper>
    )
};

export default MainNavigation

/** Main navigation styles components */
const NavWrapper = styled.nav(props => ({
    '#menu_open': {
        display: props?.menuState ? 'block' : 'none'
    },

    [mq[1]]: {
        display: 'flex',
        justifyContent: "space-around",
        '#menu_open': {
            display: 'none'
        }
    }
}))

const NavList = styled.ul({
    // Responsive menu
    listStyle: 'none',
    display: 'none',

    ':target': {
        display: 'block',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        paddingTop: 18,
        width: '97.5vw',
        height: '92vh'
    },

    '& li': {
        display: 'flex',
        justifyContent: 'space-between',
        '& a': {
            fontSize: '2em'
        },

        // on mobile show the hamburger menu icon
        '& a#menu_open': {
            display: 'block'
        }
    },
    flexDirection: 'row',
    justifyContent: 'flex-end',
    textTransform: 'uppercase',
    fontSize: 11,
    fontWeight: 800,
    a: {
        textDecoration: 'none',
        color: colors.mainNavPrimary,
        display: 'block',
        padding: '1px 12px 32px 12px'
    },
    'a:hover': {
        color: '#ABAC6C'
    },
    'a[aria-current="page"]': {
        color: colors.mainNavHoverBorderColor,
        borderBottom: 'none'
    },

    // Desktop
    [mq[1]]: {
        flex: 1,
        backgroundColor: 'transparent',
        display: 'flex',
        '& li': {
            display: 'block',
            '& a': {
                fontSize: 11
            },
            '& .menu-responsive': {
                display: 'none'
            }
        },
        'a[aria-current="page"]': {
            fontWeight: 'bold',
            fontFamily: '\'Lato bold\', sans-serif',
            borderBottom: `2px solid ${colors.mainNavHoverBorderColor}`
        }
    }
})
