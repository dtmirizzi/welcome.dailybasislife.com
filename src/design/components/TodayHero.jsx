import { BRAND } from '../tokens';
import { SectionLabel, DisplayHeading, BodyText } from './Typography';
import { PhaseBadge } from './PhaseBadge';

export function TodayHero({ cycleDay = null, phase = null }) {
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
            {isOne ? "Replenish" : "Balance"}
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
