const router = require('express').Router();
// Import the HOME model from the models folder
const { Home } = require('../../models');
const withAuth = require('../../utils/auth')


