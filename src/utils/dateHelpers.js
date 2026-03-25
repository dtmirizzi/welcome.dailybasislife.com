import { format, isToday as isTodayFns, startOfDay } from 'date-fns';

export function formatDate(date, formatString = 'yyyy-MM-dd') {
  if (!date) return '';
  
  // If date is a string in YYYY-MM-DD format, parse it as local date
  if (typeof date === 'string' && date.match(/^\d{4}-\d{2}-\d{2}$/)) {
    const [year, month, day] = date.split('-').map(Number);
    const localDate = new Date(year, month - 1, day);
    return format(localDate, formatString);
  }
  
  return format(new Date(date), formatString);
}

export function isToday(date) {
  if (!date) return false;
  return isTodayFns(new Date(date));
}

export function generateCalendarDays(lastPeriodStartDate, currentDate = new Date()) {
  if (!lastPeriodStartDate) return [];
  
  const startDate = new Date(lastPeriodStartDate);
  const current = new Date(currentDate);
  const days = [];
  
  // Generate days for display (can go beyond 28 days)
  for (let i = 0; i < 56; i++) {
    const dayDate = new Date(startDate);
    dayDate.setDate(startDate.getDate() + i);
    
    const cycleDay = i + 1;
    const dayInCycle = ((cycleDay - 1) % 28) + 1;
    const phase = dayInCycle <= 14 ? 1 : 2;
    const today = startOfDay(dayDate).getTime() === startOfDay(current).getTime();
    
    days.push({
      date: dayDate,
      cycleDay,
      phase,
      isToday: today,
    });
  }
  
  return days;
}

export function getCalendarGridDays(year, month, lastPeriodStartDate) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDayOfWeek = firstDay.getDay();
  const daysInMonth = lastDay.getDate();
  
  const calendarDays = [];
  
  for (let i = 0; i < startDayOfWeek; i++) {
    calendarDays.push({ isEmpty: true });
  }
  
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const today = isToday(date);
    
    let cycleDay = null;
    let phase = null;
    
    if (lastPeriodStartDate) {
      // Parse the date string as local date to avoid timezone issues
      let startDate;
      if (typeof lastPeriodStartDate === 'string' && lastPeriodStartDate.match(/^\d{4}-\d{2}-\d{2}$/)) {
        const [y, m, d] = lastPeriodStartDate.split('-').map(Number);
        startDate = new Date(y, m - 1, d);
      } else {
        startDate = new Date(lastPeriodStartDate);
      }
      
      startDate.setHours(0, 0, 0, 0);
      const current = new Date(date);
      current.setHours(0, 0, 0, 0);
      
      const msPerDay = 1000 * 60 * 60 * 24;
      const calculatedDay = Math.floor((current - startDate) / msPerDay);
      
      if (calculatedDay >= 0) {
        cycleDay = calculatedDay + 1;
        // Calculate phase based on repeating 28-day cycle
        const dayInCycle = ((cycleDay - 1) % 28) + 1;
        phase = dayInCycle <= 14 ? 1 : 2;
      }
    }
    
    calendarDays.push({
      day,
      date,
      cycleDay,
      phase,
      isToday: today,
      isEmpty: false,
    });
  }
  
  return calendarDays;
}
