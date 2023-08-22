import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { loadDefaultErrorComponents } from "next/dist/server/load-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Layout = ({children}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });

    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="layout">
        {
          !loading
          ? <div className="loading">
              Загрузка...
            </div>
          : <>{children}</>
        }
      </div>
      <Footer />
    </>
  )
}

export default Layout