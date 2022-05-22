import React from 'react';

import { createRoot } from 'react-dom/client';
import { PortfolioApp } from './PortfolioApp';
import './styles.css';
import './resume.css';
import './estilos.css';

createRoot(
  document.getElementById('root')
).render(
  <PortfolioApp/>
)