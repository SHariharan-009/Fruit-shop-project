import { Fragment, useState } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Content from './content/Content'
import Login from './login/Login'
import './App.css'

function App() {
  return (
         <Fragment>
              <Header/>
              <Login/>
              <Content/>
              <Footer/>
         </Fragment>    
  )
}
export default App
