
import { Outlet } from "react-router"
import { Header } from "../Header/Header"
import Footer from "../Footer/Footer"

const Applayout = () => {
  return (
    <>
        <main className="min-h-screen">
        <Header/>
        <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default Applayout