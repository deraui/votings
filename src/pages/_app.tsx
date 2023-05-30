import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";


const MyApp: AppType = ({ Component, pageProps }) => {
  return (
      <ClerkProvider {...pageProps}>
8      <Component {...pageProps} />
9    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
