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

// Autodesk Forge configuration
module.exports = {
  // Set environment variables or hard-code here
  credentials: {
    client_id: "GkLYqhtwrptdXGww69VXwZ2yYjTCOsXx", //process.env.FORGE_CLIENT_ID,
    client_secret: "9mXtWqh0p2A3l2BQ", // process.env.FORGE_CLIENT_SECRET,
    callback_url: "https://keo-projects.herokuapp.com/api/forge/callback/oauth", //http://localhost:3000/api/forge/callback/oauth", //process.env.FORGE_CALLBACK_URL
  },
  scopes: {
    // Required scopes for the server-side application
    internal: [
      "bucket:create",
      "bucket:read",
      "data:read",
      "data:create",
      "data:write",
      "account:read",
      "bucket:create", "bucket:read", "bucket:update", "bucket:delete" ,"data:read", "data:write", "data:create", "viewables:read" ,"user:write", "user:read", "account:write", "account:read" "code:all"
    ],
    // Required scope for the client-side viewer
    public: ["viewables:read"],
  },
};
