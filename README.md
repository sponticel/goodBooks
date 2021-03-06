
## Overview

**goodBooks** is a react front end, ruby on rails backend app that allows users to sign in to there very own account and contribute reviews and/or ratings on different books listed. 

<br>

## MVP

<br>

### Goals

- edit and delete reviews
- add review
- responsive design

<br>

### Challenges

I expect to have a challenging time finishing up the backend, I am not yet comfortable with ruby syntax so I usually have to look things up a great deal. However I do know where to look and have gotten better at researching and finding what I am looking for quicker. Another challenge I see myself having is working with a css library, I have never used one before but I am excited to learn.

<br>


### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Used for Front End |
|   React Router   | Used for Front End |
| Material UI | CSS Library|
| React Semantic UI | CSS Library|
|     Ruby on Rails      | Used for Back End |


<br>

### Client (Front End)

#### Wireframes

https://i.imgur.com/r3Pc0Rb.png
- Desktop Sign Up

https://i.imgur.com/dq6FTKs.png
- Desktop Sign in

https://i.imgur.com/RqDw0Z2.png
- Desktop Home 

https://i.imgur.com/pV15Ikq.png
- Book Details and Add/edit/delete review

https://i.imgur.com/naRk8OW.png
- Add/Edit Review

https://i.imgur.com/f6JC92V.png
- Tablet Home

https://i.imgur.com/Jq3OvDk.png
- Mobile Home

#### Component Tree

-Direct Link : https://app.diagrams.net/#G1P_SSL_FwN_HDSP5XFqe8IIQX7-2KRVnW

#### Component Architecture

``` 
client
|__ node_modules
|__ public
|__ src
      |__ containers
            |__ MainContainer.jsx
      |__ layouts
            |__ Layout.jsx
      |__ Screens
            |__ Authors.jsx
            |__ BooksDetails.jsx
            |__ Books.jsx
            |__ SignIn.jsx
            |__ SignUp.jsx
      |__ services
            |__ api-helper.js
            |__ auth.js
            |__ authors.js
            |__ books.js
      |__ App.css
      |__ App.js
      |__ index.css
      |__ index.js
|__ .gitignore
|__ package-lock.json
|__ package.json
|__ README.md
          
```

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal | H | 8hrs| hrs | hrs |
| Setup backend| H | 5hrs| hrs | hrs |
| Structure files | H | 3hrs| hrs | hrs |
| Authentication| H | 8hrs| hrs | hrs |
| Sign up and in form | H | 5hrs| hrs | hrs |
| Add Book and Review form | H | 5hrs| hrs | hrs |
| Home page | H | 3hrs| hrs | hrs |
| CSS of Home page | H | 3hrs|  hrs | hrs |
| CSS of forms page | M | 3hrs| hrs | hrs |
| implement Css Library | M | 6hrs| hrs | hrs |
| Add start rating| L | 3hrs| hrs | hrs |
| Improve layout Responsive Design | M | 3hrs| hrs | hrs|
| Play and test out app | M | 1hrs| hrs | hrs |
| Total | H | 56 hrs| hrs | hrs |



<br>

### Server (Back End)

#### ERD Model

https://drive.google.com/file/d/1ugdPZZAqkOn8hB7zZpFnMwJVLw01NwK5/view?usp=sharing
<br>

***

## Post-MVP

-Authorization for only user who posted review to edit and delete their own review
-change rating to star rating
-search by genre and/or author
-Allow other users to comment on others reviews (maybe just a thumbs up thumbs down)
***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
