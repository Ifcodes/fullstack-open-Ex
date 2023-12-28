sequenceDiagram
    participant Browser
    participant Server

    Title  Creating Notes using Single Page App(SPA)

    Note left of Browser: user types in something and clicks the submit button. An HTTP POST request is made to new_note_spa address
    
    Browser->Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

    Note right of Server: The content type in the request header tells the server that the post request contains a JSON data
    Note over Server: The server uses the javascript code to update the current page, appending the new note to the current page.
    
    Server-->Browser: {"message":"note created"}
    note left of Browser: note list gets rendered on Browser