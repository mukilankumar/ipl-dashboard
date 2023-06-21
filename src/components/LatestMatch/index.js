// Write your code here
import './index.css'
import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestMatches} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      secondInnings,
      manOfTheMatch,
      result,
      umpires,
      venue,
    } = latestMatches
    return (
      <div className="card-container">
        <h1 className="heading">Latest Match</h1>
        <div className="card">
          <div className="logo-container">
            <div className="main">
              <p className="team-name">{competingTeam}</p>
              <p className="date">{date}</p>
              <p className="venue">{venue}</p>
              <p className="status">{result}</p>
            </div>
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="logo"
            />
          </div>
          <div className="detail-info">
            <div className="info-item">
              <p className="label">First Innings</p>
              <p className="value">{firstInnings}</p>
            </div>
            <div className="info-item">
              <p className="label">Second Innings</p>
              <p className="value">{secondInnings}</p>
            </div>
            <div className="info-item">
              <p className="label">Man Of The Match</p>
              <p className="value">{manOfTheMatch}</p>
            </div>
            <div className="info-item">
              <p className="label">Umpires</p>
              <p className="value">{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LatestMatch
