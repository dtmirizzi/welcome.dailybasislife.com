import { BRAND, FONTS } from '../tokens';

export function OutlineButton({ children, color = BRAND.burgundy, onClick, style = {} }) {
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
        fontFamily: FONTS.body,
        transition: "all 0.15s ease",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
