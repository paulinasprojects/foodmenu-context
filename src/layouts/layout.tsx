import { Outlet } from "react-router-dom"
import { Header } from "../components/header"

export const Layout = () => {
  return (
    <>
    <Header/>
    <main className="p-6">
      <Outlet/>
    </main>
    </>
  )
}
