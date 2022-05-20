var https = require("follow-redirects").https;
var fs = require("fs");

// ML

let map_project_id = new Map();

// Get the access token
const oauth = new OAuth(req.session);
const internalToken = await oauth.getInternalToken();

//

var options = {
  method: "GET",
  hostname: "developer.api.autodesk.com",
  path: "/project/v1/hubs/b.e09077b7-a3e3-46b8-8ac7-4499906199e0/projects",
  headers: {
    Authorization: internalToken,
    Cookie: "PF=rZaRjKyHf1eSLz9jqEAMzY",
  },
  maxRedirects: 20,
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    //console.log(body.length);

    var response = JSON.parse(body);
    //console.log(response.jsonapi);

    fs.writeFile("output/json-projects-name-id.txt", body, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
    console.log("completed!");
    response.data.forEach((element) => {
      //console.log(element.attributes.name + " : " + element.id);
      map_project_id.set(element.attributes.name, element.id);
    });

    // console.log(JSON.stringify(response.data));
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();
