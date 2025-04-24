'use client';

import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      bg={isScrolled ? 'white' : 'transparent'} 
      className={`transition-all duration-300 py-2 py-lg-3 ${isScrolled ? 'shadow-sm' : ''}`}
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          className="border-0 px-0"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#about" onClick={handleNavClick} className="px-3">About</Nav.Link>
            <Nav.Link href="#experience" onClick={handleNavClick} className="px-3">Experience</Nav.Link>
            <Nav.Link href="#education" onClick={handleNavClick} className="px-3">Education</Nav.Link>
            <Nav.Link href="#projects" onClick={handleNavClick} className="px-3">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}