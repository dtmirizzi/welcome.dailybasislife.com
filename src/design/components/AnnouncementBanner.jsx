import { BRAND, FONTS } from '../tokens';

export function AnnouncementBanner({ children }) {
  return (
    <div style={{
      backgroundColor: BRAND.textPrimary,
      color: BRAND.white,
      textAlign: "center",
      padding: "10px 16px",
      fontFamily: FONTS.body,
      fontSize: 13,
      letterSpacing: "0.02em",
    }}>
      {children}
    </div>
  );
}
