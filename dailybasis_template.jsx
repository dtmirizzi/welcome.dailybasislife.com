import { useState } from "react";

// ─────────────────────────────────────────────
// DAILY BASIS — Brand Design System
// ─────────────────────────────────────────────
// DB1 / Follicular Phase → Burgundy  #6B2737
// DB2 / Luteal Phase     → Gold      #BD7C2C
// Background             → Cream     #FAF8F4
// Surface                → White     #FFFFFF
// Text Primary           → Charcoal  #1C1C1C
// Text Secondary         → Warm gray #6B6560
// Border / Divider       → #E8E2DB
//
// Fonts (load in index.html or via @import):
//   Display : "Erode", serif   ← matches brand's editorial serif
//   Body    : "Erode", sans-serif         ← clean, modern, approachable
// ─────────────────────────────────────────────

const BRAND = {
  burgundy: "#6B2737",
  burgundyLight: "#F5EBED",
  burgundyMid: "#9B3D52",
  gold: "#BD7C2C",
  goldLight: "#FBF3E8",
  goldMid: "#D99A4A",
  cream: "#FAF8F4",
  white: "#FFFFFF",
  textPrimary: "#1C1C1C",
  textSecondary: "#6B6560",
  border: "#E8E2DB",
  borderDark: "#C8C0B8",
};

// ─────────────────────────────────────────────
// FONT IMPORT — paste into your index.html <head>
// <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
// ─────────────────────────────────────────────

const globalStyles = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background-color: ${BRAND.cream};
    color: ${BRAND.textPrimary};
    font-family: 'Erode', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3, h4 {
    font-family: 'Erode', serif;
  }
