'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Image as BootstrapImage } from 'react-bootstrap';

export default function ProfileImage() {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="d-flex align-items-center justify-content-center rounded-circle bg-light" 
           style={{ width: '300px', height: '300px' }}>
        <span className="fs-1 fw-bold text-muted">GS</span>
      </div>
    );
  }

  return (
    <div className="position-relative" style={{ width: '300px', height: '300px' }}>
      <Image
        src="/public/profile.jpg"
        alt="Gunjan Sarkar"
        width={300}
        height={300}
        className="rounded-circle object-fit-cover shadow"
        onError={() => setError(true)}
      />
    </div>
  );
}
