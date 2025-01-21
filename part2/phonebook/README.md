# The Phonebook Application (frontend)

This [React](https://react.dev/) + [Vite](https://vite.dev/) app was built up as the solution to exercises [2.6 to 2.10](https://fullstackopen.com/en/part2/forms#exercises-2-6-2-10), [2.11](https://fullstackopen.com/en/part2/getting_data_from_server#exercise-2-11), [2.12 to 2.15](https://fullstackopen.com/en/part2/altering_data_in_server#exercises-2-12-2-15), [3.9, 3.11](https://fullstackopen.com/en/part3/deploying_app_to_internet#exercises-3-9-3-11), [3.19 and 3.20](https://fullstackopen.com/en/part3/validation_and_es_lint#exercises-3-19-3-21) of the [Full Stack Open](https://fullstackopen.com/en/) MOOC from the University of Helsinki.


## Running the application in development mode.

You can start the app itself with the usual `npm run dev`.

In Part 2 of the course, the app was configured to fetch the initial phonebook data (in [`db.json`](./db.json)) from a running instance of [json-server](https://github.com/typicode/json-server). This could still be done, but first the value of `baseURL` in [`services/entries.js`](./src/services/entries.js) would need to be changed from `http://localhost:3001/api/persons` to `http://localhost:3001/persons`. Start the server with `npm run server` (it's been configured to run on port 3001). 

In Part 3 of the course, the app is configured to connect to the associated [backend server project](https://github.com/tusktenon/full-stack-open-part-3).
