const express = require('express');

const Actions = require('../data/helpers/actionModel');

const router = express.Router();

// **********************************************************************

// Endpoints

// GET /api/actions endpoint to Retrieve actions
router.get('/', (req, res) => {});
// .get()

// PUT /api/actions endpoint to Update an action
router.put('/:id', validateActionId, (req, res) => {});
// .update()

// DELETE /api/actions endpoint to Delete an action
router.delete('/:id', validateActionId, (req, res) => {});
// .remove()

// **********************************************************************

// Custom Middleware
function validateActionId(req, res, next) {
  next();
}

// **********************************************************************

module.exports = router;
