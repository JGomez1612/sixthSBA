Game Review API
Description

The Game Review API is a Node.js + Express application with MongoDB for storing users, games, and reviews.
It allows users to create, read, update, and delete games, reviews, and user accounts. The API is designed for a game review website where users can leave ratings and comments for their favorite games.

DATA COLLECTIONS

USERS
- Stores user accounts.
- Fields: username, email, joined

GAMES
- Stores games available for review.
- Fields: title, developer, publisher, genre, platforms

REVIEWS
- Stores user reviews for games.
- Fields: username, game, rating, comment, createdAt

ROUTES

USERS
- /api/user	    Retrieve all users
- /api/user		Create a new user
- /api/user/:id	Update a user by ID
- /api/user/:id   Delete a user by ID

GAMES
- /api/game	    Retrieve all games
- /api/game		Create a new game
- /api/game/:id	Update a game by ID
- /api/game/:id	Delete a game by ID

REVIEWS
- /api/review	        Retrieve all reviews
- /api/review		    Create a new review (requires userId and gameId)
- /api/review/:id		Update a review by ID
- /api/review/:id		Delete a review by ID
