// Network: series of computers that can communicate 
// The internet is a huge network of smaller networks 
// The World Wide Web is just one part of the Internet 

// IP addresses specify which computer we're communicating with 
// Routers help solve the prolbem of multiple computers communicating
// IPv4, a 32 bit number for addresses, but still we run out, so now 
// we have IPv6 

// Instaed of ip addresses, we use hostnames as a way to remember what an ip points to 
// DNS: Domain Name System - turns the hostname into the ip 
// You visit a sit 
// It is attempted to be turned into an ip address 
// Starts trying on your machine
// then tries router 
// then tries isp 
// then tries DNS server 
// Else, it doesn't exist or doesn't exist under that name.

// The command line command "dig" shows the basic operation of communcation
// between your computer and the host

// URLS: Universal Resource Locators - not exclusive to webpages: used by ftp and database, possibly others 
// http 
// https 
// ftp 
// most common types of url Protocol 

// Protocol    http 
// Hostname    site.com 
// Port        80 (default, we usually don't see this)
// Resource    /some/page.html 
// Query       ?x=1 etc. - usually we don't manually enter the query, but we can 
// Often, the lengthier part of the url is the query string 

// Browsers, Servers and HTTP 
// When talking about the web, a server is just a computer that provides functionality for other devices 
// There are many types of server, we are generally talking about a web server. 
// a request is sent 
// the server receives it and decides how to respond

// HTTP - Hypertext Transfer Protocol
// We need protocols so there is a structured method of communication between devices. 
// Then we receive that response. 
// Often, when the request gets to a server, it's then passed on to a database server  

// What's in a request: 
// Method (ex: GET) 
// HTTP protocol version (almost always 1.1)
// Resource URL we *want* 
// Headers - (not all mandatory)
//     Hostname you're asking about
//     Date your browser thinks it is 
//     Language your browser wants information in 
//     Any cookies that server has sent 
//     Possibly more

// What's in a response: 
// HTTP protocol version (almost always 1.1) 
// Response Status Code (200, 404, etc.)
// Headers 
//     Content Type 
//     Date/time the server thinks it is 
//     Any cookies
//     Any caching information 
//     Possibly more

// Status Codes 
// 200 - OK
// 301 - Moved Permanently 
// 404 - Not Found 
// 500 - Something went wrong on the server

// Rested 

const { BORDER_STYLE } = require("html2canvas/dist/types/css/property-descriptors/border-style")

// Not sure how much I'll use this http://www.helloresolven.com/portfolio/rested/
// Paste in a link you'd like to request
// Set method (probably GET)
// Can add in optional headers
// Returns:
// Request Headers and Body 
// Response Headers 
// Response Body - contains html/css/javascript
// A header input might be Accept-Language: <language> (although this one isn't usually set manually) </language>

// Setting up our own server - beneficial because we use the actual HTTP protocol instead of file on server
// Install Python 3 
// from terminal, run (presumably wsl/ubuntu): 
// python3 -m http.server

// Or

// In VSCode, open FileSystemDirectoryReader, use live server


// What is GET, what is POST? 

// When a page loads, you get the html, but every element referenced on the page is not the element itself, 
// each element (whether a script tag, image tag, media tag, etc) requires it's own GET request.

// GET vs. POST 
// GET: requests without side effects (ie, don't change server data)
//     Typically, arguments are passed along in a query string.
// POST: requests with the side effects (ie, change data on server)
    // Typically, arguments sent as body of the request (not in query string)
    // Some form submissions (but never entering-URL-in-browser or links)
    // Always do this if there's a side-effect: sending mail, charge credit card, etc.
    // Are you sure you want to resubmit?
