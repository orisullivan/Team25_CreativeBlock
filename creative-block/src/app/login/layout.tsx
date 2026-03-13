import "../globals.css";
import "./login_form_css.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <body>
        <main>{children}</main> 
      </body>

  );
}