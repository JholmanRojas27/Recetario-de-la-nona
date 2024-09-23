import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CompInsert from "../component/CompInsert";
import CompSearch from "../component/CompSearch";
import '../styles/HomePage.css';
import CompHeader from "../component/CompHeader";
import CompForm from "../component/CompForm";
import StarRating from "../component/StarRating"; // Importa el componente de estrellas

const initialRecetas = [
    {
        nombre: "Tortilla de papas",
        categoria: "dinner",
        ingredientes: ["Papas", "Huevos", "Cebolla", "Aceite"],
        tiempo: "30 min",
        dificultad: "easy",
        preparacion: "Pelar las papas, cortarlas en rodajas y freírlas. Batir los huevos y mezclar con las papas fritas. Cocinar todo en una sartén hasta dorar.",
        rating: 0 // Agrega la propiedad de calificación
    },
    {
        nombre: "Ensalada César",
        categoria: "lunch",
        ingredientes: ["Lechuga", "Pollo", "Queso parmesano", "Croutones", "Aderezo César"],
        tiempo: "20 min",
        dificultad: "easy",
        preparacion: "Cortar la lechuga y el pollo a tiras. Mezclar con el aderezo y añadir croutones y queso parmesano.",
        rating: 0 // Agrega la propiedad de calificación
    },
    {
        nombre: "Panqueques",
        categoria: "breakfast",
        ingredientes: ["Harina", "Leche", "Huevos", "Azúcar", "Mantequilla"],
        tiempo: "15 min",
        dificultad: "easy",
        preparacion: "Mezclar la harina, huevos, leche y azúcar. Cocinar en sartén con mantequilla hasta dorar por ambos lados.",
        rating: 0 // Agrega la propiedad de calificación
    }
];

function setupRecetasInLocalStorage() {
    if (!localStorage.getItem('recetas')) {
        localStorage.setItem('recetas', JSON.stringify(initialRecetas));
    }
}

function HomePage() {
    const navigate = useNavigate();
    const [recetas, setRecetas] = useState([]);

    useEffect(() => {
        setupRecetasInLocalStorage();
        const storedRecetas = JSON.parse(localStorage.getItem('recetas')) || [];
        setRecetas(storedRecetas);
    }, []);

    const onSutmuit = (e) => {
        e.preventDefault();
        navigate('/insert');
    };

    const updateRating = (index, newRating) => {
        const updatedRecetas = [...recetas];
        updatedRecetas[index].rating = newRating;
        setRecetas(updatedRecetas);
        localStorage.setItem('recetas', JSON.stringify(updatedRecetas));
    };

    return (
        <div className="homepage">
            <CompHeader />
            <CompSearch />
            <button onClick={(e) => onSutmuit(e)}>AGREGAR RECETA</button>

            <div className="recetas-container">
                {recetas.map((receta, index) => (
                    <div key={index} className="receta-card">
                        <h3>{receta.nombre}</h3>
                        <p><strong>Categoría:</strong> {receta.categoria}</p>
                        <p><strong>Tiempo:</strong> {receta.tiempo}</p>
                        <p><strong>Dificultad:</strong> {receta.dificultad}</p>
                        <p><strong>Ingredientes:</strong> {receta.ingredientes.join(', ')}</p>
                        <p><strong>Preparación:</strong> {receta.preparacion}</p>
                        {/* Componente de ranking de estrellas */}
                        <StarRating 
                            rating={receta.rating} 
                            setRating={(newRating) => updateRating(index, newRating)} 
                        />
                    </div>
                ))}
            </div>

            <CompForm />
        </div>
    );
}

export default HomePage;
