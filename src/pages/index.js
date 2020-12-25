import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Home from '../components/Home'
import About from '../components/About'
import Skill from '../components/Skill'
import { ContentContainer } from './MasterElements'

const Master = () => {

    // State
    const [isOpen, setIsOpen] = useState(false)

    // Function
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ContentContainer>
                <Home />
                <About />
                <Skill />
            </ContentContainer>
        </>
    )
}

export default Master