import requests


# Castelli Small Bib results #
# ########################## #
userId = '2IW7VJXX-FR3M-13WW-6MKI-62KLUM3OSSWZ'
collection = 'men-bottoms-bike-shorts-cycling-bibs'
size = '&filter.size=S'
category_hierarchy = '&filter.category_hierarchy=Men%2FBottoms%2FBike%20Shorts%20%26%20Cycling%20Bibs'
bg_category_hierarchy = '&bgfilter.category_hierarchy=Men'
baseUrl = 'https://rlytfz.a.searchspring.io/api/search/search.json?siteId=rlytfz'
collectionsBaseUrl = 'https://www.thelasthunt.com/collections/'
manufacturer = '&filter.manufacturer=Castelli'
r = requests.get(f'{baseUrl}&userId={userId}&domain={collectionsBaseUrl}{collection}&resultsFormat=native&method=search&format=json&resultLayout=grid&resultsPerPage=48&facebook=0&intellisuggest=1{size}{manufacturer}{category_hierarchy}{bg_category_hierarchy}')

# print(r.status_code)
print(f'Number of Castelli Small Bibs: {len(r.json()["results"])}')

# Other XS Bib results #
# #################### #

size = '&filter.size=XS'
manufacturer = ''

r = requests.get(f'{baseUrl}&userId={userId}&domain={collectionsBaseUrl}{collection}&resultsFormat=native&method=search&format=json&resultLayout=grid&resultsPerPage=48&facebook=0&intellisuggest=1{size}{manufacturer}{category_hierarchy}{bg_category_hierarchy}')
all_xs_bibs = len(r.json()["results"])

manufacturer = '&filter.manufacturer=Castelli'
r = requests.get(f'{baseUrl}&userId={userId}&domain={collectionsBaseUrl}{collection}&resultsFormat=native&method=search&format=json&resultLayout=grid&resultsPerPage=48&facebook=0&intellisuggest=1{size}{manufacturer}{category_hierarchy}{bg_category_hierarchy}')
castelli_xs_bibs = len(r.json()["results"])

# print(r.status_code)
print(f'Number of XS Bibs that are not Castelli: {all_xs_bibs - castelli_xs_bibs}')

# Castelli Medium Jerseys #
# ####################### #

category_hierarchy = '&filter.category_hierarchy=Men%2FTops%2FCycling%20Shirts'
size = '&filter.size=M'
manufacturer = '&filter.manufacturer=Castelli'

r = requests.get(f'{baseUrl}&userId={userId}&domain={collectionsBaseUrl}{collection}&resultsFormat=native&method=search&format=json&resultLayout=grid&resultsPerPage=48&facebook=0&intellisuggest=1{size}{manufacturer}{category_hierarchy}{bg_category_hierarchy}')
castelli_m_jerseys = len(r.json()["results"])

print(f'Number of Castelli Medium Jerseys: {len(r.json()["results"])}')

# Other Small Jerseys #
# ################### #

size = '&filter.size=S'
manufacturer = ''

r = requests.get(f'{baseUrl}&userId={userId}&domain={collectionsBaseUrl}{collection}&resultsFormat=native&method=search&format=json&resultLayout=grid&resultsPerPage=48&facebook=0&intellisuggest=1{size}{manufacturer}{category_hierarchy}{bg_category_hierarchy}')
all_s_jerseys = len(r.json()["results"])

manufacturer = '&filter.manufacturer=Castelli'
r = requests.get(f'{baseUrl}&userId={userId}&domain={collectionsBaseUrl}{collection}&resultsFormat=native&method=search&format=json&resultLayout=grid&resultsPerPage=48&facebook=0&intellisuggest=1{size}{manufacturer}{category_hierarchy}{bg_category_hierarchy}')
castelli_s_jerseys = len(r.json()["results"])

print(f'Number of S Bibs that are not Castelli: {all_s_jerseys - castelli_s_jerseys}')

# Castelli Medium Jackets #
# ####################### #

category_hierarchy = '?filter.category_hierarchy=Men%2FJackets%20%26%20Vests&filter.activity=Cycling'
size = '&filter.size=M'
manufacturer = '&filter.manufacturer=Castelli'

r = requests.get(f'{baseUrl}&userId={userId}&domain={collectionsBaseUrl}{collection}&resultsFormat=native&method=search&format=json&resultLayout=grid&resultsPerPage=48&facebook=0&intellisuggest=1{size}{manufacturer}{category_hierarchy}{bg_category_hierarchy}')
castelli_m_jackets = len(r.json()["results"])

print(f'Number of Castelli Medium Jackets: {len(r.json()["results"])}')


# Other Small Jackets #
# ################### #

size = '&filter.size=S'
manufacturer = ''

r = requests.get(f'{baseUrl}&userId={userId}&domain={collectionsBaseUrl}{collection}&resultsFormat=native&method=search&format=json&resultLayout=grid&resultsPerPage=48&facebook=0&intellisuggest=1{size}{manufacturer}{category_hierarchy}{bg_category_hierarchy}')
all_s_jackets = len(r.json()["results"])

manufacturer = '&filter.manufacturer=Castelli'
r = requests.get(f'{baseUrl}&userId={userId}&domain={collectionsBaseUrl}{collection}&resultsFormat=native&method=search&format=json&resultLayout=grid&resultsPerPage=48&facebook=0&intellisuggest=1{size}{manufacturer}{category_hierarchy}{bg_category_hierarchy}')
castelli_s_jackets = len(r.json()["results"])

print(f'Number of Small Jackets that are not Castelli: {all_s_jackets - castelli_s_jackets}')