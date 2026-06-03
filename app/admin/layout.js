export const metadata = {
  title: "Admin · The Barrio Café",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-surface-container-low text-on-surface">
      {children}
    </div>
  );
}
