import { FormGroup, Input, Label, Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";
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
		<Navbar className="bg-success p-3" expand='lg' >
			<NavbarBrand tag={RRNavLink} className="text-white fs-2 h1" to='/'>
			<h1>
			Scrapbook
			</h1>
			</NavbarBrand>
			<Nav className="me-auto " fill>
				{isLoggedIn && (				
					<>
					<NavItem className="">
						<NavLink tag={RRNavLink} to='/' className="text-white">
						<h3 className="p-2">
						Home
						</h3 >
						</NavLink>
					</NavItem>

					<NavItem>
						<NavLink tag={RRNavLink} to='/userprofiles' className="text-white">
						<h3 className="p-2">
						Users
						</h3 >
						</NavLink>
					</NavItem>

					{ user && user.isAdmin == true && (
					<NavItem>
						<NavLink tag={RRNavLink} to='/new-user' className="text-white">
						<h3 className="p-2">
						Add User
						</h3 >
						</NavLink>
					</NavItem>
					)}

					<NavItem>
						<NavLink tag={RRNavLink} className="text-white" to='/post'> 
						<h3 className="p-2">
						Scraps
						</h3 >
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={RRNavLink} to='/my-posts'className="text-white">
						<h3 className="p-2">
						My Scraps
						</h3 >
						</NavLink>
					</NavItem>						
					<NavItem>
						<NavLink tag={RRNavLink} to='/postForm' className="text-white">
						<h3 className="p-2">
						Add Scrap
						</h3 >
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={RRNavLink} to='/post/search' className="text-white">
						<h3 className="p-2">
						Search
						</h3 >
						</NavLink>
					</NavItem>

				</>
				)}
				</Nav>
				<Nav className="ms-auto ">
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
							<h3 className="p-2">
							Logout
							</h3 >   
						</a> 								
					</NavItem>							
				)} 

				</Nav>
		</Navbar>
	</div>
	</>
	)
};