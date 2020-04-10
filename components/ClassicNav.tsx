import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown
} from 'reactstrap';
import { useState } from 'react';
import { Routes } from '../Routes';
import { useRouter } from 'next/router';

const ClassicNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()
  const toggle = () => setIsOpen(!isOpen);
  const direct = (route: Routes) => router.push(route);

  return (
    <Navbar color="light" light expand="xl" className="border-pink">
      <NavbarBrand href="/">Foundations</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Students
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={() => direct(Routes.StudentsLily)}>
                Lily
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => direct(Routes.StudentsAlly)}>
                Ally
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Lessons
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={() => direct(Routes.LessonsSortingFruit)}>
                Sorting Fruit
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => direct(Routes.LessonsAggregateCorona)}>
                Corona Aggregates
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink href="https://github.com/EvanPiro/foundations">GitHub</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
};

export default ClassicNav
