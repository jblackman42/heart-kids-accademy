import Navbar from './Navbar'
import Footer from './Footer'
import Banner from './Banner'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Banner />
      <main>{children}</main>
      <Footer />
    </>
  )
}