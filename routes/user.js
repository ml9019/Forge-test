/////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Forge Partner Development
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////

const express = require("express");

// ML
var https = require("follow-redirects").https;
var fs = require("fs");
//

const { UserProfileApi } = require("forge-apis");

const { OAuth } = require("./common/oauth");

let router = express.Router();

router.get("/user/profile", async (req, res) => {
  const oauth = new OAuth(req.session);
  const internalToken = await oauth.getInternalToken();
  const user = new UserProfileApi();
  const profile = await user.getUserProfile(oauth.getClient(), internalToken);

  let em = profile.body.emailId;
  var val = "";
  if (em.indexOf("@keoic.com") > 0) {
    val = "KEO user test";
  } else {
    val = "Other user";
  }

  res.json({
    name:
      profile.body.firstName +
      " " +
      profile.body.lastName +
      " " +
      profile.body.emailId +
      " " +
      val,
    picture: profile.body.profileImages.sizeX40,
    test: "A",
  });
});

router.get("/user/test", async (req, res) => {
  const oauth = new OAuth(req.session);
  const internalToken = await oauth.getInternalToken();
  const user = new UserProfileApi();
  const profile = await user.getUserProfile(oauth.getClient(), internalToken);

  let em = profile.body.emailId;
  var val = "";
  if (em.indexOf("@keoic.com") > 0) {
    val = "KEO user test111111111111111";
  } else {
    val = "Other user";
  }

  res.json({
    name:
      profile.body.firstName +
      " " +
      profile.body.lastName +
      " " +
      profile.body.emailId +
      " " +
      val,
    picture: profile.body.profileImages.sizeX40,
    test: "A",
  });
});

router.get("/user/projects", async (req, res) => {
  const oauth = new OAuth(req.session);
  const internalToken = await oauth.getInternalToken();
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
});

module.exports = router;
