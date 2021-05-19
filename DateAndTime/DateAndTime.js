import React from 'react';
class App extends React.Component
{
   constructor()
    {
        super();
        this.state = { time : new Date().toLocaleTimeString(),
                        date : new Date().toLocaleDateString() };
    }

    componentDidMount()
    {       
        setInterval(() => {
            this.setState({time : new Date().toLocaleTimeString() })
        }, 1000)
    }
    render()
    {
        return <div align="center">
            <h3>The Current Date and Time is {this.state.date} {this.state.time}</h3>
            </div>;
    }
}
export default App;
