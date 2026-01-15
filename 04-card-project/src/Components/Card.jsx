import { Bookmark } from "lucide-react"

const Card = (props) => {
  return (
    <div class="job-card">
 
  <div class="header">
    <img
      src={props.logo}
      alt="Company Logo"
      class="logo"
    />
    <button class="save-btn">
      Save
      <Bookmark />
    </button>
  </div>


  <div class="middle">
    <div class="meta">
      <h3 class="company">{props.company}</h3>
      <h4 class="time">{props.postedAt}</h4>
    </div>

    <h1 class="title">{props.title}</h1>

    <div class="tags">
      <h3>{props.jobtype1}</h3>
      <h3>{props.jobtype2}</h3>
    </div>
  </div>


  <div class="footer">
    <div class="salary-location">
      <h3>{props.salary}</h3>
      <h4>{props.location}</h4>
    </div>
    <button class="apply-btn">Apply Now</button>
  </div>
</div>

  )
}

export default Card
