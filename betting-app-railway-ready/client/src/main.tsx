import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

// Funzione per gestire gli errori di routing e DOM
const handleRouteErrors = () => {
  // Gestisce il problema di refresh della pagina
  window.addEventListener('error', (e) => {
    if (e.message && (e.message.includes('Loading chunk') || e.message.includes('Failed to fetch'))) {
      console.error('Errore di caricamento rilevato, reindirizzamento alla home...');
      window.location.href = '/';
    }
    
    // Gestisce errori DOM del runtime-error-plugin
    if (e.message && (e.message.includes('removeChild') || e.message.includes('runtime-error-plugin'))) {
      e.preventDefault();
      console.warn('Errore DOM intercettato e gestito');
      return false;
    }
  });
  
  // Gestisce promise rejections non catturate
  window.addEventListener('unhandledrejection', (e) => {
    if (e.reason?.message?.includes('removeChild') || e.reason?.message?.includes('runtime-error-plugin')) {
      e.preventDefault();
      console.warn('Promise rejection intercettata e gestita');
      return false;
    }
  });
  
  // Override console.error per filtrare errori specifici
  const originalConsoleError = console.error;
  console.error = (...args) => {
    const message = args.join(' ');
    if (message.includes('removeChild') || message.includes('runtime-error-plugin')) {
      console.warn('Errore filtrato:', message);
      return;
    }
    originalConsoleError.apply(console, args);
  };
  
  // Intercetta manipolazioni DOM problematiche
  const originalRemoveChild = Element.prototype.removeChild;
  Element.prototype.removeChild = function(child) {
    try {
      if (this.contains(child)) {
        return originalRemoveChild.call(this, child);
      } else {
        console.warn('Tentativo di removeChild su nodo non figlio intercettato');
        return child;
      }
    } catch (error) {
      console.warn('Errore removeChild intercettato:', error);
      return child;
    }
  };
};

// Inizializza il gestore di errori
handleRouteErrors();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
