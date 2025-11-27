import PropsCard from '../../used-components/PropsCard'
import Cards from '../props/Cards'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Product from './Components/Product'

function App() {

  const jobOpenings = [
    {
      id: 1,
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Full-time",
      tag2: "Senior Level",
      perHour: "$85",
      location: "Kathmandu, Nepal"
    },
    {
      id: 2,
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "1 week ago",
      post: "React Native Developer",
      tag1: "Full-time",
      tag2: "Mid Level",
      perHour: "$72",
      location: "Kathmandu, Nepal"
    },
    {
      id: 3,
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "3 days ago",
      post: "Backend Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      perHour: "$78",
      location: "Kathmandu, Nepal"
    },
    {
      id: 4,
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "2 weeks ago",
      post: "iOS Developer",
      tag1: "Full-time",
      tag2: "Mid Level",
      perHour: "$80",
      location: "Kathmandu, Nepal"
    },
    {
      id: 5,
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "5 days ago",
      post: "DevOps Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      perHour: "$75",
      location: "Kathmandu, Nepal"
    },
    {
      id: 6,
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "1 week ago",
      post: "UI/UX Designer",
      tag1: "Part-time",
      tag2: "Senior Level",
      perHour: "$90",
      location: "Kathmandu, Nepal"
    },
    {
      id: 7,
      brandLogo: "https://logo.clearbit.com/twitter.com",
      companyName: "Twitter",
      datePosted: "4 days ago",
      post: "Full Stack Developer",
      tag1: "Full-time",
      tag2: "Junior Level",
      perHour: "$55",
      location: "Kathmandu, Nepal"
    },
    {
      id: 8,
      brandLogo: "https://logo.clearbit.com/linkedin.com",
      companyName: "LinkedIn",
      datePosted: "3 weeks ago",
      post: "Data Scientist",
      tag1: "Full-time",
      tag2: "Senior Level",
      perHour: "$82",
      location: "Kathmandu, Nepal"
    },
    {
      id: 9,
      brandLogo: "https://logo.clearbit.com/uber.com",
      companyName: "Uber",
      datePosted: "6 days ago",
      post: "Mobile Developer",
      tag1: "Part-time",
      tag2: "Mid Level",
      perHour: "$65",
      location: "Kathmandu, Nepal"
    },
    {
      id: 10,
      brandLogo: "https://logo.clearbit.com/airbnb.com",
      companyName: "Airbnb",
      datePosted: "2 weeks ago",
      post: "Product Manager",
      tag1: "Full-time",
      tag2: "Senior Level",
      perHour: "$88",
      location: "Kathmandu, Nepal"
    }
  ];

  return (
    <>
      <div className='parent p-6 h-screen w-full flex flex-wrap gap-5 justify-between'>
        {jobOpenings.map(function (element, idx) {
          return <div key={idx}>
            <Cards
              id={element.id}
              brandLogo={element.brandLogo}
              companyName={element.companyName}
              datePosted={element.datePosted}
              post={element.post}
              tag1={element.tag1}
              tag2={element.tag2}
              perHour={element.perHour}
              location={element.location}
            />
          </div>

        })}
      </div>
    </>
  )
}

export default App