`;

// ─────────────────────────────────────────────
// SHARED COMPONENTS
// ─────────────────────────────────────────────

/** Top navigation bar */
function Navbar() {
  return (
    <nav style={{
      backgroundColor: BRAND.white,
      borderBottom: `1px solid ${BRAND.border}`,
      padding: "0 24px",
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      {/* Logo */}
      <div style={{
        fontFamily: "'Erode', serif",
        fontSize: 22,
        fontWeight: 600,
        letterSpacing: "0.08em",
        color: BRAND.textPrimary,
        textTransform: "uppercase",
      }}>
        DailyBasis
      </div>

      {/* Nav Links */}
      <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
        {["Today", "Calendar", "Settings"].map((label) => (
          <button
            key={label}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Erode', sans-serif",
              fontSize: 14,
              fontWeight: 400,
              color: BRAND.textSecondary,
              letterSpacing: "0.02em",
              padding: "4px 0",
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}

/** Phase badge — burgundy or gold */
function PhaseBadge({ phase }) {
  const isOne = phase === 1;
  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      backgroundColor: isOne ? BRAND.burgundyLight : BRAND.goldLight,
      color: isOne ? BRAND.burgundy : BRAND.gold,
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      padding: "4px 12px",
      borderRadius: 100,
      border: `1px solid ${isOne ? BRAND.burgundy : BRAND.gold}`,
    }}>
      <span style={{
        width: 6,
        height: 6,
        borderRadius: "50%",
        backgroundColor: isOne ? BRAND.burgundy : BRAND.gold,
        display: "inline-block",
      }} />
      {isOne ? "DailyBasis One · Days 1–14" : "DailyBasis Two · Days 15–28"}
    </span>
  );
}

/** Primary CTA button */
function PrimaryButton({ children, color = BRAND.burgundy, onClick, style = {} }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: BRAND.white,
        border: "none",
        borderRadius: 6,
        padding: "14px 28px",
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: "0.04em",
        cursor: "pointer",
        fontFamily: "'Erode', sans-serif",
        transition: "opacity 0.15s ease",
        ...style,
      }}
      onMouseEnter={e => (e.target.style.opacity = 0.85)}
      onMouseLeave={e => (e.target.style.opacity = 1)}
    >
      {children}
    </button>
  );
}

/** Ghost / outline button */
function OutlineButton({ children, color = BRAND.burgundy, onClick, style = {} }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "transparent",
        color: color,
        border: `1.5px solid ${color}`,
        borderRadius: 6,
        padding: "13px 28px",
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: "0.04em",
        cursor: "pointer",
        fontFamily: "'Erode', sans-serif",
        transition: "all 0.15s ease",
        ...style,
      }}
    >
      {children}
    </button>
  );
}

/** Card container */
function Card({ children, style = {} }) {
  return (
    <div style={{
      backgroundColor: BRAND.white,
      borderRadius: 12,
      border: `1px solid ${BRAND.border}`,
      padding: 24,
      ...style,
    }}>
      {children}
    </div>
  );
}

/** Section divider label */
function SectionLabel({ children }) {
  return (
    <p style={{
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: BRAND.textSecondary,
      marginBottom: 8,
    }}>
      {children}
    </p>
  );
}

/** Display heading (serif) */
function DisplayHeading({ children, size = 40, style = {} }) {
  return (
    <h1 style={{
      fontFamily: "'Erode', serif",
      fontSize: size,
      fontWeight: 400,
      lineHeight: 1.15,
      color: BRAND.textPrimary,
      ...style,
    }}>
      {children}
    </h1>
  );
}

/** Sub-heading */
function SubHeading({ children, size = 22, style = {} }) {
  return (
    <h2 style={{
      fontFamily: "'Erode', serif",
      fontSize: size,
      fontWeight: 500,
      color: BRAND.textPrimary,
      ...style,
    }}>
      {children}
    </h2>
  );
}

/** Body text */
function BodyText({ children, size = 15, secondary = false, style = {} }) {
  return (
    <p style={{
      fontFamily: "'Erode', sans-serif",
      fontSize: size,
      fontWeight: 400,
      lineHeight: 1.65,
      color: secondary ? BRAND.textSecondary : BRAND.textPrimary,
      ...style,
    }}>
      {children}
    </p>
  );
}

/** Supplement phase card (DB1 or DB2) */
function SupplementCard({ phase }) {
  const isOne = phase === 1;
  const accent = isOne ? BRAND.burgundy : BRAND.gold;
  const bg = isOne ? BRAND.burgundyLight : BRAND.goldLight;
  const title = isOne ? "DailyBasis One" : "DailyBasis Two";
  const days = isOne ? "Cycle Days 1–14" : "Cycle Days 15–28";
  const phaseName = isOne ? "Follicular Phase" : "Luteal Phase";

  return (
    <div style={{
      backgroundColor: BRAND.white,
      border: `1.5px solid ${accent}`,
      borderRadius: 12,
      overflow: "hidden",
    }}>
      {/* Color band */}
      <div style={{
        backgroundColor: accent,
        padding: "16px 20px",
      }}>
        <p style={{
          fontFamily: "'Erode', sans-serif",
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.75)",
          marginBottom: 2,
        }}>
          {days}
        </p>
        <h3 style={{
          fontFamily: "'Erode', serif",
          fontSize: 26,
          fontWeight: 400,
          color: BRAND.white,
        }}>
          {title}
        </h3>
      </div>

      {/* Body */}
      <div style={{ padding: 20 }}>
        <p style={{
          fontSize: 12,
          color: accent,
          fontWeight: 500,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          marginBottom: 12,
        }}>
          {phaseName}
        </p>

        {/* Placeholder benefit items */}
        {["Supports gut gealth", "Balances energy levels", "Assists follicular development"].map((b, i) => (
          <div key={i} style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            marginBottom: 10,
          }}>
            <div style={{
              width: 18,
              height: 18,
              borderRadius: "50%",
              backgroundColor: bg,
              border: `1.5px solid ${accent}`,
              flexShrink: 0,
              marginTop: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <span style={{ fontSize: 10, color: accent }}>✓</span>
            </div>
            <BodyText secondary size={14}>{b}</BodyText>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Date input field */
function DateInput({ label, value, onChange }) {
  return (
    <div>
      <label style={{
        display: "block",
        fontFamily: "'Erode', sans-serif",
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: BRAND.textSecondary,
        marginBottom: 8,
      }}>
        {label}
      </label>
      <input
        type="date"
        value={value}
        onChange={onChange}
        style={{
          width: "100%",
          padding: "12px 14px",
          border: `1.5px solid ${BRAND.border}`,
          borderRadius: 8,
          fontFamily: "'Erode', sans-serif",
          fontSize: 15,
          color: BRAND.textPrimary,
          backgroundColor: BRAND.white,
          outline: "none",
          cursor: "pointer",
        }}
      />
    </div>
  );
}

/** Today's supplement hero block */
function TodayHero({ cycleDay = null, phase = null }) {
  const isOne = phase === 1;
  const accent = phase !== null ? (isOne ? BRAND.burgundy : BRAND.gold) : BRAND.textSecondary;
  const bg = phase !== null ? (isOne ? BRAND.burgundyLight : BRAND.goldLight) : "#F3F3F3";

  return (
    <div style={{
      backgroundColor: bg,
      borderRadius: 16,
      padding: "40px 32px",
      textAlign: "center",
      border: `1px solid ${phase !== null ? accent : BRAND.border}`,
    }}>
      <SectionLabel>Today</SectionLabel>
      {phase !== null ? (
        <>
          <DisplayHeading size={52} style={{ color: accent, marginBottom: 8 }}>
            {isOne ? "DailyBasis One" : "DailyBasis Two"}
          </DisplayHeading>
          <BodyText secondary style={{ marginBottom: 16 }}>
            Cycle Day {cycleDay} · {isOne ? "Follicular Phase" : "Luteal Phase"}
          </BodyText>
          <PhaseBadge phase={phase} />
        </>
      ) : (
        <>
          <DisplayHeading size={36} style={{ color: BRAND.textSecondary, marginBottom: 8 }}>
            Enter your cycle start date
          </DisplayHeading>
          <BodyText secondary>
            We'll let you know exactly which supplement to take each day.
          </BodyText>
        </>
      )}
    </div>
  );
}

/** Calendar day cell */
function CalendarDay({ day, phase, isToday, isEmpty }) {
  if (isEmpty) return <div style={{ aspectRatio: "1", borderRadius: 8 }} />;

  const isOne = phase === 1;
  const accent = isOne ? BRAND.burgundy : BRAND.gold;
  const bg = isOne ? BRAND.burgundyLight : BRAND.goldLight;

  return (
    <div style={{
      aspectRatio: "1",
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: isToday ? accent : bg,
      border: `1.5px solid ${isToday ? accent : "transparent"}`,
      cursor: "default",
    }}>
      <span style={{
        fontFamily: "'Erode', sans-serif",
        fontSize: 13,
        fontWeight: isToday ? 600 : 400,
        color: isToday ? BRAND.white : accent,
      }}>
        {day}
      </span>
    </div>
  );
}



/** Page layout wrapper */
function PageLayout({ children }) {
  return (
    <div style={{
      maxWidth: 480,
      margin: "0 auto",
      padding: "24px 20px 60px",
    }}>
      {children}
    </div>
  );
}

/** Horizontal divider */
function Divider({ style = {} }) {
  return (
    <hr style={{
      border: "none",
      borderTop: `1px solid ${BRAND.border}`,
      margin: "24px 0",
      ...style,
    }} />
  );
}

/** Small label chip */
function Chip({ children, color = BRAND.burgundy }) {
  return (
    <span style={{
      display: "inline-block",
      backgroundColor: color === BRAND.burgundy ? BRAND.burgundyLight : BRAND.goldLight,
      color: color,
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      padding: "3px 10px",
      borderRadius: 100,
    }}>
      {children}
    </span>
  );
}

// ─────────────────────────────────────────────
// DEMO — Template Preview
// (Replace this section with your actual app screens)
// ─────────────────────────────────────────────

export default function DailyBasisApp() {
  const [startDate, setStartDate] = useState("");

  // Example: calculate cycleDay + phase from startDate
  let cycleDay = null;
  let phase = null;
  if (startDate) {
    const start = new Date(startDate);
    const today = new Date();
    const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24)) + 1;
    if (diff >= 1 && diff <= 30) {
      cycleDay = diff;
      phase = diff <= 15 ? 1 : 2;
    }
  }

  return (
    <>
      <style>{globalStyles}</style>

      {/* Announcement bar */}
      <AnnouncementBanner>
        ✨ New DailyBasis launching soon —{" "}
        <a href="#" style={{ color: BRAND.white, textDecoration: "underline" }}>
          join the waitlist
        </a>
      </AnnouncementBanner>

      {/* Nav */}
      <Navbar />

      {/* Page content */}
      <PageLayout>

        {/* Today's hero */}
        <TodayHero cycleDay={cycleDay} phase={phase} />

        <Divider />

        {/* Cycle input */}
        <Card style={{ marginBottom: 20 }}>
          <SubHeading size={20} style={{ marginBottom: 4 }}>
            Your Cycle
          </SubHeading>
          <BodyText secondary size={14} style={{ marginBottom: 16 }}>
            Enter the first day of your last period to track your supplements.
          </BodyText>
          <DateInput
            label="First day of last period"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
          />
          <div style={{ marginTop: 16 }}>
            <PrimaryButton color={BRAND.burgundy} style={{ width: "100%" }}>
              Update Cycle Date
            </PrimaryButton>
          </div>
        </Card>

        {/* Calendar placeholder */}
        <Card style={{ marginBottom: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <SubHeading size={20}>March 2026</SubHeading>
            <div style={{ display: "flex", gap: 8 }}>
              <Chip color={BRAND.burgundy}>DB1 · Days 1–14</Chip>
              <Chip color={BRAND.gold}>DB2 · Days 15–28</Chip>
            </div>
          </div>

          {/* Day-of-week headers */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: 4,
            marginBottom: 4,
          }}>
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => (
              <div key={d} style={{
                textAlign: "center",
                fontSize: 11,
                fontWeight: 500,
                color: BRAND.textSecondary,
                letterSpacing: "0.04em",
                padding: "4px 0",
              }}>{d}</div>
            ))}
          </div>

          {/* Calendar grid — placeholder cells */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: 4,
          }}>
            {/* Empty cells for offset (example: month starts on Sunday=0 offset) */}
            {[...Array(6)].map((_, i) => (
              <CalendarDay key={`empty-${i}`} isEmpty />
            ))}
            {/* Days 1–30 */}
            {[...Array(30)].map((_, i) => (
              <CalendarDay
                key={i + 1}
                day={i + 1}
                phase={i + 1 <= 15 ? 1 : 2}
                isToday={i + 1 === 10}
                isEmpty={false}
              />
            ))}
          </div>
        </Card>

        {/* Supplement cards */}
        <SubHeading size={24} style={{ marginBottom: 16 }}>
          Your Supplements
        </SubHeading>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 24 }}>
          <SupplementCard phase={1} />
          <SupplementCard phase={2} />
        </div>

        {/* CTA */}
        <Card style={{ textAlign: "center" }}>
          <SubHeading size={22} style={{ marginBottom: 8 }}>
            Need to restock?
          </SubHeading>
          <BodyText secondary size={14} style={{ marginBottom: 16 }}>
          Go to your account or email us at <a href="mailto:hello@dailybasis.com">hello@dailybasis.com</a>.
          </BodyText>
            <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <PrimaryButton color={BRAND.burgundy}>Buy Now</PrimaryButton>
            <OutlineButton color={BRAND.gold}>Learn More</OutlineButton>
          </div>
        </Card>

      </PageLayout>
    </>
  );
}

// ─────────────────────────────────────────────
// EXPORTED DESIGN TOKENS & COMPONENTS
// Import these individually into your screens:
//
// import {
//   BRAND,
//   Navbar,
//   PhaseBadge,
//   PrimaryButton,
//   OutlineButton,
//   Card,
//   SectionLabel,
//   DisplayHeading,
//   SubHeading,
//   BodyText,
//   SupplementCard,
//   DateInput,
//   TodayHero,
//   CalendarDay,
//   AnnouncementBanner,
//   PageLayout,
//   Divider,
//   Chip,
// } from "./DailyBasisTemplate";
// ─────────────────────────────────────────────

export {
  BRAND,
  Navbar,
  PhaseBadge,
  PrimaryButton,
  OutlineButton,
  Card,
  SectionLabel,
  DisplayHeading,
  SubHeading,
  BodyText,
  SupplementCard,
  DateInput,
  TodayHero,
  CalendarDay,
  AnnouncementBanner,
  PageLayout,
  Divider,
  Chip,
};