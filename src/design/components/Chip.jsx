import { BRAND } from '../tokens';

export function Chip({ children, color = BRAND.burgundy }) {
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
