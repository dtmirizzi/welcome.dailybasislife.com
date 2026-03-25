import { BRAND, FONTS } from '../tokens';

export function CalendarDay({ day, phase, isToday, isEmpty }) {
  if (isEmpty) return <div style={{ aspectRatio: "1", borderRadius: 8 }} />;

  // If no phase (before cycle started), show gray
  if (phase === null) {
    return (
      <div style={{
        aspectRatio: "1",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5F5F5",
        border: `1.5px solid transparent`,
        cursor: "default",
      }}>
        <span style={{
          fontFamily: FONTS.body,
          fontSize: 13,
          fontWeight: 400,
          color: "#999999",
        }}>
          {day}
        </span>
      </div>
    );
  }

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
        fontFamily: FONTS.body,
        fontSize: 13,
        fontWeight: isToday ? 600 : 400,
        color: isToday ? BRAND.white : accent,
      }}>
        {day}
      </span>
    </div>
  );
}
