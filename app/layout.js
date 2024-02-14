import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata = {
  title: "Will you be my valantine?",
  description: "Will you be my valantine??",
  icons: {
    shortcut: "/pp.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/pp.jpg" type="image/x-icon" sizes="256x256"  />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
