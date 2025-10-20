import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { useThemeProvider } from "../hooks/useTheme";
import "../Main.css";
import { TooltipProvider } from "./ui";

// TODO: Add things like a header and footer
// TooltipProvider and ThemeContext are already included.

export default function Layout() {
  const ThemeProvider = useThemeProvider();

  return (
    <ThemeProvider>
      <TooltipProvider>
        <Toaster
          position="top-center"
          toastOptions={{
            className: "bg-surface-800 text-surface-100 border",
          }}
        />
        <Outlet />
      </TooltipProvider>
    </ThemeProvider>
  );
}
