import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";
const MainLayout = dynamic(() => import("../components/layouts/MainLayout"), {
  ssr: false,
});

export default function App({ Component, pageProps: { session, ...pageProps }, router }) {
  if (router.pathname.match("/auth")) {
    return <Component {...pageProps} />;
  }
  return (
    <SessionProvider session={session}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </SessionProvider>
  );
}
