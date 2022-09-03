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
// import logo from '../ProdImg/LOGO.png'
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
    border: 1px solid ${grey[300]};
    border-radius: 0.85em;
    padding: 7px 12px;
    line-height: 1.5;
    color: ${grey[900]};
    &:hover {
        background: ${grey[100]};
        border-color: ${grey[400]};
    }
    &.${buttonUnstyledClasses.focusVisible} {
        outline: 3px solid ${blue[100]};
    }
    `,
);
const Popper = styled(PopperUnstyled)`
    z-index: 1;
`;
function themeStyle(props) {
    return (props.theme === 'light') ? {
        hedearGrid: {
            width: '100% !important'
        },
        justifyLogo: 'start ',
        justifyNav: 'end ',
        bg: '#f5f5f5',
        btnbg: grey['600'],
        fontColor: "#000",
        top: '0'
    } : (props.theme === 'transparent') ? {
        justifyLogo: 'center',
        justifyNav: 'center ',
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
    // useEffect(() => {
    //     window.onresize = () => { console.clear(); console.log(window.innerWidth) }
    // }
    //     , []);
    useEffect(() => {
        const handleScroll = event => {
            if (window.scrollY > 900) {
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
        if (isOpen)
            setAnchorEl(null);
        else
            setAnchorEl(event.currentTarget);

    };
    const close = () => {
        setAnchorEl(null);
        buttonRef.current.focus();
    };

    return (
        <header
            className="main-header"
            style={{
                backgroundColor: Ptheme?.bg || theme.bg,
                top: Ptheme?.top || theme.top,
                boxShadow: Ptheme?.boxShadow || theme.boxShadow
            }}>
            <div className='container-fluid'>
                <div className="brand-container"
                    style={{
                        justifyContent: Ptheme?.justifyLogo || theme.justifyLogo,
                    }}>
                    <a className="logo" href="/">
                        {/* <img src={logo} width='200' alt="kamoplast.com" /> */}
                        <img src='https://ik.imagekit.io/younes6577/kamoplast/tr:w-200/Logo_PWz_J7HnRx.png' alt="kamoplast.com" />
                    </a>
                </div>
                <nav className='container-fluid'
                    style={{
                        justifyContent: Ptheme?.justifyNav || theme.justifyNav,
                    }}>
                    <Fade top>
                        <ul className="menu text-uppercase"  >
                            <li >
                                <Link href="/#home"
                                    className=""
                                    style={{ color: Ptheme?.fontColor || theme.fontColor }}>ACCUEIL</Link>
                            </li>
                            <li >
                                <Link href="#PSN"
                                    style={{ color: Ptheme?.fontColor || theme.fontColor }}>Présentation</Link>
                            </li>
                            <li >
                                <Link href="/#AboutSection"
                                    className=''
                                    style={{ color: Ptheme?.fontColor || theme.fontColor }}>Services</Link>
                            </li>
                            <li >
                                <Link href="/#Contact"
                                    style={{ color: Ptheme?.fontColor || theme.fontColor }}><Call sx={{ paddingRight: '5px' }} />Contact</Link>
                            </li>
                            <li >
                                <TriggerButton
                                    type="button"
                                    onClick={handleButtonClick}
                                    onMouseEnter={handleButtonClick}
                                    // onMouseLeave={close}
                                    ref={buttonRef}
                                    btnbg={theme.btnbg}
                                    aria-controls={isOpen ? 'Produits-menu' : undefined}
                                    aria-expanded={isOpen || undefined}
                                    aria-haspopup="menu"
                                >
                                    Produits <ArrowDropDownIcon />
                                </TriggerButton>
                                <MenuUnstyled
                                    style={{ zIndex: '1000' }}
                                    actions={menuActions}
                                    open={isOpen}
                                    onClose={close}
                                    anchorEl={anchorEl}
                                    components={{ Root: Popper, Listbox: StyledListbox }}
                                    componentsProps={{ listbox: { id: 'Produits-menu' } }}
                                >
                                    <Link underline='none' href='/Produits/Chimique'>
                                        <StyledMenuItem>
                                            produit-Chimique
                                        </StyledMenuItem>
                                    </Link>
                                    <Link underline='none' href='/Produits/Lubrifiant'>
                                        <StyledMenuItem >
                                            produits-lubrifiant
                                        </StyledMenuItem>
                                    </Link>
                                    <Link underline='none' href='/Produits/Alimentaire'>
                                        <StyledMenuItem>
                                            produits-alimentaire
                                        </StyledMenuItem>
                                    </Link>
                                </MenuUnstyled>
                            </li>
                        </ul>
                    </Fade>
                </nav>
                <input type="checkbox" id="nav-toggle" className="nav-toggle" />
                <label htmlFor="nav-toggle" className="nav-toggle-label">
                    <span></span>
                </label>
            </div>      
        </header>
    )

}

export default React.memo(AppBar)