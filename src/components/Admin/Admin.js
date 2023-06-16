import React from 'react'
import  {Link, Outlet} from 'react-router-dom'
import {Button} from '../styles/Button.style'
import {Mycontainer} from '../styles/Div.Style'




function Admin() {
  return (
    <React.Fragment>

    Admin



       <nav>
           <Link to='/admin/dashboard' >Dashboard</Link>
           <Link to='/admin/gestionpost' >GestionPost</Link>

       </nav>

       <Outlet />

       {/* <GreenButton>Test</GreenButton> 
       <VioletButton>Test</VioletButton> 
       <RedButton>Test</RedButton>  */}

       <Mycontainer>

       <Button backgrounColor="violet">Test</Button>
       <Button backgrounColor="green">Test</Button>

       <Button backgrounColor="red">Test</Button>
       <Button backgrounColor="blue">Test</Button>


       </Mycontainer>





   
   
   
   
   
   
   </React.Fragment>

  )
}

export default Admin