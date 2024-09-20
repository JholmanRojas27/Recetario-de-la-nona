import '../styles/CompHeader.css'
import logo from '../img/logo.jpg'

function CompHeader(){
    return(
    <header className="comp-header">
        <img src={logo}/>
    </header>
    )
}

export default CompHeader;