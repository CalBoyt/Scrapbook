import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom"; 
import { useState } from "react";
import { logout } from "../Managers/UserProfileManager";

export const Header = ({ isLoggedIn, setIsLoggedIn }) => { 
    const [isOpen, setIsOpen] = useState(false); 
    const toggle = () => setIsOpen(!isOpen); 

    const user = JSON.parse(localStorage.getItem("userProfile"));

	return(
	<>
	<div>
		<Navbar className="bg-success" expand='md'>
			<NavbarBrand tag={RRNavLink} className="text-white" to='/'>
			<h1>
			Scrapbook
			</h1>
			</NavbarBrand>
			<Nav className="me-auto " navbar>
					{isLoggedIn && (
					<>
						<NavItem>
							<NavLink tag={RRNavLink} to='/' className="text-white">
							<h4>
							Home
							</h4>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink tag={RRNavLink} className="text-white" to='/post'> 
							<h4>
							Posts
							</h4>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink tag={RRNavLink} to='/my-posts'className="text-white">
							<h4>
							My Posts
							</h4>
							</NavLink>
						</NavItem>						
						<NavItem>
							<NavLink tag={RRNavLink} to='/postForm' className="text-white">
							<h4>
							Add Post
							</h4>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink tag={RRNavLink} to='/userprofiles' className="text-white">
							<h4>
							Users
							</h4>
							</NavLink>
						</NavItem>

						{ user && user.isAdmin == true && (
						<NavItem>
							<NavLink tag={RRNavLink} to='/new-user' className="text-white">
							<h4>
							Add User
							</h4>
							</NavLink>
						</NavItem>
						 )}

						 <Nav navbar>
							{isLoggedIn && (
								<NavItem>
									<a 
                                        aria-current='page' 
                                        className='nav-link text-white' 
                                        style={{ cursor: "pointer" }} 
                                        onClick={() => { 
                                            logout(); 
                                            setIsLoggedIn(false); 
                                        }} 
                                    > 
                                      <h4>
									  	Logout
									  </h4>   
                                    </a> 								
								</NavItem>							
							)} 
						 </Nav> 
					</>
					)}
				</Nav>
		</Navbar>
	</div>
	</>
	)
};