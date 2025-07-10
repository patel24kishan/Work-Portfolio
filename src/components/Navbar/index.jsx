import {React,useEffect,useState} from 'react';
import { Nav, NavLink, NavContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavBarStyledComponents';
import {DiCssdeck} from 'react-icons/di';
import {FaBars} from 'react-icons/fa';
import Logo from '../../images/Logo-cloud.png';
import { useTheme } from 'styled-components';
import { Bio } from '../../data/constants'; 
import { Button } from '@mui/material';

const Navbar=()=>{

    const [open,setOpen]= useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const theme= useTheme();

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
          if (window.innerWidth > 768) {
            setOpen(false);
          }
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    return (
    <Nav>
        <NavContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
          <img src={Logo} width={50} height={50} href="/" /> <Span> Kishan Kahodariya</Span>
          </a>
        </NavLogo>
            <MobileIcon>
               <FaBars
               onClick={()=>{
                console.log(open);
                setOpen(!open);
               }}/>
            </MobileIcon>
            <NavItems>
                <NavLink href="#about">About</NavLink>
                <NavLink href='#projects'>Projects</NavLink>
                <NavLink href='#experience'>Experience</NavLink>
                <NavLink href='#skills'>Skills</NavLink>
                <NavLink href='#education'>Education</NavLink>
            </NavItems>
            <ButtonContainer>

                <GitHubButton href={Bio.linkedin}>Contact</GitHubButton>
            </ButtonContainer>
        {
            open && 
            <MobileMenu open={open}> 
             <MobileLink href="#about" 
             onClick={() => {
             setOpen(!open);
            }}>About</MobileLink>

            <MobileLink href='#projects' 
            onClick={() => {
             setOpen(!open);
            }}>Projects</MobileLink>

            <MobileLink href='#experience' 
            onClick={() => {
             setOpen(!open);
            }}>Experience</MobileLink>

            <MobileLink href='#skills' 
            onClick={() => {
             setOpen(!open);
            }}>Skills</MobileLink>

            <MobileLink href='#education' 
            onClick={() => {
             setOpen(!open);
            }}>Education</MobileLink>

            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.linkedin} target="_blank">
                
            </GitHubButton>
            </MobileMenu> 
        }
        </NavContainer>
    </Nav>
    );
}

export default Navbar;