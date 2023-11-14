import React, { useState } from 'react';
import  {Link} from 'react-router-dom'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  
//   MDBDropdown,
//   MDBDropdownToggle,
//   MDBDropdownMenu,
//   MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand >MangaTheque</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <Link to="MangaTheque" className="nav-link">
            MangaThèque
        </Link>
                
              
            </MDBNavbarItem>
            <MDBNavbarItem>
  <Link to="/AjouterUnManga" className="nav-link">
       Ajouter Un Manga 
  </Link>
</MDBNavbarItem>

            

            <MDBNavbarItem>
              <Link to="allcatalogue" className="nav-link">
            Catalogue 
        </Link>
                
              
            </MDBNavbarItem>

            <MDBNavbarItem>
              <Link to="/Inscription" className="nav-link">
            Inscription
        </Link>
                
              
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to="/Seconnecter" className="nav-link">
            Se Connecter 
        </Link>
        
                
              
            </MDBNavbarItem>



          </MDBNavbarNav>

          {/* <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Recherche' aria-label='Search' />
            <MDBBtn color='primary'>Rechercher</MDBBtn>
          </form> */}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
