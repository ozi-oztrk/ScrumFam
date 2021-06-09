const database = require('../database/database');

const userController = {

  async addUser(req, res, next){
    const { username, password } = req.body
  
    const userId = await database.addUser({username, password});
  
    if (!password || !username) return next({log: `missing username or pw`});
  
    res.locals.userId = userId;
    return next();
  },

  async getUser(req, res, next){
    
  },

};




// '/users' -> all the actions relating to users and households


// Get all users for a household (GET `/users/house/:householdName
// Get a specific user data (GET '/users/:userId')
// Create a new user (POST '/users'
// Delete a user (DELETE '/users/:userId'
// Update a user settings (active_goal, password) (PATCH '/users/:userId')
// Update balance ("spend" money) (PUT '/users/:userId/balance/`

module.exports = userController;