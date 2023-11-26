import Footer from "@/components/common/Footer"
import MobileHeader from "@/components/common/MobileHeader"
import Navbar from "@/components/common/Navbar"

function BaseLayout({ children }) {
  return (
    <>
      <Navbar />
      <MobileHeader />
      <main className="container">{ children }</main>
      <Footer />
    </>
  )
}

export default BaseLayout