// src/app/page.tsx
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'


export default function Home() {
  return (
    <>
      
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}
