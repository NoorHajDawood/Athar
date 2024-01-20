import AcknowledgementsList from '@/app/acknowledgements/acknowledgements-list';
import { inter } from '@/app/ui/fonts';
import '@/app/ui/global.css';
import SideNav from '@/app/ui/sidenav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
          <div className="flex-none w-full md:w-64"><AcknowledgementsList /></div>
        </div>
      </body>
    </html>
  );
}
