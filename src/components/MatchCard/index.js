// Write your code here
import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {matchData} = this.props
    const {result, competingTeam, competingLogo, matchStatus} = matchData

    return (
      <li className={`match-card ${matchStatus}`}>
        <img
          src={competingLogo}
          alt={`competing team ${competingTeam}`}
          className="logo"
        />
        <p className="name">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className="status">{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
