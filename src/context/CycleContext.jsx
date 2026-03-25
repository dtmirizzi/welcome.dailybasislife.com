import { createContext, useState, useEffect, useMemo } from 'react';
import { 
  calculateCycleDay, 
  getPhase, 
  getSupplement, 
  getPhaseName,
  getDaysInPhase,
  shouldPromptNewCycle,
  getDaysRemainingInCycle
} from '../utils/cycleCalculations';
import { saveCycleData, loadCycleData, clearCycleData } from '../utils/storage';

export const CycleContext = createContext(null);

export function CycleProvider({ children }) {
  const [lastPeriodEndDate, setLastPeriodEndDate] = useState(null);
  const [cycleLength, setCycleLength] = useState(28);

  useEffect(() => {
    const data = loadCycleData();
    if (data) {
      setLastPeriodEndDate(data.lastPeriodEndDate || data.startDate);
      setCycleLength(data.cycleLength || 28);
    }
  }, []);

  const cycleData = useMemo(() => {
    const cycleDay = calculateCycleDay(lastPeriodEndDate);
    const phase = getPhase(cycleDay);
    const supplement = getSupplement(phase);
    const phaseName = getPhaseName(phase);
    const daysInPhase = getDaysInPhase(cycleDay, phase);
    const needsNewCycle = shouldPromptNewCycle(cycleDay);
    const daysRemaining = getDaysRemainingInCycle(cycleDay);

    return {
      lastPeriodEndDate,
      cycleDay,
      phase,
      supplement,
      phaseName,
      daysInPhase,
      needsNewCycle,
      daysRemaining,
      cycleLength,
    };
  }, [lastPeriodEndDate, cycleLength]);

  const updateEndDate = (newEndDate) => {
    setLastPeriodEndDate(newEndDate);
    saveCycleData({ lastPeriodEndDate: newEndDate, cycleLength });
  };

  const updateCycleLength = (newLength) => {
    setCycleLength(newLength);
    saveCycleData({ lastPeriodEndDate, cycleLength: newLength });
  };

  const resetCycle = () => {
    setLastPeriodEndDate(null);
    setCycleLength(28);
    clearCycleData();
  };

  const value = {
    ...cycleData,
    updateEndDate,
    updateCycleLength,
    resetCycle,
  };

  return (
    <CycleContext.Provider value={value}>
      {children}
    </CycleContext.Provider>
  );
}
