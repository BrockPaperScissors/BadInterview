# Bad Interview

    Bad Interview is a practice tool to use for preparing before that next interview! Bad Interview may be the tool you didn't even know you needed.

## Link To The App:

### Preview

## Getting Started:

    To get started with Bad Interview, head to the browser linked above and hit "New Session"! Enter the amount of questions you would like to see in your mock interview, and give your session a unique name to find it later! Once you hit the submit button, your mock interview will begin. If you wish to see all the questions on a specific subject, use the links along the left side of the home page.

## MVP Goals:

-User should be able to start a new session  
-Users should be able to name their session to find it later.  
-User should be able to select solo.  
-User should be able to select how many questions are in their session.  
-User should be able to click on a button, to reveal a question and a response field.  
-Users should be warned at the beginning of the session that whatever they type into the input field, is stored on a public API.  
-User should be able to type in the response field and submit their answer to the API.  
-User should be able to access all of their answers at the end/post session.  
-Users should be able to add questions to the database.

<!-- -User (if duo) should be able to select Interviewer, or Applicant.   -->

## User Stories:

-As a user of BadInterview, I want a tool that will help me practice for interviews.  
-As a user of BadInterview, I want to allow a friend to act as "interviewer" and help me practice.  
-As a user of BadInterview, I would like to to be able to submit my response to review it later.  
-As a user of BadInterview, I would like to be able to view my sessions in the future after interviews to compare practice vs the actual interviews.

<!-- -As a user of BadInterview, as interviewer, I would like to click a button similar to "Next Question" and have a question to ask the interviewee.   -->

## User Functionality:

The user arrives at the Bad Interview homepage. The user will see on the left, a link to access all the questions or a specific category. In the middle, the user will see a button to start a new session. On the bottom, the user will see some contact/informational links. If the user clicks on the start new session button, they will be prompted to select "solo".

### Solo session:

If the user selects solo, they will name their session, and then they will then input how many questions they would like to see in the session. Each question will have a timer will have a 60 second timer (subject to change based on difficulty). When the timer reaches 0, it will move to the next question. The user will input their answer into the text field and hit next question. When the session ends, they will see their list of questions and answers and be able to access them at any point in time using the URL path to their session.

## Technologies Used:

-React.js  
-Redux  
-Python  
-Django  
-Node.js  
-AJAX

## Wireframes:

### Homepage

![homepage](https://i.imgur.com/Ld6na9V.png)

### Questions by Subject

![subjects](https://i.imgur.com/PyWZl0u.png)

### View of Interview Session

![session](https://i.imgur.com/hDRKGP6.png)

## Stretch Goals:

-Add a "duo" session
-Create a Bad Interview game mode.

## A little Extra:

My initial vision for this app was to make a party game intended for groups of players using video chat services. I decided to keep it simple initially, and make the game mode a goal for the future. The route I decided to take was to make a tool to help practice for job interviewing. I will use this app to upload questions I am asked during my job search so that I can practice the tough ones. The goal of this app is to help improve the ability to think and construct well thought out reponses while in the spotlight of an interviewer. Hopefully users of this app will have less "umm's, uhh's, and hmmm's" in their future interviews!

## Sources:
