import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    capitalAnswerId: countryAndCapitalsList[0].id,
  }

  onChangeCountry = event => {
    this.setState({capitalAnswerId: event.target.value})
  }

  getCountry = () => {
    const {capitalAnswerId} = this.state
    const activeCountry = countryAndCapitalsList.find(
      each => each.id === capitalAnswerId,
    )
    return activeCountry.country
  }

  render() {
    const {capitalAnswerId} = this.state
    const country = this.getCountry(capitalAnswerId)
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="questions-card">
            <select
              className="capitals"
              value={capitalAnswerId}
              onChange={this.onChangeCountry}
            >
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is capital of which country?</p>
          </div>
          <h1 className="answer">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
