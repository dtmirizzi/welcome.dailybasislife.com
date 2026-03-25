export function calculateCycleDay(lastPeriodStartDate, currentDate = new Date()) {
  if (!lastPeriodStartDate) return null;
  
  try {
    // Parse the date string as local date to avoid timezone issues
    let startDate;
    if (typeof lastPeriodStartDate === 'string' && lastPeriodStartDate.match(/^\d{4}-\d{2}-\d{2}$/)) {
      const [year, month, day] = lastPeriodStartDate.split('-').map(Number);
      startDate = new Date(year, month - 1, day);
    } else {
      startDate = new Date(lastPeriodStartDate);
    }
    
    const current = new Date(currentDate);
    
    // Validate dates
    if (isNaN(startDate.getTime()) || isNaN(current.getTime())) {
      console.error('Invalid date provided to calculateCycleDay');
      return null;
    }
    
    startDate.setHours(0, 0, 0, 0);
    current.setHours(0, 0, 0, 0);
    
    const msPerDay = 1000 * 60 * 60 * 24;
    const cycleDay = Math.floor((current - startDate) / msPerDay) + 1;
    
    return cycleDay >= 1 ? cycleDay : null;
  } catch (error) {
    console.error('Error calculating cycle day:', error);
    return null;
  }
}

export function getPhase(cycleDay) {
  if (!cycleDay || cycleDay < 1) return null;
  
  // Calculate the day within the current 28-day cycle
  const dayInCycle = ((cycleDay - 1) % 28) + 1;
  
  return dayInCycle <= 14 ? 1 : 2;
}

export function getSupplement(phase) {
  if (phase === 1) return "Replenish";
  if (phase === 2) return "Balance";
  return null;
}

export function getPhaseName(phase) {
  if (phase === 1) return "Follicular Phase";
  if (phase === 2) return "Luteal Phase";
  return null;
}

export function getDaysInPhase(cycleDay, phase) {
  if (!cycleDay || !phase) return null;
  
  // Calculate the day within the current 28-day cycle
  const dayInCycle = ((cycleDay - 1) % 28) + 1;
  
  if (phase === 1) {
    return 14 - dayInCycle + 1;
  } else {
    return 28 - dayInCycle + 1;
  }
}

export function shouldPromptNewCycle(cycleDay) {
  return cycleDay && cycleDay > 28;
}

export function getDaysRemainingInCycle(cycleDay) {
  if (!cycleDay || cycleDay < 1) return null;
  return Math.max(0, 28 - cycleDay + 1);
}
