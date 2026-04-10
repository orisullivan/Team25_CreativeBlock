import "../../globals.css";
import "./CSSFormattingGuidelines.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="body">
        <main>{children}</main> 
      </div>

  );
}