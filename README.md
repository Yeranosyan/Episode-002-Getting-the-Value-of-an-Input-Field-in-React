## Episode 002

## We use useState is a hook that allows us to add state variables to functional components.

Define the App component:

## We define a functional component named App using arrow function syntax. This component represents our application.

Initialize state variables:

## We initialize two state variables using the useState hook: message and showMessage

message stores the value entered by the user in the input field.
showMessage tracks whether to display the message and course info.
Define event handlers:

## We define two functions: handleChange and handleSubmit

handleChange is called whenever the user types in the input field. It updates the message state with the current value of the input field.
handleSubmit is called when the user clicks the "Submit" button. It sets the showMessage state to true, indicating that the message and course info should be displayed.
Render UI elements:

## Inside the return statement, we define the structure of our UI using JSX (a syntax extension for JavaScript that resembles HTML)

`We have a heading (<h1>) displaying the title of our application.
An input field (<input>) allows the user to enter text. The onChange attribute calls the handleChange function whenever the input value changes.
A "Submit" button (<button>) triggers the handleSubmit function when clicked.
If showMessage is true, we display the entered input (<h2>) in green text along with an explanatory paragraph (<p>) about the course.`
Conditional rendering:

## We use conditional rendering ({showMessage && ...}) to display the message and course info only when showMessage is true

Styling:

## We add some basic styling using CSS to make the UI look more presentable. The "Submit" button has a light blue background, and the cursor changes to a pointer on hover

## That's it! This code demonstrates a simple React application that allows users to enter text, submit it, and display the entered text along with some course information

