import React,{Component} from 'react';
class App extends Component{
    constructor(){
        super()
    }
    render(){
    return(
        <div className="App">
    <Header/>
    <MainContent/>
    <Footer/>
    </div>
    )}
}
    class Header extends Component{
        render(){
    return(    <header>MovieBooking</header>)}
    }
    class MainContent extends Component{
        render(){
        return(
            <div className="container">MainContent</div>)}  
            }
    class Footer extends Component{
        render(){
        return(
            <footer>@copyrights</footer>)}
    }

export default App;