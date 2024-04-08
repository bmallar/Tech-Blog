const User = require('./User');
const Home = require('./Home');

// Creates a relationship between User and Project model, with the User having a "has many" relationship with Project model.
User.hasMany(Home, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Creates a relationship between User and Project model, with a "belongs to" relationship of the Project to the User.
Home.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Home };
