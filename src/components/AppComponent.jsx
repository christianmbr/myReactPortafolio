import Header from './header/HeaderComponent.jsx'
import NavBar from './nav/NavBar.jsx' 
import About from './about/About.jsx'
import Skills from './skills/Skills.jsx'
import Footer from './footer/Footer.jsx'
import ScrollReveal from 'scrollreveal'
const anim = ScrollReveal()
anim.reveal('.anim', {
  distance: '20px',
  origin: 'left',
  duration: 500,
  reset: true,
  interval: 200,
})   

export default function App () {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <Skills />
      <Footer />
    </div>
  )
}