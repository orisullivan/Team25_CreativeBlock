import "../../globals.css";
import "./CSSformatting.css";
import Header from '../../../components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div>
        <Header />
        <main>{children}</main> 
      </div>
  );
}
