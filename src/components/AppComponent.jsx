import Header from './header/HeaderComponent.jsx'
import NavBar from './nav/NavBar.jsx' 
import About from './about/About.jsx'
import Skills from './skills/Skills.jsx'


export default function App () {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <Skills />
    </div>
  )
}