import HeroSection from './component/HeroSection'
import About from './component/About'
import Navbar from './component/Navbar'
import AboutCollection from './component/AboutCollection'
import Achivments from './component/Achivments'
import Team from './component/Team'
import Carouzel from './component/Carouzel'
import Parallax from './component/Parallax'
import Faq from './component/Faq'
import Footer from './component/Footer'
import Form from './component/Form'
import Price from './component/Price'

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <main className="flex min-h-screen flex-col items-center mx-auto justify-center">
      <HeroSection></HeroSection>
      <About></About>
      <AboutCollection></AboutCollection>
      <Achivments title={`Pleasure in the job puts perfection in the work.`}></Achivments>
      <Team>123</Team>
      <Carouzel/>
      <Parallax/>
      <Faq/>
      <Price></Price>
      <Form></Form>
      <Footer></Footer>
    </main>
    </>
  )
}
