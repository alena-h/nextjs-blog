import Cursor from "../components/Cursor";
import "../styles/global.css";

export const metadata = {
  title: "My Portfolio",
  description: "A showcase of my projects and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
