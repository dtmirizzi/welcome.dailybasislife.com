import { useContext } from 'react';
import { CycleContext } from '../context/CycleContext';

export function useCycle() {
  const context = useContext(CycleContext);
  
  if (!context) {
    throw new Error('useCycle must be used within a CycleProvider');
  }
  
  return context;
}
