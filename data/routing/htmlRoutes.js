module.exports = function(app) {
  //Routes which will display the survey page
  // Basic route that sends the user first to the AJAX Page

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  //Default ,catch all route that leads to home.html which display home page
  // handle all routes in one call
  // anything that's not home or survey will be sent to home
  app.get("*", (req, res) => {
    var pageName = "";
    switch (req.url) {
      case "../public/home.html":
      case "../public/survey.html":
        pageName = req.url + ".html";
        break;
      default:
        pageName = "home.html";
    }
    res.sendFile(path.join(__dirname, pageName));
  });
};
