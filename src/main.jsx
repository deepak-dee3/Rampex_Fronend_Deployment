import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'




//import Apps from './Frontend/Apps'
import User from './Frontend/User'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
   
    {/* <BrowserRouter>
    <NavBar/>
    </BrowserRouter> */}
    {/* <NavBar/> */}
    {/* <Deepak/> */}
    {/* <Apps/> */}
    <User/>
    
   
    
   
  </StrictMode>,
)
