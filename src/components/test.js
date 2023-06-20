import React from "react";

function Test() {


    return (<>

    </>)
}

export default Test;


// React is loaded and is available as React and ReactDOM
// imports should NOT be used
class Tooltip extends React.Component {

    render(props) {
        // Write your code here

        return <div id={props.tooltipId}>
            {props.text}
        </div>;
    }
}

class App extends React.Component {
    state = {
        text: ''
    }

    onDocumentClick = (event) => {
        if (event.target.tagName === 'BUTTON') {
            this.setState({ text: event.target.textContent })
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.onDocumentClick)
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.onDocumentClick)
    }

    render() {
        return <div>
            {this.props.children}
            <Tooltip text={this.state.text} tooltipId={this.props.tooltipId} />
        </div>
    }
}

document.body.innerHTML = "<div id='root'></div><div id='tooltip'></div>";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App tooltipId={"tooltip"}>
    <button id="button1">First button</button>
    <button id="button2">Second button</button>
</App>);

setTimeout(() => {
    document.getElementById("button2").click();

    setTimeout(() => {
        console.log(document.body.innerHTML);
    }, 300);
}, 300);