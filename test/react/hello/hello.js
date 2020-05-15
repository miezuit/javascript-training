
const name = 'Radu G'
const element = ( 
    <h1>
        Hello, {name.toUpperCase() }
    </h1>
)

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

class Clicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }

        // binding-ul este necesar pentru ca metodele claselor
        // nu sunt legate de contextul claselor
        // ci de contextul in care se executa
        // de aceea this nu va functiona daca metoda e apelata
        // ca un callback
        this.click = this.click.bind(this);
    }

    render() {
        return (
            <div>
                <h1 onClick={this.click}>
                You clicked me {this.state.count} times
                </h1>
            </div>
        )
    }

    click() {
        this.setState({
            count: this.state.count + 1
        })
    }
}

class Clock extends React.Component {
    constructor(props) {
      super(props)
      this.state = {date: new Date()}
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      )
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        this.setState({
            date: new Date()
        });
    }
}
  
ReactDOM.render(
    <Clicker />,
    document.getElementById('root')
)





