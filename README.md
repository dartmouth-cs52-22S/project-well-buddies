# Well-Buddies

- Link to mockups: https://www.figma.com/files/project/56608073/WellBuddies?fuid=1101923148892677410 <br>
- To access the frontend url please make sure you are logged into wellbuddies' accounts: <br>
**username**: wellbuddies123 <br>
**password**: @wellbuddies

## Architecture


Frontend: 
- **src**
    - **assets**
        - **img**: contains the images used throughout the project
        - **fonts**: contains the fonts used throughout the project
    - **components**
        - **calendar**: folder that contains setting up google calenar integration and demonstrating calendar on our app
        - **custom**:folder that contains customizing the fonts
        - **home**: folder that contains components used to construct the home screen
        - **onboarding**: folder that contains all the onboarding screens
        - **profile**: folder that contains components for the user profile.
        - buddy.js: renders the page that shows the buddy and edit buggy page
        - checkin.js: renders the page that shows up once per day to ask the user how they are doing
        - event_completion.js: renders the page that pops up when a user complete an event
    - **navigation**: folder contains the nav bar 
    - **services:** contains API requests for Google Calendar and backend AP
    - **states**
        - **actions:** actions for Redux
        - **reducers:** states for Redux
    - constants.js

Backend
- **src**
    - **controllers**: contains profile, emotion, and events controllers
    - **models**: contains profile, emotion, and events models
    - **services**: contains the gooogle api verification api functions used to verify the user's Google account on the backend
    - router.js: contains the routers for our project
- .env: contains our `AUTH_SECRET` code and the `MONGODB_URI`

## Setup

If you haven't installed pods, run the following
``` bash
brew install pods
```

``` bash
git clone [our repo link]
cd well-buddies
npm install
cd ios
pod install
cd ..
expo run:ios
```

## Deployment

Our backend is deployed at: [https://well-buddies-api-ac5z.onrender.com](https://well-buddies-api-ac5z.onrender.com)

We were unable to deploy our frontend because we did not recieve Google verification. Because we heavily use the Google Calendar and Auth APIs, we cannot do `expo publish`.

## Authors

Eunice You-Chi Liu,
Annie Qiu,
Elizabeth Frey,
Alina Chadwick,
Rheanna Nesa Toney,
Zhiyan Zhong

## Acknowledgments
Thank you for our group's TAs, Catherine and Samiha, and Tim's help.
