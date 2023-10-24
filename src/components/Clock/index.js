


import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }
  componentDidMount() {
    console.log("componentDidMount has called")
    this.timerID = setInterval(this.tick, 1000)
  }
  componentWillUnmount() {
    console.log("componentWillUnMount has called")
    clearInterval(this.timerID)
  }
  tick = () => {
    console.log("Tick is triggered")
    this.setState({
      date: new Date()
    })
  }
  render() {
    console.log("Render called")
    const { date } = this.state
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}

export default Clock