# Freestyle-Mern, Rick and Morty Edition

## Description

 Embark on a journey into the universe of Rick and Morty with our MERN stack project. A delightful exploration driven by our eagerness to dive into modern web development.
### Functionality Highlights
- Character Showcase: The frontend dynamically lists characters in real-time from the Rick and Morty API, offering an engaging display of their details and characteristics.
- Favorite Character Collection: Adding a personal touch, users can save their favorite characters to MongoDB Atlas, creating a personalized collection that can be revisited and expanded over time.

### Motivation
Our motivation behind this endeavor was to grasp the complexity of the MERN (MongoDB, Express.js, React, Node.js) stack. 
  
### Lessons and Reflections
As we navigated through the MERN stack during this intensive two-week sprint, we stumbled upon valuable lessons. Mistakes were made, and the solutions born are not the best practices either. Yet, it's in these missteps that true learning happens. The project not only gave us insights into the technologies we explored, but evolved into a reflective journey, emphasizing the iterative nature of learning - a process where challenges transformed into valuable lessons on the path of continuous improvement.
# Installation
## Prerequisites
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [MongoDb cluster](https://www.mongodb.com/basics/clusters/mongodb-cluster-setup)

1. ```terminal
     $ git clone https://github.com/CodecoolGlobal/freestyle-mern-project-react-ImreFekete.git
   ```
2.  In the root folder:
   ```terminal
     $ npm install
   ```
3.  Create a .env file in the root folder with your Mongo Atlas credentials and the cluster id:
    ```.env
     USER_ID= Username
     PASSWORD= Password
     CLUSTER_ID= the Id of your Mongo Atlas Cluster //which is the end of your cluster connection URL after the @ character: mongodb+srv://<username>:<password>@cluster_id
    ```
## Usage
You need client and server runs concurrently in different terminal session, in order to make them talk to each other.
### Start Server
```terminal
  $ cd server
```
```terminal
  $ node server.js
```
If it is running you will see the url where you can access the server in the terminal.

### Start Client
```terminal
  $ cd client/mern-project
  $ npm start
```
If the client notifies you that the port 3000 is already in use and it need another port, type yes so it will start on a different port.
After launch you can access the frontend in the browser with the link in the terminal:
```terminal
Compiled successfully!

You can now view mern-project in the browser.

  Local:            http://localhost:assignedport <=== This link
  On Your Network:  http://192.168.56.1:assignedport

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```
