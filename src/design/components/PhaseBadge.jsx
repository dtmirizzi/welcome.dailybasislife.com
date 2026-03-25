import { BRAND } from '../tokens';

export function PhaseBadge({ phase }) {
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
      {isOne ? "Replenish · Days 1–14" : "Balance · Days 15–28"}
    </span>
  );
}
