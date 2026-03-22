import "../../globals.css";
import "../login_form_css.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className = "body">
        <div>{children}</div> 
      </div>

  );
}