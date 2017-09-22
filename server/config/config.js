//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://nikhilusa1:password@ds129024.mlab.com:29024/bootcamp3', //place the URI of your mongo database here.
  },
  googleMaps: {
    key: 'AIzaSyCHOxtKRLArrAro1ek8j6jHOhk9_Vqn-1g'
  },
  port: 8080
};
