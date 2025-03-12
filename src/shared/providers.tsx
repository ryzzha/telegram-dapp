import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { ReactNode, useState } from "react";

const manifestUrl = "https://alefmanvladimir.github.io/my-twa/tonconnect-manifest.json";

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
    </TonConnectUIProvider>
  )
}