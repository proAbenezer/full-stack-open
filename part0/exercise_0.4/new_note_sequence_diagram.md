```mermaid
 sequenceDiagram
 	participant User
 	participant Browser
	participant Server


	User-->Browser: writing something into the text field
	User->>Browser: cliking the submit button

	Browser->>Server: POST request to https://studies.cs.helsinki.fi/exampleapp/notes 
	acivate Server
	Server->>Server: take the data and save to the database 
	deactivate server 

    acitvate server
	Server-->Browser: send status code 302 and rediect URL 
	deactivate server
	Browser-->Browser: Reload the page 

	Browser-->Browser: show the data to the user 
```

