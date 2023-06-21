// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImgUrl} = teamDetails

  return (
    <Link className="nav-link" to={`/team-matches/${id}`}>
      <li className="team-card">
        <img className="img" src={teamImgUrl} alt={name} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
