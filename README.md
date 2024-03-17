# Contest Hub - Gaming Contest Creation Platform

## Description
Contest Hub is a MERN (MongoDB, Express.js, React.js, Node.js) stack project designed to create and manage gaming contests. It provides a platform for administrators, contest creators, and users to efficiently manage and participate in contests. With features like user profile management, contest creation and management, community section, and secure payment methods, Contest Hub aims to be a comprehensive solution for organizing and participating in gaming contests.

## Source Code:
## [ Client Side Code](https://github.com/sahosskhan/Contes-Buddy-Client)

## [ Server Side Code](https://github.com/sahosskhan/Contes-Buddy-Server)

## Preview: 
## [ Client Side Preview](https://contes-buddy.web.app)

## [ Server Side Preview](https://contes-buddy-server.vercel.app)

 # Admin Dashboard:
## Email: admin@contes-buddy.com
## Password: Admin@359

# Creator Dashboard:
## Email: creator@contes-buddy.com
## Password: Creator@123

# User Dashboard:
## Email: user@contes-buddy.com
## Password: User@123


## Features

### Admin Dashboard
- Admin can manage users and contests.
- Admin can delete contests and approve contest submissions.
- Admin can not participate in any contest.

### Creator Dashboard
- Contest creators can add contests and manage them before admin approval.
- Creators can announce winners from participants.
- Creators can not participate in any contest.


### User Dashboard
- Users can edit their profiles.
- Users can participate in contests.
- User can not participate in deadline expired contest, second times register contest, winner announce contest

### Community Section
- Anyone can upload posts and view posts from others.

### Payment Method
- Stripe payment method available for secure transactions.

### Database Operations
- MongoDB CRUD operations for efficient data management.

### Authentication
- Firebase and JWT authentication for secure user authentication.



## Technology Used

### Frontend
- **React.js**: A JavaScript library for building user interfaces.
- **React Router DOM**: Declarative routing for React applications.
- **Axios**: Promise-based HTTP client for making AJAX requests.
- **Tailwind CSS**: A utility-first CSS framework packed with classes.
- **React Hook From**: A react based performant, flexible and extensible forms with easy-to-use validation.
- **AOS Animation**: A React Based Animation Tools

### Backend
- **Node.js**: A JavaScript runtime for building server-side applications.
- **Express.js**: Fast, un opinionated, minimalist web framework for Node.js.
- **MongoDB**: A NoSQL database for storing application data.
- **Mongoose**: An object modeling tool for MongoDB and Node.js.

### Authentication
- **Firebase Authentication**: A service that provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.
- **JSON Web Tokens (JWT)**: Compact, URL-safe means of representing claims to be transferred between two parties.

### Payment Processing
- **Stripe**: A technology company that builds economic infrastructure for the internet.

### Other Tools
- **dotenv**: A zero-dependency module that loads environment variables from a `.env` file into `process.env`.
- **npm**: A package manager for Node.js packages.

## Installation
1. Clone the repository:
    ```
    git clone https://github.com/yourusername/contest-hub.git
    ```
2. Navigate to the project directory:
    ```
    cd contest-hub
    ```
3. Install dependencies:
    ```
    npm install
    ```
4. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Define the following variables:
        ```
        PORT=3000
        MONGO_URI=your_mongodb_connection_string
        FIREBASE_API_KEY=your_firebase_api_key
        JWT_SECRET=your_jwt_secret_key
        STRIPE_SECRET_KEY=your_stripe_secret_key
        ```
5. Start the server:
    ```
    npm start
    ```
6. Navigate to `http://localhost:3000` in your browser to view the application.

## Contributors
- [sahosskhan](https://github.com/sahosskhan)

## License
This project is licensed under the [MIT License](https://github.com/sahosskhan).

## Acknowledgements
- This project was inspired by the need for a comprehensive gaming contest management platform.
- Special thanks to the creators of MongoDB, Express.js, React.js, and Node.js for their incredible frameworks.
- Thanks to Firebase for providing secure authentication services.
- Thanks to Stripe for their secure payment processing solution.

## Support
For any inquiries or issues, please contact [sahosskhan359@email.com](mailto:sahosskhan359@email.com).







