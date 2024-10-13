	```mermaid
 sequenceDiagram
    participant Browser
    participant Server

	Browser->>Server:GET request to the server  https://studies.cs.helsinki.fi/exampleapp/spa
	activate Server 
	Server->>Browser: The server sends back an HTML file to the client 
	deactivate SBrowser: start parsing then rendering the HTML and it encounter Link tag
	Browser->>Server: make a reqeust to get the CSS file 
	activate Server
	Server->>Browser: Sends the CSS file
	deactivate Server  
	Browser-->Browser: apply the CSS to the html 

	Browser->>Server: make a request to get the JavaScript file 
	activateerver 

	Browser--> Server 
	Server->>Browser: send the JavaScript file 
	deactivate Server 
 	Note right of browser: The browser starts executing the javescript code that fetches the JSON data from the server 	

	Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
	activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server
   

   Broswer-->Browser: start using the DOM-API to change the relavant part of the webpage using the data 
```
