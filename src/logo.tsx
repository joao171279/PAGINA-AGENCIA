import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LogoApp from './LogoApp';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LogoApp />
  </StrictMode>
);