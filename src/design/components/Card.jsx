import { BRAND } from '../tokens';

export function Card({ children, style = {} }) {
  return (
    <div style={{
      backgroundColor: BRAND.white,
      borderRadius: 12,
      border: `1px solid ${BRAND.border}`,
      padding: 24,
      ...style,
    }}>
      {children}
    </div>
  );
}
