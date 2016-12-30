import {h, Component} from 'preact';

class Clock extends Component {
    constructor() {
        super();
        this.state.time = Date.now();
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                time: Date.now()
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render(props, state) {
        const time = new Date(state.time).toLocaleString();
        return <h1>{time}</h1>;
    }
}

export default Clock;
