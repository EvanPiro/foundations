import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { useState } from 'react';
import { Routes } from '../Routes';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Pyramid } from './icons';

const bsLinkCb = (router, route: Routes) => {
  return async (e) => {
    console.log('route hit')

    await router.push(Routes.AboutUs);
    e.stopPropagation()

  }
};

const ClassicNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar expand="xl" dark className="border-pink bg-pink-gradient pr-1 pt-0 pb-0">
      <NavbarBrand
        href={Routes.Home}
      >
        <Pyramid />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link
              href={Routes.AboutUs}
            >
              About Us
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
};

export default ClassicNav
