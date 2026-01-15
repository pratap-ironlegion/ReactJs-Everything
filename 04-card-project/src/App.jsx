
import Card from './Components/Card'

const jobOpenings = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    postedAt: "5 days ago",
    title: "Senior Developer",
    jobType: ["Full Time", "Internship"],
    salary: "$500/hr",
    location: "New York",
    saved: false,
  },
  {
    id: 2,
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    postedAt: "2 days ago",
    title: "Frontend Engineer",
    jobType: ["Full Time"],
    salary: "$450/hr",
    location: "San Francisco",
    saved: true,
  },
  {
    id: 3,
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    postedAt: "1 week ago",
    title: "Backend Developer",
    jobType: ["Remote", "Contract"],
    salary: "$400/hr",
    location: "Seattle",
    saved: false,
  },
  {
    id: 4,
    company: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    postedAt: "3 days ago",
    title: "Full Stack Engineer",
    jobType: ["Full Time"],
    salary: "$550/hr",
    location: "Los Angeles",
    saved: false,
  },
  {
    id: 5,
    company: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
    postedAt: "Today",
    title: "React Developer",
    jobType: ["Internship"],
    salary: "$300/hr",
    location: "Remote",
    saved: false,
  },
];


const App = () => {
  return (
    <div className = "card-container">
      {jobOpenings.map(function(ele) {
        return <Card company = {ele.company} logo = {ele.logo} postedAt = {ele.postedAt} title = {ele.title} jobtype1 = {ele.jobType[0]}  jobtype2 = {ele.jobType[1]} salary = {ele.salary} location = {ele.location}/>
      })}
      
    </div>
  )
}

export default App
