import { BRAND } from '../tokens';

export function Divider({ style = {} }) {
  return (
    <hr style={{
      border: "none",
      borderTop: `1px solid ${BRAND.border}`,
      margin: "24px 0",
      ...style,
    }} />
  );
}
