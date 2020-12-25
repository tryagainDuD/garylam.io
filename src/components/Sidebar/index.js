import React from 'react'
import { BsPerson } from 'react-icons/bs'
import { AiOutlineHome, AiOutlineFolderOpen } from 'react-icons/ai'
import { RiSettingsLine } from 'react-icons/ri'
import { BiMailSend } from 'react-icons/bi'
import { 
    SidebarContainer, 
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}><AiOutlineHome className="icon"/> Home</SidebarLink>
                    <SidebarLink to="about" onClick={toggle}><BsPerson className="icon"/>About</SidebarLink>
                    <SidebarLink to="skills" onClick={toggle}><RiSettingsLine className="icon"/>Skills</SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}><AiOutlineFolderOpen className="icon"/>Projects</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}><BiMailSend className="icon"/>Contact</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
