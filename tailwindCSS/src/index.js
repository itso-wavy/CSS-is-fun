import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './css/tailwind.css';

document.querySelector('body').className = 'bg-gray-200';

createRoot(document.getElementById('root')).render(<App />);
