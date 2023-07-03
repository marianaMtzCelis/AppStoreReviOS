# AppStoreReviOS

This is my web application to view iOS App store reviews.

Here is the [link](https://drive.google.com/file/d/1CZREDCcQ1wb3fO5TgUEDiTVIQ9I8BhXn/view?usp=sharing) for the video demo!

### App content
- A backend service/app in Node.js and Express:
  - getAppData endpoint: Returns general information for 5 apps (manually curated and stored on a JSON) to get reviews from.
  - getAppReviews endpoint: Polls iOS app's App Store Connect RSS feed, stores App Store reviews in JSON format, and returns the reviews information.
- A React app:
  - Home: Landing page that takes the user to view app reviews section and about me section.
  - Reviews: Displays a list of reviews (from most recent to less recent) from the chosen app on a dropdown menu.
  - AboutMe: Displays extra information about myself :)
 
### Development process
- UI: I created a design for my app using Figma on [this file](https://www.figma.com/file/Pag2hiTvk6QfJPXxmkeHJa/App-Store-ReviOS?type=design&node-id=0%3A1&mode=design&t=WBeSJf0ubPxWka5f-1).
- Architecture: I created the design of an architecture that allows for a decoupled and scalable solution. The backend service can handle multiple iOS apps by maintaining separate data stores for each app. The React app can interact with the backend service's API to retrieve reviews for any specific app.
![WhatsApp Image 2023-07-02 at 21 28 14](https://github.com/marianaMtzCelis/AppStoreReviOS/assets/42619873/5e9791d4-78aa-4fa7-b9ae-555b4fa4bd61)

### Tech Stack
- Backend: Node.js and Express
- Frontend: React.js and [MaterialUI](https://mui.com/) component library
- Data storage: JSON
 
