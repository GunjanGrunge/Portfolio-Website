'use client';

import { Container } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container className="text-center">
        <p className="mb-0">
          Made with <FaHeart className="text-danger mx-1" /> by Gunjan Sarkar
        </p>
        <p className="small text-muted mb-0">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </Container>
    </footer>
  );
}
