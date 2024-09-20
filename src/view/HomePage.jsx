import { useNavigate } from "react-router-dom";
import CompInsert from "../component/CompInsert";
import CompSearch from "../component/CompSearch";
import '../styles/HomePage.css'
import CompHeader from "../component/CompHeader";
import CompForm from "../component/CompForm";



function HomePage(){
    const navigate = useNavigate()
    const onSutmuit = (e) => {
        e.preventDefault()
        navigate('/insert')
    }

    return(
        <form className="homepage">
            <CompHeader/>
            <CompSearch/>
            <button onClick={(e) => onSutmuit(e)}>AGREGAR RECETA</button>
            <CompForm/> 
        </form>
    )
}


export default HomePage;