import { BRAND, FONTS } from '../tokens';
import logo from '../../assets/LogoBurgandy.png';

export function Navbar({ activeTab = "Today", onNavigate = () => {} }) {
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
   <img 
    src={logo}
    alt="DailyBasis" 
    style={{
      height: 40,
      width: 'auto',
      display: 'block',
    }}
   />

      <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
        {["Today", "Calendar", "Settings"].map((label) => (
          <button
            key={label}
            onClick={() => onNavigate(label.toLowerCase())}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: FONTS.body,
              fontSize: 14,
              fontWeight: activeTab === label ? 500 : 400,
              color: activeTab === label ? BRAND.textPrimary : BRAND.textSecondary,
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
