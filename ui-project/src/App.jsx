import './App.css'
import Navbar from './Components/Section1/Navbar'
import Page1Content from './Components/Section1/Page1Content'
import RightCard from './Components/Section1/RightCard'
import Section1 from './Components/Section1/Section1'

function App() {

  const users = [
    {
      id: 1,
      image: 'https://plus.unsplash.com/premium_photo-1675713554219-222b21eb19f3?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Empowering brands with innovative, high-quality digital services that transform ideas into meaningful results and long-term business success.',
      tag: 'Satisfied'
    },

    {
      id: 2,
      image: 'https://plus.unsplash.com/premium_photo-1661777467209-d1fb895cd266?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Delivering modern, reliable digital solutions designed to help your business grow, connect with customers, and stay ahead of the competition.',
      tag: 'UnderServed'
    },

    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'We create simple, effective, and visually appealing digital experiences that make it easier for you to reach and impress your customers.',
      tag: 'Underblanked'
    }
  ]

  return (
    <>
      <div className="h-screen w-full">
        <Section1 users={users}/>
      </div>
    </>
  )
}

export default App
