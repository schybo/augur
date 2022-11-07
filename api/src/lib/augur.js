import axios from 'axios'

export const augur = async () => {
  let userId = '2IW7VJXX-FR3M-13WW-6MKI-62KLUM3OSSWZ'
  let collection = 'men-bottoms-bike-shorts-cycling-bibs'
  let size = '&filter.size=S'
  let categoryHierarchy =
    '&filter.category_hierarchy=Men%2FBottoms%2FBike%20Shorts%20%26%20Cycling%20Bibs'
  let bgCategoryHierarchy = '&bgfilter.category_hierarchy=Men'
  let baseUrl =
    'https://rlytfz.a.searchspring.io/api/search/search.json?siteId=rlytfz'
  let collectionsBaseUrl = 'https://www.thelasthunt.com/collections/'
  let manufacturer = '&filter.manufacturer=Castelli'

  const result = await axios.get(
    `${baseUrl}&userId=${userId}&domain=${collectionsBaseUrl}${collection}&resultsFormat=native&method=search&format=json&resultLayout=grid&resultsPerPage=48&facebook=0&intellisuggest=1${size}${manufacturer}${categoryHierarchy}${bgCategoryHierarchy}`
  )

  console.log(result.data)
  console.log(result.data.results.length)

  return result.data.results.length
}
