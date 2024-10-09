import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isProtectedRoute = router.pathname.startsWith('/app');

  return (
    <ClerkProvider>
      {isProtectedRoute ? (
        <>
          <SignedIn>
            <Component {...pageProps} />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      ) : (
        <Component {...pageProps} />
      )}
    </ClerkProvider>
  );
}
