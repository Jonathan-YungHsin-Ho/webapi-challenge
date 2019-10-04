const express = require('express');

const Projects = require('../data/helpers/projectModel');
const Actions = require('../data/helpers/actionModel');

const router = express.Router();

// **********************************************************************

// Endpoints

// GET /api/projects endpoint to Retrieve projects - FUNCTIONAL
router.get('/', (req, res) => {
  Projects.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Error retrieving the projects' });
    });
});

// POST /api/projects endpoint to Create a new project
router.post('/', validateProject, (req, res) => {
  Projects.insert(req.body)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Error adding the project' });
    });
});

// PUT /api/projects/:id endpoint to Update a project
router.put('/:id', validateProjectId, (req, res) => {});
// .update()

// DELETE /api/projects/:id endpoint to Delete a project
router.delete('/:id', validateProjectId, (req, res) => {});
// .remove()

// GET /api/projects/:id/actions endpoint to Retrieve actions by project
router.get('/:id/actions', validateProjectId, (req, res) => {});
// .getProjectActions()

// POST /api/projects/:id/actions endpoint to Create a new action by project
router.post(
  '/:id/actions',
  validateProjectId,
  validateAction,
  (req, res) => {},
);
// .insert()

// **********************************************************************

// Custom Middleware
function validateProjectId(req, res, next) {
  next();
}

// Validate  on create new project request - FUNCTIONAL
function validateProject(req, res, next) {
  if (!Object.keys(req.body).length) {
    res.status(400).json({ message: 'Missing project data!' });
  } else if (!req.body.name) {
    res.status(400).json({ message: 'Missing required "name" field!' });
  } else if (!req.body.description) {
    res.status(400).json({ message: 'Missing required "description" field!' });
  } else {
    next();
  }
  // next();
}

// Validate body on create new action request - NEEDS TEST
function validateAction(req, res, next) {
  if (!Object.keys(req.body).length) {
    res.status(400).json({ message: 'Missing action data!' });
  } else if (!req.body.description) {
    res.status(400).json({ message: 'Missing required "description" field!' });
  } else if (!req.body.notes) {
    res.status(400).json({ message: 'Missing required "notes" field!' });
  } else {
    next();
  }
  // next();
}

// **********************************************************************

module.exports = router;
