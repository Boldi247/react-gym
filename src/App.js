import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import ExerciseDetail from './pages/ExerciseDetail'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { ThemeProvider, createTheme } from '@mui/material/styles'

const font = "'Poppins', sans-serif;"

const theme = createTheme({
    typography: {
        fontFamily: font,
        button: {
            textTransform: 'none',
        },
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box width="400px" sx={{ width: { x1: '1488px' } }} m="auto">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/exercise/:id" element={<ExerciseDetail />} />
                </Routes>
                <Footer />
            </Box>
        </ThemeProvider>
    )
}

export default App