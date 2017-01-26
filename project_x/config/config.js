var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'project-x'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost:5432/geistdb'
  },

  test: {
    root: rootPath,
    app: {
      name: 'project-x'
    },
    port: process.env.PORT || 5432,
    db: 'postgres://localhost/project-x-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'project-x'
    },
    port: process.env.PORT || 5432,
    db: 'postgres://localhost/project-x-production'
  }
};

module.exports = config[env];
