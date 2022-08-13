import  heroes  from "../data/heroes";


export const getHeroById  = id => (heroes.find(x=>x.id === id))
export const getHeroesByOwner = owner => (heroes.filter(x=>x.owner === owner))



