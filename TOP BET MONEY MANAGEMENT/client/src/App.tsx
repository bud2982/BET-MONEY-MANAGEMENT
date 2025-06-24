import { Switch, Route, Router as WouterRouter } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Landing from "@/pages/landing";
import Subscribe from "@/pages/subscribe";
import Plans from "@/pages/plans";
import TrialSignup from "@/pages/trial-signup";
import InviteManager from "@/pages/invite-manager";
import Pricing from "@/pages/pricing";
import Checkout from "@/pages/checkout";
import PaymentSuccess from "@/pages/payment-success";
import Account from "@/pages/account";

import StrategyPercentage from "@/pages/strategy-percentage";
import StrategyDalembert from "@/pages/strategy-dalembert";
import StrategyProfitFall from "@/pages/strategy-profitfall";
import StrategyMasaniello from "@/pages/strategy-masaniello";
import StrategyKelly from "@/pages/strategy-kelly";
import StrategyBeatDelay from "@/pages/strategy-beat-delay";
import DemoAccess from "@/pages/demo-access";
import DemoInvite from "@/pages/demo-invite";
import DemoInterface from "@/pages/demo-interface";
import DemoFull from "@/pages/demo-full";
import DemoComplete from "@/pages/demo-complete";
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";


// Protected route component for premium features (includes trial users)
function ProtectedRoute({ component: Component, ...props }: any) {
  const { isAuthenticated, isPremium, isLoading, user } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }
  
  // Allow access for premium users and trial users
  const hasAccess = isAuthenticated && (isPremium || user?.subscriptionStatus === 'trial');
  
  if (!hasAccess) {
    return <Landing />;
  }
  
  return <Component {...props} />;
}

// Router with authentication protection
function Router() {
  const { isAuthenticated, isPremium, isLoading } = useAuth();

  return (
    <Switch>
      {/* Public routes */}
      <Route path="/pricing" component={Pricing} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/payment-success" component={PaymentSuccess} />
      <Route path="/subscribe" component={Subscribe} />
      <Route path="/plans" component={Plans} />
      <Route path="/trial" component={TrialSignup} />
      <Route path="/demo" component={DemoAccess} />
      <Route path="/demo-invite" component={DemoInvite} />
      <Route path="/demo-interface" component={DemoInterface} />
      
      {/* Admin routes - for managing invites */}
      <Route path="/invites" component={props => <ProtectedRoute component={InviteManager} {...props} />} />
      
      {/* Protected routes - require authentication and premium/trial subscription */}
      <Route path="/" component={props => <ProtectedRoute component={Home} {...props} />} />
      <Route path="/account" component={props => <ProtectedRoute component={Account} {...props} />} />
      <Route path="/strategia/percentage" component={props => <ProtectedRoute component={StrategyPercentage} {...props} />} />
      <Route path="/strategia/percentuale" component={props => <ProtectedRoute component={StrategyPercentage} {...props} />} />
      <Route path="/strategia/dalembert" component={props => <ProtectedRoute component={StrategyDalembert} {...props} />} />
      <Route path="/strategia/profitfall" component={props => <ProtectedRoute component={StrategyProfitFall} {...props} />} />
      <Route path="/strategia/masaniello" component={props => <ProtectedRoute component={StrategyMasaniello} {...props} />} />
      <Route path="/strategia/kelly" component={props => <ProtectedRoute component={StrategyKelly} {...props} />} />
      <Route path="/strategia/beat-delay" component={props => <ProtectedRoute component={StrategyBeatDelay} {...props} />} />
      
      {/* Demo routes */}
      <Route path="/demo-invite" component={props => <ProtectedRoute component={DemoInvite} {...props} />} />
      <Route path="/demo/:inviteCode" component={DemoAccess} />
      <Route path="/demo-interface/:demoType" component={DemoInterface} />
      <Route path="/demo-full" component={DemoFull} />
      <Route path="/demo-complete" component={DemoComplete} />
      
      <Route path="/404" component={NotFound} />
      <Route path="/:rest*" component={NotFound} />
    </Switch>
  );
}

// Custom hook per gestire la base del pathname
function useBasePath() {
  const [basePath, setBasePath] = useState('');

  useEffect(() => {
    // Elimina eventuali slash doppi o finali
    const currentPath = window.location.pathname.replace(/\/+/g, '/').replace(/\/$/, '');
    
    // Se siamo già su un percorso noto, non dobbiamo fare nulla
    if (currentPath === '' || 
        currentPath === '/' || 
        currentPath.startsWith('/strategia')) {
      setBasePath('');
      return;
    }
    
    // Se stiamo vedendo un errore 404, torna alla homepage
    if (currentPath.includes('404')) {
      window.location.href = '/';
      return;
    }
    
    // Registra il percorso corrente
    console.log('Percorso attuale:', currentPath);
    setBasePath('');
  }, []);

  return basePath;
}

function App() {
  const basePath = useBasePath();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <WouterRouter base={basePath}>
          <Router />
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
