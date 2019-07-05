import React from 'react'
import _ from 'lodash'

export default class TestComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  componentDidMount() {
  }


  render() {
    const { data } = this.state
    return <div>111</div>
  }
}