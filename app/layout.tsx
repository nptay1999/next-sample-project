import '../styles/app.scss';
import Toast from './Toast';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Toast />
        {children}
      </body>
    </html>
  );
}
