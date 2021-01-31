import React from 'react'

interface Props {
  api: string
  children: React.Component
}

export class index extends React.Component<Props> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  async componentDidCatch(_error: Error) {
    console.log(_error);
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    const raw = JSON.stringify({
      error: _error
    })

    const { api } = this.props

    await fetch(api + '/book/sendError', {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    })
    console.log('Request sent.')
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

export default index
