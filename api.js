// APIs 
// In general: any sort of interface for code to work with another application
// Web APIs are a specific type of API for sending and recieving data via http 

// We have access to data from various places (Twitter, Yelp, etc.)
// Most of these (Twitter, Facebook, etc) types of APIs require authentication and sign up as developer with limited free assets 

// Data Formats
// APIs are a code interface (whereas the browser page is the human interface)
// APIs don't respond with HTML - HTML is structure, APIs are data

// XML and JSON are two data formats, JSON is far more common now 
// XML uses tags <> and JSON uses "" 
// JSON looks similar to a JS object but is not quite the same 
// EVERYTHING in JSON has to have double quotes except the brackets and the colon 
// You can use a viewer like jasonviewer.stack.hu to see what the data of the JSON looks like. 

// One way to see a request - curl 
// Using curlc with a webpage needs to have headers beyond just the main url, otherwise nothing happens
// curl https://en.wikipedia.org/wiki/List_of_compositions_by_Claude_Debussy

// Curling an api returns the api object 
// curl http://api.open-notify.org/iss-now.json

// API Documentation 
// Need Base URL for all endpoints - every api request starts with this 
// endpoints with be /endpoint and they are specific required headers to successfully receive any information
// You will often find Query parameters as well 

// GET /fact/random?animal_type=cat&amount=2 
// fact - enpoint 
// ? query 
// & connector between query strings