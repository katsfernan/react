import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';

export const SearchHeroPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search)
  
  const heroes = getHeroesByName(q);
  
  const { searchText, onInputChange, onResetForm  } = useForm({
    searchText: q
  });

  const handleSubmit = (event ) => {
    event.preventDefault();
    if ( searchText.trim().lenght <= 1 ) return;
    navigate(`?q=${ searchText}`)
  }

  const HandleAlerts = ({ q }) => {
  
    if ( q === '')  return  (<div className="alert alert-primary animate__animated animate__fadeIn"> Search a hero</div>)

    else {
      if ( heroes.length === 0) return (<div className="alert alert-danger animate__animated animate__fadeIn"> No heroes with <b>{ q }</b> </div>)
    
    }  
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">

      <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ handleSubmit}>
            <input 
              type="text" 
              className="form-control"
              name = "searchText"
              value= {searchText}
              placeholder="Search a hero" 
              autoComplete="off"
              onChange={ onInputChange }
            />

            <button className="btn btn-outline-primary mt-1">
              Search
            </button>

          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
            <HandleAlerts
              q= { q } />
          }

          {
            heroes.map( hero => (
              <HeroCard
                key={ hero.id}
                {...hero}
              />))
          }

  

        </div>
      </div>
    </>
    )
}
