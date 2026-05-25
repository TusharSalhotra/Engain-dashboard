import './globals.css';

export const metadata = {
  title: 'Engain Homepage',
  description: 'Reddit marketing software landing page.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
