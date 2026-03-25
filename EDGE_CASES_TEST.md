# Edge Cases & Testing Checklist for DailyBasis Tracker

## Pre-Deployment Testing Checklist

### ✅ Calendar Month Validation

**Test all months display correct number of days:**

- [ ] January: 31 days
- [ ] February: 28 days (non-leap year)
- [ ] February: 29 days (leap year - test with 2024, 2028)
- [ ] March: 31 days
- [ ] April: 30 days
- [ ] May: 31 days
- [ ] June: 30 days
- [ ] July: 31 days
- [ ] August: 31 days
- [ ] September: 30 days
- [ ] October: 31 days
- [ ] November: 30 days
- [ ] December: 31 days

**How to test:** Navigate to Calendar view and check each month

---

## Critical Edge Cases

### 1. Date Input Edge Cases

#### Invalid Dates
- [ ] **Test**: Enter future date (e.g., tomorrow's date)
  - **Expected**: App should accept it (some users track in advance)
  
- [ ] **Test**: Enter date far in the past (e.g., 1 year ago)
  - **Expected**: Cycle should repeat correctly, show current phase

- [ ] **Test**: Enter date from previous century (e.g., 1999-01-01)
  - **Expected**: Should handle gracefully, calculate correctly

- [ ] **Test**: Enter Feb 29 on a leap year (2024-02-29)
  - **Expected**: Should accept and calculate correctly

- [ ] **Test**: Try to enter Feb 29 on non-leap year (browser should prevent)
  - **Expected**: Date picker should not allow selection

- [ ] **Test**: Enter date on year boundary (Dec 31 → Jan 1)
  - **Expected**: Cycle calculation should work across years

#### Empty/Null Date States
- [ ] **Test**: Load app with no saved data
  - **Expected**: Show "Enter cycle start date" message
  
- [ ] **Test**: Clear date input and try to save
  - **Expected**: Save button should be disabled or show error

- [ ] **Test**: Reset all data
  - **Expected**: All views should show empty state, no crashes

### 2. Cycle Calculation Edge Cases

#### Phase Transitions
- [ ] **Test**: Set period start to today, verify Day 1 = Replenish
  - **Expected**: Shows Day 1, Replenish phase, burgundy color

- [ ] **Test**: Set period start 14 days ago, verify still Replenish
  - **Expected**: Shows Day 14, Replenish phase

- [ ] **Test**: Set period start 15 days ago, verify Balance phase
  - **Expected**: Shows Day 15, Balance phase, gold color

- [ ] **Test**: Set period start 28 days ago, verify Day 28 = Balance
  - **Expected**: Shows Day 28, Balance phase

- [ ] **Test**: Set period start 29 days ago, verify cycle repeats
  - **Expected**: Shows Day 29 = Day 1 of new cycle, Replenish

- [ ] **Test**: Set period start 100 days ago
  - **Expected**: Cycle repeats correctly, shows proper phase

#### Calendar Display
- [ ] **Test**: Calendar shows correct color pattern (14 burgundy, 14 gold)
  - **Expected**: First 14 days burgundy, next 14 gold, then repeats

- [ ] **Test**: Today's date is highlighted correctly
  - **Expected**: Today shows with darker background

- [ ] **Test**: Calendar grid starts on correct day of week
  - **Expected**: Empty cells before month start

- [ ] **Test**: Past dates show correct phase colors
  - **Expected**: Historical dates colored correctly

- [ ] **Test**: Future dates show correct predicted phases
  - **Expected**: Future dates show predicted cycle colors

### 3. LocalStorage Edge Cases

#### Storage Limits & Errors
- [ ] **Test**: Disable localStorage in browser
  - **Expected**: App should still work (may not persist)

- [ ] **Test**: Clear browser cache/localStorage while app is open
  - **Expected**: Data lost but no crash, shows empty state

- [ ] **Test**: Fill localStorage to capacity (rare edge case)
  - **Expected**: Should handle gracefully

- [ ] **Test**: Manually corrupt localStorage data
  ```javascript
  localStorage.setItem('dailybasis_cycle', 'invalid json')
  ```
  - **Expected**: Should catch error, reset to empty state

#### Data Migration
- [ ] **Test**: Load old data format (if upgrading)
  - **Expected**: Should migrate or handle gracefully

### 4. UI/UX Edge Cases

#### Navigation
- [ ] **Test**: Rapidly switch between tabs
  - **Expected**: No crashes, smooth transitions

- [ ] **Test**: Navigate directly to each route via URL
  - `/` or `/today`
  - `/calendar`
  - `/settings`
  - **Expected**: All routes load correctly

- [ ] **Test**: Hit browser back/forward buttons
  - **Expected**: Navigation works correctly

- [ ] **Test**: Refresh page on each view
  - **Expected**: Data persists, view reloads correctly

#### Mobile/Responsive
- [ ] **Test**: View on mobile device (or DevTools mobile view)
  - **Expected**: Layout is mobile-friendly, buttons are tappable

- [ ] **Test**: Rotate device (portrait/landscape)
  - **Expected**: Layout adjusts appropriately

- [ ] **Test**: Very small screen (320px width)
  - **Expected**: Content doesn't overflow

- [ ] **Test**: Very large screen (4K)
  - **Expected**: Max-width constraint keeps content centered

#### Date Picker Interaction
- [ ] **Test**: Open date picker on mobile
  - **Expected**: Native date picker appears

- [ ] **Test**: Select date using keyboard
  - **Expected**: Works with keyboard navigation

- [ ] **Test**: Close date picker without selecting
  - **Expected**: Previous value maintained

### 5. Performance Edge Cases

#### Long-Running App
- [ ] **Test**: Leave app open for hours
  - **Expected**: Still shows correct "today" date

- [ ] **Test**: Leave app open overnight (past midnight)
  - **Expected**: Updates to new day's supplement

#### Memory Leaks
- [ ] **Test**: Navigate between views 50+ times
  - **Expected**: No memory leaks, still responsive

### 6. Browser Compatibility

#### Cross-Browser Testing
- [ ] **Test**: Chrome (latest)
- [ ] **Test**: Safari (latest) - especially important for iPhone
- [ ] **Test**: Firefox (latest)
- [ ] **Test**: Edge (latest)
- [ ] **Test**: Safari iOS (mobile)
- [ ] **Test**: Chrome Android (mobile)

#### Browser Features
- [ ] **Test**: Browser with JavaScript disabled
  - **Expected**: Show fallback message

- [ ] **Test**: Private/Incognito mode
  - **Expected**: Works but data doesn't persist after close

### 7. Network & Deployment Edge Cases

#### Font Loading
- [ ] **Test**: Slow network connection
  - **Expected**: Fonts load eventually, no broken layout

- [ ] **Test**: Font files fail to load
  - **Expected**: Falls back to system fonts

#### Asset Loading
- [ ] **Test**: Logo fails to load
  - **Expected**: Alt text shows or graceful degradation

- [ ] **Test**: App loads offline (after initial load)
  - **Expected**: Still works with cached assets

### 8. External Link Edge Cases

- [ ] **Test**: "Go to My Account" button
  - **Expected**: Opens dailybasislife.com in new tab

- [ ] **Test**: Email link (hello@dailybasis.com)
  - **Expected**: Opens default email client

- [ ] **Test**: "Visit DailyBasis Website" link
  - **Expected**: Opens in new tab with noopener noreferrer

### 9. Timezone Edge Cases

- [ ] **Test**: User in different timezone
  - **Expected**: Dates calculate correctly based on local time

- [ ] **Test**: Travel across timezones
  - **Expected**: "Today" adjusts to local time

- [ ] **Test**: Daylight Saving Time change
  - **Expected**: Calculations remain accurate

### 10. Text & Display Edge Cases

#### Long Text
- [ ] **Test**: Very long month/year (shouldn't happen, but verify)
  - **Expected**: Doesn't break layout

#### Special Characters
- [ ] **Test**: Browser language set to non-English
  - **Expected**: App still works (currently English only)

---

## Automated Test Scenarios

### Unit Tests (Recommended for Production)

```javascript
// Example tests to implement

describe('cycleCalculations', () => {
  test('Day 1 should be Replenish', () => {
    expect(getPhase(1)).toBe(1);
  });
  
  test('Day 14 should be Replenish', () => {
    expect(getPhase(14)).toBe(1);
  });
  
  test('Day 15 should be Balance', () => {
    expect(getPhase(15)).toBe(2);
  });
  
  test('Day 28 should be Balance', () => {
    expect(getPhase(28)).toBe(2);
  });
  
  test('Day 29 should wrap to Replenish', () => {
    expect(getPhase(29)).toBe(1);
  });
  
  test('Cycle repeats every 28 days', () => {
    expect(getPhase(1)).toBe(getPhase(29));
    expect(getPhase(1)).toBe(getPhase(57));
    expect(getPhase(15)).toBe(getPhase(43));
  });
});

describe('dateHelpers', () => {
  test('January has 31 days', () => {
    const days = getCalendarGridDays(2024, 0, null);
    const actualDays = days.filter(d => !d.isEmpty);
    expect(actualDays.length).toBe(31);
  });
  
  test('February has 28 days (non-leap)', () => {
    const days = getCalendarGridDays(2023, 1, null);
    const actualDays = days.filter(d => !d.isEmpty);
    expect(actualDays.length).toBe(28);
  });
  
  test('February has 29 days (leap year)', () => {
    const days = getCalendarGridDays(2024, 1, null);
    const actualDays = days.filter(d => !d.isEmpty);
    expect(actualDays.length).toBe(29);
  });
});
```

---

## Manual Testing Steps

### Complete User Flow Test

1. **Fresh Start**
   - Clear localStorage
   - Refresh app
   - Verify empty state on all pages

2. **Set Cycle Date**
   - Go to Settings
   - Enter period start date (use current date minus 10 days)
   - Click Save
   - Verify navigation to Today view

3. **Verify Today View**
   - Check correct day number
   - Check correct phase (Replenish or Balance)
   - Check correct supplement name
   - Check days remaining count

4. **Verify Calendar View**
   - Check current month displays
   - Check correct number of days for month
   - Check today is highlighted
   - Check color pattern is correct
   - Check legend displays

5. **Update Cycle Date**
   - Go to Settings
   - Change to different date
   - Verify updates reflect everywhere

6. **Reset Data**
   - Click Reset All Data
   - Confirm reset
   - Verify all views show empty state

7. **Re-enter Data**
   - Set new cycle date
   - Verify everything works again

---

## Known Limitations (Document for Users)

1. **Single Cycle Tracking**: App assumes 28-day cycle only
2. **No Historical Tracking**: Only tracks current cycle
3. **Manual Updates**: Users must manually update period start date each cycle
4. **No Notifications**: No reminders to update cycle or take supplements
5. **Local Storage Only**: Data not synced across devices

---

## Production Deployment Checklist

- [ ] All edge cases tested
- [ ] No console errors
- [ ] No console warnings (or documented why they're safe)
- [ ] Lighthouse score reviewed (Performance, Accessibility, Best Practices, SEO)
- [ ] Mobile tested on real device
- [ ] Tested with real user data scenarios
- [ ] Error boundaries implemented (optional but recommended)
- [ ] Analytics/tracking added (if needed)
- [ ] Privacy policy/terms (if collecting data)
- [ ] Domain configured
- [ ] HTTPS enabled
- [ ] Favicon added
- [ ] Meta tags for social sharing
- [ ] App manifest for PWA (optional)

---

## Emergency Rollback Plan

If critical issues found after deployment:

1. Document the issue
2. Revert to previous version if possible
3. Fix in development
4. Re-test all edge cases
5. Re-deploy

---

## Post-Deployment Monitoring

- [ ] Monitor for JavaScript errors (use error tracking service)
- [ ] Check browser compatibility reports
- [ ] Monitor user feedback
- [ ] Check analytics for drop-off points
- [ ] Monitor performance metrics
