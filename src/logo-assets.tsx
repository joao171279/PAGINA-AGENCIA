import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LogoAssetsApp from './LogoAssetsApp';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LogoAssetsApp />
  </StrictMode>
);