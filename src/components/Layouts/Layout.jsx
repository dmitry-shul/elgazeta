import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "../UI/Loader/Loader";

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
          loading
          ? <div className="loader">
              <Loader />
              <div style={{marginTop: "30px"}}>Загрузка...</div>
            </div>
          : <>{children}</>
        }
      </div>
      <Footer />
    </>
  )
}

export default Layout