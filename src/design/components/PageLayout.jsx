export function PageLayout({ children }) {
  return (
    <div style={{
      maxWidth: 480,
      margin: "0 auto",
      padding: "24px 20px 60px",
    }}>
      {children}
    </div>
  );
}
