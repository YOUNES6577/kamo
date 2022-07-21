import React, { useEffect } from 'react'

import { Call } from '@mui/icons-material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Fade } from 'react-reveal'
import { Link } from '@mui/material';
import MenuUnstyled from '@mui/base/MenuUnstyled';
import MenuItemUnstyled, {
    menuItemUnstyledClasses,
} from '@mui/base/MenuItemUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';


import '../asset/sass/navApp.sass'
import logo from '../ProdImg/LOGO.png'
import { borderRadius } from '@mui/system';
// import logo from '../ProdImg/kamoSvg/logo-white-g2.svg'

const blue = {
    100: '#DAECFF',
    200: '#99CCF3',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
};
const grey = {
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
};
const StyledListbox = styled('ul')(
    ({ theme }) => `
    font-family: Spartan, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 5px;
    text-align: center;
    margin: 10px 0;
    min-width: 200px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 0.75em;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    overflow: auto;
    outline: 0px;
    `,
);
const StyledMenuItem = styled(MenuItemUnstyled)(
    ({ theme }) => `
    z-index: 100;
    list-style: none;
    padding: 8px;
    border-radius: 0.45em;
    cursor: default;
    user-select: none;
    &:last-of-type {
        border-bottom: none;
    }
    &.${menuItemUnstyledClasses.focusVisible} {
        outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
        background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
    &.${menuItemUnstyledClasses.disabled} {
        color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
    &:hover:not(.${menuItemUnstyledClasses.disabled}) {
        background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
    `,
);
const TriggerButton = styled('button')(
    ({ theme }) => `
    font-family: Spartan, sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    box-sizing: border-box;
    min-height: calc(1.5em + 22px);
    background: ${props => props.btnbg};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 0.75em;
    margin: 0.5em;
    padding: 7px 20px;
    line-height: 1.5;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    &:hover {
        background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
        border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
    &.${buttonUnstyledClasses.focusVisible} {
        outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
    }
    `,
);
const Popper = styled(PopperUnstyled)`
    z-index: 1;
`;
function themeStyle(props) {
    return (props.theme === 'light') ? {
        bg: '#f5f5f5',
        btnbg: grey['600'],
        fontColor: "#000",
        boxShadow: 'rgb(0 0 0 / 63%) 1px 1px 5px 0px',
        top: '0'
    } : (props.theme === 'transparent') ? {
        bg: 'transparent',
        btnbg: grey['100'],
        fontColor: "#fff",
        top: '25px'
    } : undefined
}
function AppBar(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isOpen = Boolean(anchorEl);
    const buttonRef = React.useRef(null);
    const menuActions = React.useRef(null);
    const Ptheme = themeStyle({ theme: props.theme })
    const [theme, setTheme] = React.useState(
        (window.scrollY > 50) ?
            themeStyle({ theme: 'light' }) :
            themeStyle({ theme: 'transparent' })
    )
    useEffect(() => {
        const handleScroll = event => {
            if (window.scrollY > 50) {
                setTheme(themeStyle({ theme: 'light' }))
            } else {
                setTheme(themeStyle({ theme: 'transparent' }))
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleButtonClick = (event) => {
        if (isOpen) {
            setAnchorEl(null);
        } else {
            setAnchorEl(event.currentTarget);
        }
    };
    const handleButtonKeyDown = (event) => {
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            setAnchorEl(event.currentTarget);
            if (event.key === 'ArrowUp') {
                menuActions.current?.highlightLastItem();
            }
        }
    };
    const close = () => {
        setAnchorEl(null);
        buttonRef.current.focus();
    };
    const createHandleMenuClick = (menuItem) => {
        return () => {
            console.log(`Clicked on ${menuItem}`);
            close();
        };
    };
    const handleClick = (e) => {
    }
    return (
        <header
            className="main-header"
            style={{
                backgroundColor: Ptheme?.bg || theme.bg,
                top: Ptheme?.top || theme.top,
                boxShadow: Ptheme?.boxShadow || theme.boxShadow
            }}>
            <div className="container">
                <Fade top >
                    <nav className="navbar navbar-expand-lg main-nav px-0">
                        <a className="navbar-brand" href="/">
                            <img src={logo} width='200' alt="kamoplast.com" />
                            {/* <img src='https://ik.imagekit.io/younes6577/kamoplast/tr:w-200/Logo_PWz_J7HnRx.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657907466273' alt="kamoplast.com" /> */}
                        </a>
                        <button className="navbar-toggler" type="button" id='mainMenu-toggler' data-bs-toggle="collapse" data-bs-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar icon-bar-1"></span>
                            <span className="icon-bar icon-bar-2"></span>
                            <span className="icon-bar icon-bar-3"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="mainMenu">
                            <ul className="navbar-nav ml-auto text-uppercase f1"  >
                                <li >
                                    <Link href="#home"
                                        className=""
                                        onClick={handleClick}
                                        style={{ color: Ptheme?.fontColor || theme.fontColor }}>ACCUEIL</Link>
                                </li>
                                <li >
                                    <Link href="#PSN"
                                        onClick={handleClick}
                                        style={{ color: Ptheme?.fontColor || theme.fontColor }}>Présentation</Link>
                                </li>
                                {/* <li >
                                    <Link href="#PDS">Produits</Link>
                                </li> */}
                                <li >
                                    <Link href="#AboutSection"
                                        className=''
                                        onClick={handleClick}
                                        style={{ color: Ptheme?.fontColor || theme.fontColor }}>Services</Link>
                                </li>
                                <li >
                                    <Link href="#Contact"
                                        onClick={handleClick}
                                        style={{ color: Ptheme?.fontColor || theme.fontColor }}><Call />Contact</Link>
                                </li>
                                <li >
                                    <TriggerButton
                                        type="button"
                                        onClick={handleButtonClick}
                                        onKeyDown={handleButtonKeyDown}
                                        ref={buttonRef}
                                        btnbg={theme.btnbg}
                                        aria-controls={isOpen ? 'Produits-menu' : undefined}
                                        aria-expanded={isOpen || undefined}
                                        aria-haspopup="menu"
                                    >
                                        Produits <ArrowDropDownIcon />
                                    </TriggerButton>
                                    <MenuUnstyled
                                        style={{zIndex:'100'}}
                                        actions={menuActions}
                                        open={isOpen}
                                        onClose={close}
                                        anchorEl={anchorEl}
                                        components={{ Root: Popper, Listbox: StyledListbox }}
                                        componentsProps={{ listbox: { id: 'Produits-menu' } }}
                                    >
                                        <StyledMenuItem onClick={createHandleMenuClick('Profile')}>
                                            <Link underline='none' href='/Type/Chimique'>produit-Chimique</Link>
                                        </StyledMenuItem>
                                        <StyledMenuItem onClick={createHandleMenuClick('My account')}>
                                            <Link underline='none' href='/Type/lubrifiant'>produits-lubrifiant</Link>
                                        </StyledMenuItem>
                                        <StyledMenuItem onClick={createHandleMenuClick('Log out')}>
                                            <Link underline='none' href='/Type/alimentaire'>produits-alimentaire</Link>
                                        </StyledMenuItem>
                                    </MenuUnstyled>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </Fade>
            </div>
        </header>
    )

}

export default React.memo(AppBar)