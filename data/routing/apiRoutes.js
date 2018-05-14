//Your apiRoutes.js file should contain two routes:
//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
 var fs = require("fs");
 var bffFriends = require("../friends");
 

module.exports = function(app) {
  // Displays all characters
  app.get("/api/friends", function(req, res) {
   
    console.log(bffFriends);
    return res.json(bffFriends);
  });

  //Post route /api/freinds to handle incoming survey results.
  app.post("/api/survey", function(req, res) {
    console.log(res);
    debugger;
    var bffFriends = request.body;
    // store new friend in friend storage
    readFile("../routing/friend.js", function(error, data) {
      if (error) {
        console.log(error);
      } else {
        var arr = JSON.parse(data).data;
        arr.push(bffFriends);
        var json = { data: arr };
        fs.writeFile(
          "../routing/friend.js",
          JSON.stringify(json),
          function(error) {
            if (error) {
              console.log(error);
            }
          }
        );
      }
    });
    // refresh/redirect to survey page
    response.redirect("/api/survey");
  });

}
