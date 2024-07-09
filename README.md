# Quantum-Possibilities-Social-Media**

**Overview**.

This project is a full-stack web application with a frontend built using React and a backend built using Node.js and Express. The application allows users to create and view stories, similar to social media platforms. Users can create photo stories and text stories, view stories, and interact with them.

## **Features**

- User authentication
- Create and view photo stories
- Create and view text stories
- View and interact with posts

## **Technologies Used**

**Frontend**

- React
- React Router
- Axios
- Swiper.js
- React Icons
- React Draggable
- React Hot Toast
- Date-fns

Backend

- Node.js
- Express
- Mongoose (MongoDB)

## Getting Started

### **Backend Setup**

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo
    
    ```
    git clone <https://github.com/riaz9191/Quantum-Possibilities-Social-Media.git>
    
    ```
    
    1. Navigate to the project directory
        
        ```
        cd .\Quantum-Possibilities-Social-Media\backend
        
        ```
        
    2. Install NPM packages
        
        ```
        npm install
        
        ```
        
    3. Create a `.env` file in the `backend` directory and add the following
        
        ```
        port=5000
        DbUserName=QS
        DbPassword=TWVejtyiWUJ6QeIO
        ```
        
    4. In Config folder change config.js db→url to your mongodb url and username password
    5. Start the backend server:
        
        ```
        npm start
        
        ```
        
    
    ## **Frontend Setup**
    
    ### Installation
    
    1. Clone the repo
        
        ```
        git clone <https://github.com/riaz9191/Quantum-Possibilities-Social-Media.git>
        
        ```
        
        1. Navigate to the project directory
            
            ```
            cd .\Quantum-Possibilities-Social-Media\frontend
            
            ```
            
        2. Install NPM packages
            
            ```
            npm install
            
            ```
            
        3. Start the frontend server:
            
            ```
            npm start
            ```
            

### Running the Project

- The backend server should be running on `http://localhost:5000`
- The frontend application should be running on `http://localhost:5173`

## API Endpoints

### Stories

- `GET /api/stories` - Get all stories
- `GET /api/stories/:id` - Get a story by ID
- `POST /api/stories` - Create a new story
- `DELETE /api/stories/:id` - Delete a story
