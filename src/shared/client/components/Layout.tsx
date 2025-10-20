import { Outlet } from "react-router-dom";
import { useThemeProvider } from "../hooks/useTheme";
import "../Main.css";
import { Toaster, TooltipProvider } from "./ui";

// TODO: Add things like a header and footer
export default function Layout() {
  const ThemeProvider = useThemeProvider();

  return (
    <ThemeProvider>
      <TooltipProvider>
        <Toaster position="top-center" />
        <Outlet />
      </TooltipProvider>
    </ThemeProvider>
  );
}
