export const useCache = (city) => {

  let list = []

  let cacheSearch = localStorage.getItem('search')

  if (cacheSearch) list = JSON.parse(cacheSearch)

  if(!list.find(f => f.toLowerCase() == city.toLowerCase())) list.push(city)

  localStorage.setItem('search', JSON.stringify(list))

  return list

}