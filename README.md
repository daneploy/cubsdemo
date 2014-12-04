cubsdemo
========

Dane Johnson's Cubs Developer Demo App

TESTING NOTES:
Please Test Using Firefox.
To Launch, install files to a folder locally or unzip the 'Cubs Demo' folder from .zip and just drag the index.html file into firefox.
Chrome currently blocks locally run getJSON requests without initiallizing a server.

LIBRARY USE:
The only library included in this project was jQuery.  This was used to provide shorter/cleaner code that is easier to build and read, 
particularly when using ajax/getJSON to access and parse the roster.json file. 
It also allows shortcuts for functions like hiding and displaying data, basic search/short functionality and a few design elements.
Since no other libraries were requested or required, possible conflicts between jQuery and other existing libraries were
not a concern for this project.

DESGIN:
I made some efforts to make the design responsive and intuitive.  This should work seamlessly on phone, tablet or desktop.

HOW IT WORKS:
Player data populates the page from the json file.  Clicking on a player's name will drop down additional information.
Any notes existing in the browser's local storage will automatically draw on pageload and include date/time information.
Notes may be added to any player by filling in the text area and clicking the add button.
Any subsequent notes to each player are appended both on the current page and in the local storage.

To test local storage data, search for any player's notes by entering an ID in the # box at the top-right of the page and hit enter.

Additionally, you can pull up a positional menu by clicking the red "Lising All Players" bar on the bottom of the page.
After clicking on a position button, only players who match the position will be displayed.

You can refresh the page by clicking the cubs logo.