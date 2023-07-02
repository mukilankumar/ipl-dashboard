// Write your code here
// Write your code here
import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {isLoading: true, teamData: []}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImgUrl: each.team_image_url,
    }))
    console.log(updatedData)
    this.setState({isLoading: false, teamData: updatedData})
  }

  renderLoading = () => {
    ;<div>
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  }

  renderTeamCard = () => {
    const {teamData} = this.state

    return (
      <ul className="list">
        {teamData.map(each => (
          <TeamCard key={each.id} teamDetails={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        <div className="bg">
          <div className="ipl-logo">
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
            />
            <h1 className="heading">IPL Dashboard</h1>
          </div>
          {isLoading ? this.renderLoading() : this.renderTeamCard()}
        </div>
      </div>
    )
  }
}

export default Home
