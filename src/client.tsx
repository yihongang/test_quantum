import * as Inferno from 'inferno'
import Component from 'inferno-component'

interface CounterState {
  counter: number
}

function handleClick(instance: MyComponent, event: MouseEvent) {
  instance.setState({ counter: instance.state.counter + 1 })
}

class MyComponent extends Component<any, CounterState> {
  constructor() {
    super()

    this.state = { counter: 0 }
  }

  render() {
    return (
      <div>
        <button onClick={Inferno.linkEvent(this, handleClick)}>
          increment
        </button>
        Count: {this.state.counter}
      </div>
    )
  }
}

Inferno.render(<MyComponent />, document.getElementById('root'))
