// src/app/layout.tsx
import 'antd/dist/reset.css'; // SSR‑safe import

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
