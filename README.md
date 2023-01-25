# Store Page
## Pseudocode to explain cache implementation feature
- Return the data from the cache, or return undefined value if there is no data.
- if undefined invoke sendAPIRequest() function to get the data.
- when the promise of the request resolved and the the data returned successfully, store them in the cache with the value of the filters and the sort property.
- in case there is data returned from the cache, check if the cacheed price, offest and order by filter equal the requested price, offest, and order by.
- if they are equal, check if the cached categories are the same selected categories.
- if true, display the data, "because that means the user requested the same data again".
- if false, invoke sendAPIRequest() function and store the returned data in the cache with the selected filters and categories.
