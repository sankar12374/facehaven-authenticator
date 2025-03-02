
import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
  withHeader?: boolean;
}

const Layout = ({ children, withHeader = true }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {withHeader && <Header />}
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout;
