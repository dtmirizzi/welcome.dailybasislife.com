# Daily Basis — Cycle Tracking App

## Overview

The Daily Basis app is a companion tool for users of the [DailyBasis supplement system](https://www.dailybasislife.com) — the first cycle-synced, all-in-one supplement designed for women. The app helps users know exactly which supplement to take each day based on where they are in their menstrual cycle.

---

## The DailyBasis Supplement System

DailyBasis is a two-part supplement system built around the natural hormonal phases of the menstrual cycle:

| Product | Cycle Days | Phase | Purpose |
|---|---|---|---|
| **DailyBasis One (DB1)** | Days 1–14 | Follicular Phase | Gut health, energy balance, follicular development |
| **DailyBasis Two (DB2)** | Days 15–28 | Luteal Phase | Anti-inflammation, mood support, PMS symptom relief |

Because the body's nutritional needs shift throughout the month, DailyBasis formulated two distinct blends to deliver the right nutrients at the right time.

---

## App Purpose

The app removes the guesswork. Users enter the **first day of their last period**, and the app:

1. Calculates what cycle day they are currently on
2. Tells them whether to take **DB1** or **DB2** today
3. Displays a **calendar view** showing the full cycle month, color-coded by which supplement to take on each day
4. Automatically rolls over to the next cycle once ~30 days have passed

---

## Core Features

### 1. Cycle Day Calculator
- User inputs the **start date of their last period**
- App computes the current cycle day (Day 1 = first day of bleeding)
- Displays a clear daily recommendation: **"Take DailyBasis One"** or **"Take DailyBasis Two"**

### 2. Today's Dashboard
- Prominent display of today's supplement
- Current cycle day and phase name (Follicular / Luteal)
- Days remaining in current phase
- Visual color indicator: **Burgundy** for DB1, **Gold** for DB2

### 3. Cycle Calendar
- Monthly calendar view color-coded by supplement phase
  - **Burgundy** = Days 1–14 (DB1 / Follicular)
  - **Gold** = Days 15–28 (DB2 / Luteal)
- Today's date is highlighted
- Users can see their full upcoming supplement schedule at a glance

### 4. Cycle Settings
- Input or update the last period start date at any time
- Optional: set a custom cycle length (default: 30 days)
- Data persisted locally so the app remembers returning users

---

## User Flow

```
1. First Launch
   └─> User enters: "when was the first day of your last period?"
       └─> App calculates current cycle day
           └─> Dashboard shows today's supplement + calendar

2. Daily Use
   └─> Open app → See today's supplement recommendation instantly
       └─> Check calendar for upcoming days

3. New Cycle
   └─> User updates their period start date
       └─> Calendar and recommendations reset accordingly
```

---

## Design Language

The app mirrors the DailyBasis brand identity:

- **Colors:**
  - DB1 / Replish: `#781C45` (Burgundy)
  - DB2 / Balance : `#BD7C2C` (Orange)
  - Background: Soft off-white / cream `#FAF8F5`
  - Text: Deep charcoal `#1A1A1A`
- **Fonts:** Clean, modern serif + sans-serif pairing (consistent with brand)
- **Tone:** Warm, science-backed, empowering — not clinical

---

## Tech Stack (Recommended)

| Layer | Technology |
|---|---|
| Frontend | React (JSX) + Tailwind CSS |
| State | React `useState` / `useEffect` |
| Storage | `localStorage` for persisting cycle start date |
| Routing | React Router (if multi-page) |
| Date Logic | Native JS `Date` or `date-fns` library |

---

## Cycle Day Calculation Logic

```js
// Example logic
const cycleStartDate = new Date(userInputDate);
const today = new Date();
const msPerDay = 1000 * 60 * 60 * 24;
const cycleDay = Math.floor((today - cycleStartDate) / msPerDay) + 1;

const supplement = cycleDay <= 15 ? "DailyBasis One" : "DailyBasis Two";
const phase = cycleDay <= 15 ? "Follicular Phase" : "Luteal Phase";
```

> **Note:** If `cycleDay > 30`, the app should prompt the user to update their period start date for a new cycle.

---

## Future Enhancements

- Push notifications / reminders to take supplements each morning
- Symptom tracker (energy, mood, bloating, etc.) tied to cycle day
- Insights dashboard showing patterns over multiple cycles
- Integration with Apple Health / Google Fit
- Waitlist / account system synced with DailyBasis subscription cadence

---

## Brand Notes

- DailyBasis is **third-party tested** and **developed by health experts**
- The app should reinforce trust with science-forward language and clean UI
- Always refer to cycle days — not generic "week 1/week 2" language
- Messaging should feel empowering and educational, never alarming

---

*For more information on the DailyBasis supplement system, visit [dailybasislife.com](https://www.dailybasislife.com)*