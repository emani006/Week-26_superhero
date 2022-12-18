import React from 'react';
import Super from './components/Super';
import superheros from './components/Superlist';

/* через класс
class App extends React.Component {
  render (){
    return (
      <div className="App">
        {
          superheros.map((hero) =>
            <Super key={hero.name} image={hero.image} name={hero.name} rating={hero.rating} description={hero.description} features={hero.features}></Super>)
        }
      </div>
    );
  }
}
*/
// через функцию
function App () {
  const superHeroCards = superheros.map((hero) => <Super key={hero.name} image={hero.image} name={hero.name} rating={hero.rating} description={hero.description} features={hero.features}></Super>)

    return (
      <div className="App">
        {superHeroCards}
      </div>
    );
  }

export default App;
