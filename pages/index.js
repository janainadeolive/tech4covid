import Projects from '../sections/projects'
import Ongoing from '../sections/ongoing'
import Header from '../sections/header'
import Hero from '../sections/hero'
import Footer from '../sections/footer'
import Manifesto from '../sections/manifesto'

export default () => (
  <div className="app">
    <Header />
    <Hero />
    <Ongoing />
    <Projects />
    <Manifesto />
    <Footer />
  </div>
)
