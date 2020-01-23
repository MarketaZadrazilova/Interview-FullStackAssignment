# Interview - FullStack assignment

## Task Description

Your task is to implement a simple "Service Dashboard" application.

The application will consist of:
- a backend part written in Python
- a frontend part written in React.js

### Backend
Your task is to implement a simple api server with 2 endpoints
- one to get a list of services
- one to add a service to the list
    - this one should be protected with JWT (Json Web Token)

The server will use `mock-server/db.json` to store the data.
TODO
...

### Frontend

Your task is to fetch data about services from server (your Python backend) and visualize them using React.js.

- The desired layout is sketched on image: `./service-dashboard.js`.
- To see the data format, you can check `./mock-server/db.json`.

#### Bonus Points for:
- sorting tiles by service name (alphabetically in ascendent order)
- not using any additional dependencies (except fetching library)
