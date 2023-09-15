# bun-mongodb

![Bun](image.png)

## Introduction

`bun-mongodb` is a basic project template that helps you set up a Bun.js application with MongoDB integration. Bun is a fast all-in-one JavaScript runtime. This template serves as a starting point for building web applications that use MongoDB as the database backend.

## Installation

To get started, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/bun-mongodb.git

   cd bun-mongodb
   ```

2. Install project dependencies:

    ```bash
    bun install
    ```

3. Configure your MongoDB connection:

    Before running your application, make sure to configure your MongoDB connection. Open the` index.mjs` file and locate the following line:

    
    ```
    // Modify this line with your MongoDB connection URI
    const MONGODB_URI = "mongodb://localhost:27017/mydatabase";

    ```

4. Start your application:
    ```bash
    bun start
    ```


5. Terminal output: 

`   

    [0.02ms] ".env"
    Connected to MongoDB
    Listening on port 3000...
    Mongoose: users
`
