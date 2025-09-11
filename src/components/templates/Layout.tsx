interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `
        linear-gradient(rgba(251, 146, 60, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(251, 146, 60, 0.1) 1px, transparent 1px)
      `,
        backgroundSize: "30px 30px",
        backgroundColor: "#FFECE3",
      }}
    >
      {children}
    </div>
  );
}