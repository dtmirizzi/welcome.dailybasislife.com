import { BRAND, FONTS } from '../tokens';

export function PrimaryButton({ children, color = BRAND.burgundy, onClick, style = {}, disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: color,
        color: BRAND.white,
        border: "none",
        borderRadius: 6,
        padding: "14px 28px",
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: "0.04em",
        cursor: disabled ? "not-allowed" : "pointer",
        fontFamily: FONTS.body,
        transition: "opacity 0.15s ease",
        opacity: disabled ? 0.5 : 1,
        ...style,
      }}
      onMouseEnter={e => !disabled && (e.target.style.opacity = 0.85)}
      onMouseLeave={e => !disabled && (e.target.style.opacity = 1)}
    >
      {children}
    </button>
  );
}
