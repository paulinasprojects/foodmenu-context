import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <>
    <main className="p-6">
      <Outlet/>
    </main>
    </>
  )
}
