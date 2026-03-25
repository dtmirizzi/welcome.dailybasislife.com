import { BRAND, FONTS } from '../tokens';

export function SectionLabel({ children }) {
  return (
    <p style={{
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: BRAND.textSecondary,
      marginBottom: 8,
    }}>
      {children}
    </p>
  );
}

export function DisplayHeading({ children, size = 40, style = {} }) {
  return (
    <h1 style={{
      fontFamily: FONTS.display,
      fontSize: size,
      fontWeight: 400,
      lineHeight: 1.15,
      color: BRAND.textPrimary,
      ...style,
    }}>
      {children}
    </h1>
  );
}

export function SubHeading({ children, size = 22, style = {} }) {
  return (
    <h2 style={{
      fontFamily: FONTS.display,
      fontSize: size,
      fontWeight: 500,
      color: BRAND.textPrimary,
      ...style,
    }}>
      {children}
    </h2>
  );
}

export function BodyText({ children, size = 15, secondary = false, style = {} }) {
  return (
    <p style={{
      fontFamily: FONTS.body,
      fontSize: size,
      fontWeight: 400,
      lineHeight: 1.65,
      color: secondary ? BRAND.textSecondary : BRAND.textPrimary,
      ...style,
    }}>
      {children}
    </p>
  );
}
