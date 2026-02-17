import "../../globals.css";
import "./CSSformatting.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>{children}</div>
  );
}
