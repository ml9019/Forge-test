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
  const user = new UserProfileApi();
  //const profile = await user.getUserProfile(oauth.getClient(), internalToken);

  // const project = new ProjectsApi();
  // //console.log("AAAAAAAAAAAA");
  // const projects = await project.getHubProjects(
  //   "b.e09077b7-a3e3-46b8-8ac7-4499906199e0",
  //   oauth.getClient()
  // );
  // let ml1 = projects.jsonapi;
  // //console.log(ml1);
  res.json({ test: "A", test2: "A2" });
});

module.exports = router;
