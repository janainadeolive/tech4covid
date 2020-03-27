import Features from '../sections/features'
import Projects from '../sections/projects'
import HelpUs from '../sections/help-us'
import Ongoing from '../sections/ongoing'
import Header from '../sections/header'
import Hero from '../sections/hero'

export default () => (
  <div className="app">
    <Header />
    <Hero />
    <HelpUs />
    <Features />
    <Ongoing />
    <Projects />
  </div>
)
