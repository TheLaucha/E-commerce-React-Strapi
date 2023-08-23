import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"
import Product from "./pages/Product/Product"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

const Layout = () => {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products/:id",
        element: <Products></Products>,
      },
      {
        path: "/product/:id",
        element: <Product></Product>,
      },
    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
