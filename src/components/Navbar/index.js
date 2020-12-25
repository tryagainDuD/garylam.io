import React from 'react'
import { FaBars } from 'react-icons/fa'
import { BsPerson } from 'react-icons/bs'
import { AiOutlineHome, AiOutlineFolderOpen } from 'react-icons/ai'
import { RiSettingsLine } from 'react-icons/ri'
import { BiMailSend } from 'react-icons/bi'
import { 
    Nav, 
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink
} from './NavbarElements'

const Navbar = ( {toggle} ) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">GL</NavLogo>
                    <MobileIcon onClick={ toggle }>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="home" title="Home"><AiOutlineHome /></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="about" title="About"><BsPerson /></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="skills" title="Skills"><RiSettingsLine /></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="projects" title="Projects"><AiOutlineFolderOpen /></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="contact" title="Contact"><BiMailSend /></NavLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>           
        </>
    )
}
export default Navbar