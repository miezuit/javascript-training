
class Clicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clicks: 0
        }
    }
    render() {
        return (
            <button onClick={ this.handleClick() }>
                You clicked me { this.state.clicks } times
            </button>
        )
    }
    handleClick = () => {
        this.setState({
            clicks: this.state.clicks + 1
        })
    }
}

ReactDOM.render(
    <Clicker />,
    document.getElementById('root')
)