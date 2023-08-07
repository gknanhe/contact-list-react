# React Contacts Management App

This is a simple Contacts Management App built with React that demonstrates fetching data from an API and performing CRUD (Create, Read, Update, Delete) operations on contacts. The app interacts with the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) to simulate backend interactions for contacts.

## Hosted Link (https://mellifluous-mooncake-0a3e9c.netlify.app/)

## Features

- View the list of contacts fetched from the JSONPlaceholder API.
- Add new contacts to the list using a POST request (dummy request).
- Update existing contacts using a PUT request (dummy request).
- Delete contacts using a DELETE request (dummy request).

## How to Run the App

1. Clone the repository to your local machine.

2. Navigate to the project folder using the terminal.

3. Install dependencies using `npm install`.

4. Start the development server using `npm start`.

5. The app will open in your default web browser at `http://localhost:3000`.

## Project Structure

               src/
      ├── components/
      │   ├── App.js
      │   ├── Navbar.js
      │   ├── Main.js
      │   └── UserData.js
      ├── styles/
      │   ├── style.module.css
      │   ├── userdata.module.css
      │   └── navbar.module.css
      └── index.js





- **`src/components/ContactList.js`**: This component displays the list of contacts fetched from the API. It also provides options to update and delete individual contacts.

- **`src/components/AddContactForm.js`**: This component renders a form to add a new contact to the list. It makes a POST request (dummy request) to the API to add the contact.

- **`src/components/UpdateContactForm.js`**: This component renders a form to update an existing contact. It makes a PUT request (dummy request) to the API to update the contact.

- **`src/components/Contact.js`**: This component represents an individual contact in the list. It displays contact details and provides buttons to update and delete the contact.

- **`src/App.js`**: The main component that holds the state of the contacts list. It fetches the initial list of contacts from the API and passes the necessary data to child components.

## API Interaction

- The app interacts with the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) to simulate backend interactions for contacts.

- Fetching the initial list of contacts: The app makes a GET request to `https://jsonplaceholder.typicode.com/users` to fetch the list of contacts.

- Adding a new contact: When a new contact is added using the form in `AddContactForm.js`, the app makes a POST request to `https://jsonplaceholder.typicode.com/users` (dummy request).

- Updating a contact: When a contact is updated using the form in `UpdateContactForm.js`, the app makes a PUT request to `https://jsonplaceholder.typicode.com/users/:id` (dummy request).

- Deleting a contact: When a contact is deleted using the "Delete" button in `Contact.js`, the app makes a DELETE request to `https://jsonplaceholder.typicode.com/users/:id` (dummy request).

Please note that since this is a dummy API, any changes made to the contacts (add/update/delete) will not persist and will only affect the current session.

## Dependencies

The project uses the following dependencies:

- React: A JavaScript library for building user interfaces.
- Axios: A popular library to make HTTP requests.

## Limitations

- As mentioned earlier, this app interacts with a dummy API, and any changes made to the contacts will not be saved on the server.

- The app does not handle edge cases like error handling for failed API requests or validation for contact data.

## Conclusion

This Contacts Management App demonstrates how to fetch data from an API, add new contacts, update existing contacts, and delete contacts using dummy API requests. It serves as a starting point for a more robust and real-world application with proper backend integration and error handling. Feel free to enhance the app further and customize it according to your needs.

---

With the above README file, users of the project will have a clear understanding of the app's purpose, features, how to run it, and its limitations. This README can be placed at the root of the project repository and should be written in Markdown format for better presentation on GitHub.




## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
