import React from "react";
import useDocumentTitle from "hooks/useDocumentTitle";
import AppHeader from "./app-header";

interface AppLayoutProps {
  children: React.ReactNode;
  title?: string;
  toggleCart: () => void;
}
const DefaultLayout = ({ title, toggleCart, children }: AppLayoutProps) => {
  const docTitle = title ? `${title} | Robo Market` : "Robo Market";
  useDocumentTitle(docTitle);
  return (
    <div data-testid="app-layout" className="w-full text-gray-700">
      <AppHeader toggleCart={toggleCart} title={docTitle} />
      {children}
    </div>
  );
};
export default DefaultLayout;
