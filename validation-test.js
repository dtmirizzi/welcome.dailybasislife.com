// Manual Calendar Validation Test
// Run this in browser console to verify calendar logic

function testCalendarDays() {
  console.log('🗓️ Calendar Days Validation Test\n');
  
  const months = [
    { name: 'January', month: 0, expected: 31 },
    { name: 'February (2023)', month: 1, year: 2023, expected: 28 },
    { name: 'February (2024 - Leap)', month: 1, year: 2024, expected: 29 },
    { name: 'March', month: 2, expected: 31 },
    { name: 'April', month: 3, expected: 30 },
    { name: 'May', month: 4, expected: 31 },
    { name: 'June', month: 5, expected: 30 },
    { name: 'July', month: 6, expected: 31 },
    { name: 'August', month: 7, expected: 31 },
    { name: 'September', month: 8, expected: 30 },
    { name: 'October', month: 9, expected: 31 },
    { name: 'November', month: 10, expected: 30 },
    { name: 'December', month: 11, expected: 31 },
  ];
  
  let allPassed = true;
  
  months.forEach(({ name, month, year = 2024, expected }) => {
    const lastDay = new Date(year, month + 1, 0);
    const actual = lastDay.getDate();
    const passed = actual === expected;
    
    if (!passed) allPassed = false;
    
    const icon = passed ? '✅' : '❌';
    console.log(`${icon} ${name}: ${actual} days (expected ${expected})`);
  });
  
  console.log('\n' + (allPassed ? '✅ All months passed!' : '❌ Some months failed!'));
  return allPassed;
}

function testCyclePhases() {
  console.log('\n🔄 Cycle Phase Validation Test\n');
  
  const tests = [
    { day: 1, expectedPhase: 1, phaseName: 'Replenish' },
    { day: 7, expectedPhase: 1, phaseName: 'Replenish' },
    { day: 14, expectedPhase: 1, phaseName: 'Replenish' },
    { day: 15, expectedPhase: 2, phaseName: 'Balance' },
    { day: 21, expectedPhase: 2, phaseName: 'Balance' },
    { day: 28, expectedPhase: 2, phaseName: 'Balance' },
    { day: 29, expectedPhase: 1, phaseName: 'Replenish (cycle 2)' },
    { day: 42, expectedPhase: 1, phaseName: 'Replenish (cycle 2)' },
    { day: 43, expectedPhase: 2, phaseName: 'Balance (cycle 2)' },
    { day: 56, expectedPhase: 2, phaseName: 'Balance (cycle 2)' },
    { day: 57, expectedPhase: 1, phaseName: 'Replenish (cycle 3)' },
    { day: 84, expectedPhase: 2, phaseName: 'Balance (cycle 3)' },
  ];
  
  let allPassed = true;
  
  tests.forEach(({ day, expectedPhase, phaseName }) => {
    const dayInCycle = ((day - 1) % 28) + 1;
    const actualPhase = dayInCycle <= 14 ? 1 : 2;
    const passed = actualPhase === expectedPhase;
    
    if (!passed) allPassed = false;
    
    const icon = passed ? '✅' : '❌';
    console.log(`${icon} Day ${day}: ${phaseName} (phase ${actualPhase})`);
  });
  
  console.log('\n' + (allPassed ? '✅ All phases correct!' : '❌ Some phases failed!'));
  return allPassed;
}

function testEdgeCases() {
  console.log('\n⚠️ Edge Case Tests\n');
  
  // Test date validity
  const invalidDate = new Date('invalid');
  const isInvalid = isNaN(invalidDate.getTime());
  console.log(isInvalid ? '✅' : '❌', 'Invalid date detected correctly');
  
  // Test far past date
  const farPast = new Date('2000-01-01');
  const today = new Date();
  const daysSince = Math.floor((today - farPast) / (1000 * 60 * 60 * 24));
  console.log('ℹ️ Days since 2000-01-01:', daysSince);
  
  // Test future date
  const future = new Date();
  future.setDate(future.getDate() + 30);
  console.log('ℹ️ 30 days in future:', future.toDateString());
  
  // Test leap year detection
  const leap2024 = new Date(2024, 1, 29);
  const leap2023 = new Date(2023, 1, 29);
  console.log(
    leap2024.getMonth() === 1 ? '✅' : '❌',
    '2024 Feb 29 is valid (leap year)'
  );
  console.log(
    leap2023.getMonth() === 2 ? '✅' : '❌',
    '2023 Feb 29 rolls over to March (not leap year)'
  );
  
  // Test year boundary
  const dec31 = new Date(2023, 11, 31);
  const jan1 = new Date(2024, 0, 1);
  const daysDiff = Math.floor((jan1 - dec31) / (1000 * 60 * 60 * 24));
  console.log(daysDiff === 1 ? '✅' : '❌', 'Year boundary calculation correct');
}

// Run all tests
console.log('='.repeat(50));
console.log('DailyBasis Tracker - Validation Tests');
console.log('='.repeat(50));

const calendarPass = testCalendarDays();
const phasePass = testCyclePhases();
testEdgeCases();

console.log('\n' + '='.repeat(50));
console.log('Overall Result:', calendarPass && phasePass ? '✅ PASS' : '❌ FAIL');
console.log('='.repeat(50));
