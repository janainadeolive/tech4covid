import Projects from '../sections/projects'
import Ongoing from '../sections/ongoing'
import Header from '../sections/header'
import Hero from '../sections/hero'
import Footer from '../sections/footer'

export default () => (
  <div className="app">
    <Header />
    <Hero />
    <Ongoing />
    <Projects />
    <Footer />
  </div>
)
