import { BRAND, FONTS } from '../tokens';
import { BodyText } from './Typography';

export function SupplementCard({ phase, benefits }) {
  const isOne = phase === 1;
  const accent = isOne ? BRAND.burgundy : BRAND.gold;
  const bg = isOne ? BRAND.burgundyLight : BRAND.goldLight;
  const title = isOne ? "Replenish" : "Balance";
  const days = isOne ? "Cycle Days 1–14" : "Cycle Days 15–28";
  const phaseName = isOne ? "Follicular Phase" : "Luteal Phase";
  
  const defaultBenefits = isOne 
    ? ["Supports gut health", "Promotes energy balance", "Aids follicular development"]
    : ["Reduces inflammation", "Supports mood balance", "Helps relieve PMS symptoms"];
  
  const displayBenefits = benefits || defaultBenefits;

  return (
    <div style={{
      backgroundColor: BRAND.white,
      border: `1.5px solid ${accent}`,
      borderRadius: 12,
      overflow: "hidden",
    }}>
      <div style={{
        backgroundColor: accent,
        padding: "16px 20px",
      }}>
        <p style={{
          fontFamily: FONTS.body,
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
          fontFamily: FONTS.display,
          fontSize: 26,
          fontWeight: 400,
          color: BRAND.white,
        }}>
          {title}
        </h3>
      </div>

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

        {displayBenefits.map((b, i) => (
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
