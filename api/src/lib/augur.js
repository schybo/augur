import axios from 'axios'

export const augur = async () => {
  const dataResults = {}

  let userId = '2IW7VJXX-FR3M-13WW-6MKI-62KLUM3OSSWZ'
  let collection = 'men-bottoms-bike-shorts-cycling-bibs'
  let size = '&filter.size=S'
  let categoryHierarchy =
    '&filter.category_hierarchy=Men%2FBottoms%2FBike%20Shorts%20%26%20Cycling%20Bibs'
  let bgCategoryHierarchy = '&bgfilter.category_hierarchy=Men'
  let baseUrl =
    'https://rlytfz.a.searchspring.io/api/search/search.json?siteId=rlytfz'
  let collectionsBaseUrl = 'https://www.thelasthunt.com/collections/'

  // # Castelli Bib results #
  // # #################### #

  let manufacturer = '&filter.manufacturer=Castelli'

  let result = await axios.get(
    `${baseUrl}&userId=${userId}&domain=${collectionsBaseUrl}${collection}&resultsFormat=native&method=search&format=json&resultLayout=grid&resultsPerPage=48&facebook=0&intellisuggest=1${size}${manufacturer}${categoryHierarchy}${bgCategoryHierarchy}`
  )

  // console.log(result.data)
  let numberOfResults = result.data.results.length

  dataResults['castelliBibs'] = {
    message: `Number of XS Bibs that are not Castelli: ${numberOfResults}`,
    size: 'S',
    brand: 'Castelli',
    garmentType: 'Bib',
    numberOfResults: numberOfResults,
  }

  // # Other XS Bib results #
  // # #################### #

  size = '&filter.size=XS'
  manufacturer = ''

  result = await axios.get(
    `${baseUrl}&userId=${userId}&domain=${collectionsBaseUrl}${collection}&resultsFormat=native&method=search&format=json&resultLayout=grid&resultsPerPage=48&facebook=0&intellisuggest=1${size}${manufacturer}${categoryHierarchy}${bgCategoryHierarchy}`
  )
  let allXsBibs = result.data.results.length

  // manufacturer = '&filter.manufacturer=Castelli'
  result = await axios.get(
    `${baseUrl}&userId=${userId}&domain=${collectionsBaseUrl}${collection}&resultsFormat=native&method=search&format=json&resultLayout=grid&resultsPerPage=48&facebook=0&intellisuggest=1${size}${manufacturer}${categoryHierarchy}${bgCategoryHierarchy}`
  )
  let castelliXsBibs = result.data.results.length
  numberOfResults = allXsBibs - castelliXsBibs

  // print(f'Number of XS Bibs that are not Castelli: {all_xs_bibs - castelli_xs_bibs}')
  dataResults['nonCastelliBibs'] = {
    message: `Number of XS Bibs that are not Castelli: ${numberOfResults}`,
    size: 'XS',
    brand: 'Other',
    garmentType: 'Bib',
    numberOfResults: numberOfResults,
  }

  // # Castelli Medium Jerseys #
  // # ####################### #

  categoryHierarchy = '&filter.category_hierarchy=Men%2FTops%2FCycling%20Shirts'
  size = '&filter.size=M'
  manufacturer = '&filter.manufacturer=Castelli'

  result = await axios.get(
    `${baseUrl}&userId=${userId}&domain=${collectionsBaseUrl}${collection}&resultsFormat=native&method=search&format=json&resultLayout=grid&resultsPerPage=48&facebook=0&intellisuggest=1${size}${manufacturer}${categoryHierarchy}${bgCategoryHierarchy}`
  )
  let castelliMJerseys = result.data.results.length

  dataResults['castelliMJerseys'] = {
    message: `Number of Castelli Medium Jerseys: ${castelliMJerseys}`,
    size: 'M',
    brand: 'Castelli',
    garmentType: 'Jersey',
    numberOfResults: castelliMJerseys,
  }

  // # Other Small Jerseys #
  // # ################### #

  size = '&filter.size=S'
  manufacturer = ''

  result = await axios.get(
    `${baseUrl}&userId=${userId}&domain=${collectionsBaseUrl}${collection}&resultsFormat=native&method=search&format=json&resultLayout=grid&resultsPerPage=48&facebook=0&intellisuggest=1${size}${manufacturer}${categoryHierarchy}${bgCategoryHierarchy}`
  )
  let allSJerseys = result.data.results.length

  manufacturer = '&filter.manufacturer=Castelli'
  result = await axios.get(
    `${baseUrl}&userId=${userId}&domain=${collectionsBaseUrl}${collection}&resultsFormat=native&method=search&format=json&resultLayout=grid&resultsPerPage=48&facebook=0&intellisuggest=1${size}${manufacturer}${categoryHierarchy}${bgCategoryHierarchy}`
  )
  let castelliSJerseys = result.data.results.length
  numberOfResults = allSJerseys - castelliSJerseys

  dataResults['allSJerseys'] = {
    message: `Number of S Bibs that are not Castelli: ${numberOfResults}`,
    size: 'S',
    brand: 'Other',
    garmentType: 'Jersey',
    numberOfResults: numberOfResults,
  }

  // # Castelli Medium Jackets #
  // # ####################### #

  categoryHierarchy =
    '?filter.category_hierarchy=Men%2FJackets%20%26%20Vests&filter.activity=Cycling'
  size = '&filter.size=M'
  manufacturer = '&filter.manufacturer=Castelli'

  result = await axios.get(
    `${baseUrl}&userId=${userId}&domain=${collectionsBaseUrl}${collection}&resultsFormat=native&method=search&format=json&resultLayout=grid&resultsPerPage=48&facebook=0&intellisuggest=1${size}${manufacturer}${categoryHierarchy}${bgCategoryHierarchy}`
  )
  let castelliMJackets = result.data.results.length

  dataResults['castelliMJackets'] = {
    message: `Number of Castelli Medium Jackets: ${castelliMJackets}`,
    size: 'M',
    brand: 'Castelli',
    garmentType: 'Jacket',
    numberOfResults: castelliMJackets,
  }

  // # Other Small Jackets #
  // # ################### #

  size = '&filter.size=S'
  manufacturer = ''

  result = await axios.get(
    `${baseUrl}&userId=${userId}&domain=${collectionsBaseUrl}${collection}&resultsFormat=native&method=search&format=json&resultLayout=grid&resultsPerPage=48&facebook=0&intellisuggest=1${size}${manufacturer}${categoryHierarchy}${bgCategoryHierarchy}`
  )
  let allSJackets = result.data.results.length

  manufacturer = '&filter.manufacturer=Castelli'
  result = await axios.get(
    `${baseUrl}&userId=${userId}&domain=${collectionsBaseUrl}${collection}&resultsFormat=native&method=search&format=json&resultLayout=grid&resultsPerPage=48&facebook=0&intellisuggest=1${size}${manufacturer}${categoryHierarchy}${bgCategoryHierarchy}`
  )
  let castelliSJackets = result.data.results.length
  numberOfResults = allSJackets - castelliSJackets

  dataResults['otherSJackets'] = {
    message: `Number of Small Jackets that are not Castelli: ${numberOfResults}`,
    size: 'S',
    brand: 'Other',
    garmentType: 'Jacket',
    numberOfResults: numberOfResults,
  }

  return dataResults
}
