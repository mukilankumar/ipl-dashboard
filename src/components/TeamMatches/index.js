// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    matchData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getMatchData()
  }

  getMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const latestMatch = data.latest_match_details
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        id: latestMatch.id,
        competingTeam: latestMatch.competing_team,
        competingTeamLogo: latestMatch.competing_team_logo,
        date: latestMatch.date,
        firstInnings: latestMatch.first_innings,
        secondInnings: latestMatch.second_innings,
        manOfTheMatch: latestMatch.man_of_the_match,
        matchStatus: latestMatch.match_status,
        result: latestMatch.result,
        umpires: latestMatch.umpires,
        venue: latestMatch.venue,
      },
      recentMatches: data.recent_matches.map(each => ({
        umpires: each.umpires,
        result: each.result,
        manOfTheMatch: each.man_of_the_match,
        id: each.id,
        date: each.date,
        venue: each.venue,
        competingTeam: each.competing_team,
        competingLogo: each.competing_team_logo,
        firstInnings: each.first_innings,
        secondInnings: each.second_innings,
        matchStatus: each.match_status,
      })),
    }
    this.setState({matchData: updatedData, isLoading: false})
  }

  renderTeamMatches = () => {
    const {matchData} = this.state
    const {teamBannerUrl, latestMatchDetails} = matchData
    return (
      <>
        <img src={teamBannerUrl} alt="team banner" className="banner" />
        <LatestMatch latestMatches={latestMatchDetails} />
        <div>{this.renderRecentMatchesList()}</div>
      </>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderRecentMatchesList = () => {
    const {matchData} = this.state
    const {recentMatches} = matchData

    return (
      <ul className="match-list">
        {recentMatches.map(each => (
          <MatchCard matchData={each} key={each.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={`team-match-container ${id}`}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
