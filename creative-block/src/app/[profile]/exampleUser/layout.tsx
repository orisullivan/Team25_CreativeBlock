import "../../globals.css";
import "./CSSformatting.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main> 
      </body>
    </html>
  );
}