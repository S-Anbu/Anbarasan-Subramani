import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import App from './App'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<App />} />
                <Route path='Home/' element={<Home />} />
                <Route path='About/' element={<About />} />
                <Route path='update/' element={<Projects />} />
                <Route path='Skills/' element={<Skills />} />
                <Route path='Skills/' element={<Contact />} />
            </Routes >
        </BrowserRouter>
    )
}

export default AppRouter