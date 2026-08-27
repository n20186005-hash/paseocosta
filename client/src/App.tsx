/** Design reminder — Cartografía de ribera: preserve the calm editorial landscape across all routes. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import LegalPage from "./components/LegalPage";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Route, Switch } from "wouter";

function Router() {
  return <Switch><Route path="/" component={Home} /><Route path="/privacidad">{() => <LegalPage kind="privacy" />}</Route><Route path="/terminos">{() => <LegalPage kind="terms" />}</Route><Route path="/cookies">{() => <LegalPage kind="cookies" />}</Route><Route path="/404" component={NotFound} /><Route component={NotFound} /></Switch>;
}

function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}

export default App;
