# Store Page
## Pseudocode to explain cache implementation feature
- Define an array of objects that will store the data, filters, and sort property.
- Define a function getDataFromCache() that will return an array of cache objects, or return undefined value if there is no data.
- if undefined invoke sendAPIRequest() and update the cache with the new data and selected filters and categories.
- in case there is data returned from the cache, check if the cacheed price, offset and order by filters if they are equal to the requested price, offset, and order by filters.
- if they are equal, check if the cached categories are the same selected categories by the user.
- if true, display the data to the user.
- if false, invoke sendAPIRequest() function and updated the cache data.

## Technologies
- NestJs
- React
- AntDesign
- ContextApi
- Postgres
- Sequalize
## How to install the application ? 
- cd server and client folders and run npm i command
- check the .example.env file and add your database and all required data.
