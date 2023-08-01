import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <div className="layout">
        <div className="container">
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout