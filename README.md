# Store Page
## Pseudocode to explain cache implementation feature
- Define a cache object that will store the data, filters, and sort property.
- Define a function getDataFromCache that return array of cache object, or return undefined value if there is no data.
- if undefined invoke sendAPIRequest() and update the cache with the new data and selected filters and categories.
- in case there is data returned from the cache, check if the cacheed price, offest and order by filter equal the requested price, offest, and order by.
- if they are equal, check if the cached categories are the same selected categories.
- if true, display the data to the use.
- if false, invoke sendAPIRequest() function and updated the data.
