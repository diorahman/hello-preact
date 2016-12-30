import { h, render } from 'preact';
import Hello from './components/Hello';
import Clock from './components/Clock';

const App = () => {
    return (
        <div>
        <Clock />
        <Hello />
        </div>
    );
}

render(<App />, document.body);
