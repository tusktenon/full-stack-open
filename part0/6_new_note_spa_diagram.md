# Exercise 0.6: New new in single page app diagram

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The browser redraws the notes to include the new note
    browser->>+server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    server-->>-browser: 201 Created
    Note left of server: The server confirms the creation of the new note
```
