import { BRAND, FONTS } from '../tokens';

export function DateInput({ label, value, onChange }) {
  return (
    <div>
      <label style={{
        display: "block",
        fontFamily: FONTS.body,
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
          fontFamily: FONTS.body,
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
