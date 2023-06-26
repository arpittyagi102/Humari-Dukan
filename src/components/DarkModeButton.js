import React from 'react'
import { useContext } from 'react'
import { DarkModeContext, SetDarkModeContext } from '../App'

export const DarkModeButton = () => {
    const setMode = useContext(SetDarkModeContext)
    const mode = useContext(DarkModeContext)
    const handleMode = () => {
        if(mode === 'dark'){
            setMode('light')
        }
        else{
            setMode('dark')
        }
    }
  return (
    <button type="button" className={`btn btn-outline-${mode === 'dark' ? 'light' : 'dark'} btn-lg`} onClick={handleMode}>{mode === 'dark' ? 'Light Mode' : 'Dark Mode'}</button>
    
  )
}
