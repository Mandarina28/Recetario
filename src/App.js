import './App.css';
const recipes = [
    {
      id: 1,
      name: 'Tostadas de aguacate',
      image: 'https://images.hola.com/imagenes/cocina/recetas/20200220161173/tostadas-pan-integral-aguacate/0-786-630/tostadas-integrales-t.jpg?tx=w_680',
      ingredients: ['Pan tostado', 'Aguacate', 'Sal y pimienta'],
      instructions: ['1. Tostar el pan.', '2. Machacar el aguacate.', '3. Añadir sal y pimienta al gusto.', '4. Servir el aguacate sobre el pan tostado.']
    },
    {
      id: 2,
      name: 'Batido de frutas',
      image: 'https://static2.abc.es/media/bienestar/2020/07/04/batidos-saludables-krqF--1024x512@abc.jpeg',
      ingredients: ['Plátano', 'Fresas', 'Leche', 'Azúcar al gusto'],
      instructions: ['1. Pelar el plátano y cortarlo en trozos.', '2. Lavar y cortar las fresas.', '3. En una batidora, mezclar el plátano, las fresas, la leche y el azúcar al gusto.', '4. Servir el batido en un vaso.']
    }
  ];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./logo192.png" className="App-logo" alt="logo" />
        <p>
            Recetario de Paula
        </p>
       {recipes.map(receta=> ( 

        <div>
          <img src={receta.image} />
       <h1> {receta.name} </h1>
       <p>{receta.instructions}</p> </div>
       ))} 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
