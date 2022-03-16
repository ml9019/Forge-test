const sample = {
  jsonapi: {
    version: "1.0",
  },
  links: {
    self: {
      href: "https://developer.api.autodesk.com/data/v1/projects/b.project.id.xyz/items/urn:adsk.wipprod:dm.lineage:hC6k4hndRWaeIVhIjvHu8w",
    },
  },
  data: {
    type: "items",
    id: "urn:adsk.wipprod:dm.lineage:hC6k4hndRWaeIVhIjvHu8w",
    attributes: {
      displayName: "my_model.rvt",
      createTime: "2018-01-17T11:52:11.0000000Z",
      createUserId: "BW9RM76WZBGL",
      createUserName: "John Doe",
      lastModifiedTime: "2018-01-17T11:53:19.0000000Z",
      lastModifiedUserId: "BW9RM76WZBGL",
      lastModifiedUserName: "John Doe",
      hidden: false,
      reserved: false,
      extension: {
        type: "items:autodesk.bim360:C4RModel",
        version: "1.0.0",
        schema: {
          href: "https://developer.api.autodesk.com/schema/v1/versions/items:autodesk.bim360:C4RModel-1.0.0",
        },
        data: {
          sourceFileName: "my_model.rvt",
        },
      },
    },
    links: {
      self: {
        href: "https://developer.api.autodesk.com/data/v1/projects/b.project.id.xyz/items/urn:adsk.wipprod:dm.lineage:hC6k4hndRWaeIVhIjvHu8w",
      },
      webView: {
        href: "https://docs.b360.autodesk.com/projects/project.id.xyz/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.0J4paz_FQgWPX2QRsaBkiw/detail/viewer/items/urn:adsk.wipprod:dm.lineage:hC6k4hndRWaeIVhIjvHu8w",
      },
    },
    relationships: {
      tip: {
        data: {
          type: "versions",
          id: "urn:adsk.wipprod:fs.file:vf.hC6k4hndRWaeIVhIjvHu8w?version=2",
        },
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.project.id.xyz/items/urn:adsk.wipprod:dm.lineage:hC6k4hndRWaeIVhIjvHu8w/tip",
          },
        },
      },
      versions: {
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.project.id.xyz/items/urn:adsk.wipprod:dm.lineage:hC6k4hndRWaeIVhIjvHu8w/versions",
          },
        },
      },
      parent: {
        data: {
          type: "folders",
          id: "urn:adsk.wipprod:fs.folder:co.sdfedf8wef",
        },
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.project.id.xyz/items/urn:adsk.wipprod:dm.lineage:hC6k4hndRWaeIVhIjvHu8w/parent",
          },
        },
      },
      refs: {
        links: {
          self: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.project.id.xyz/items/urn:adsk.wipprod:dm.lineage:hC6k4hndRWaeIVhIjvHu8w/relationships/refs",
          },
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.project.id.xyz/items/urn:adsk.wipprod:dm.lineage:hC6k4hndRWaeIVhIjvHu8w/refs",
          },
        },
      },
      links: {
        links: {
          self: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.project.id.xyz/items/urn:adsk.wipprod:dm.lineage:hC6k4hndRWaeIVhIjvHu8w/relationships/links",
          },
        },
      },
    },
  },
  included: [
    {
      type: "versions",
      id: "urn:adsk.wipprod:fs.file:vf.hC6k4hndRWaeIVhIjvHu8w?version=2",
      attributes: {
        name: "my_model.rvt",
        displayName: "my_model",
        createTime: "2018-01-17T11:52:34.0000000Z",
        createUserId: "BW9RM76WZBGL",
        createUserName: "John Doe",
        lastModifiedTime: "2018-01-17T11:53:20.0000000Z",
        lastModifiedUserId: "BW9RM76WZBGL",
        lastModifiedUserName: "John Doe",
        versionNumber: 2,
        mimeType: "application/vnd.autodesk.r360",
        fileType: "rvt",
        extension: {
          type: "versions:autodesk.bim360:C4RModel",
          version: "1.0.0",
          schema: {
            href: "https://developer.api.autodesk.com/schema/v1/versions/versions:autodesk.bim360:C4RModel-1.0.0",
          },
          data: {
            modelVersion: 2,
            projectGuid: "project-guid",
            originalItemUrn:
              "urn:adsk.wipprod:dm.lineage:hC6k4hndRWaeIVhIjvHu8w",
            isCompositeDesign: false,
            modelType: "multiuser",
            mimeType: "application/vnd.autodesk.r360",
            modelGuid: "model-guid",
            processState: "PROCESSING_COMPLETE",
            extractionState: "SUCCESS",
            splittingState: "NOT_SPLIT",
            reviewState: "NOT_IN_REVIEW",
            revisionDisplayLabel: "2",
            sourceFileName: "my_model.rvt",
            conformingStatus: "NONE",
          },
        },
      },
      links: {
        self: {
          href: "https://developer.api.autodesk.com/data/v1/projects/b.project.id.xyz/versions/urn:adsk.wipprod:fs.file:vf.hC6k4hndRWaeIVhIjvHu8w%3Fversion=2",
        },
        webView: {
          href: "https://docs.b360.autodesk.com/projects/project.id.xyz/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.0J4paz_FQgWPX2QRsaBkiw/detail/viewer/items/urn:adsk.wipprod:fs.file:vf.hC6k4hndRWaeIVhIjvHu8w%3Fversion%3D2",
        },
      },
      relationships: {
        item: {
          data: {
            type: "items",
            id: "urn:adsk.wipprod:dm.lineage:hC6k4hndRWaeIVhIjvHu8w",
          },
          links: {
            related: {
              href: "https://developer.api.autodesk.com/data/v1/projects/b.project.id.xyz/versions/urn:adsk.wipprod:fs.file:vf.hC6k4hndRWaeIVhIjvHu8w%3Fversion=2/item",
            },
          },
        },
        links: {
          links: {
            self: {
              href: "https://developer.api.autodesk.com/data/v1/projects/b.project.id.xyz/versions/urn:adsk.wipprod:fs.file:vf.hC6k4hndRWaeIVhIjvHu8w%3Fversion=2/relationships/links",
            },
          },
        },
        refs: {
          links: {
            self: {
              href: "https://developer.api.autodesk.com/data/v1/projects/b.project.id.xyz/versions/urn:adsk.wipprod:fs.file:vf.hC6k4hndRWaeIVhIjvHu8w%3Fversion=2/relationships/refs",
            },
            related: {
              href: "https://developer.api.autodesk.com/data/v1/projects/b.project.id.xyz/versions/urn:adsk.wipprod:fs.file:vf.hC6k4hndRWaeIVhIjvHu8w%3Fversion=2/refs",
            },
          },
        },
        downloadFormats: {
          links: {
            related: {
              href: "https://developer.api.autodesk.com/data/v1/projects/b.project.id.xyz/versions/urn:adsk.wipprod:fs.file:vf.hC6k4hndRWaeIVhIjvHu8w%3Fversion=2/downloadFormats",
            },
          },
        },
        derivatives: {
          data: {
            type: "derivatives",
            id: "derivative-id",
          },
          meta: {
            link: {
              href: "https://developer.api.autodesk.com/modelderivative/v2/designdata/derivative-id/manifest?scopes=b360project.project.id.xyz,O2tenant.tenant-id",
            },
          },
        },
        thumbnails: {
          data: {
            type: "thumbnails",
            id: "derivative-id",
          },
          meta: {
            link: {
              href: "https://developer.api.autodesk.com/modelderivative/v2/designdata/derivative-id/thumbnail?scopes=b360project.project.id.xyz,O2tenant.tenant-id",
            },
          },
        },
        storage: {
          data: {
            type: "objects",
            id: "urn:adsk.objects:os.object:wip.dm.prod/3c8f6bbc-fe5c-4815-a92e-8b8635e7b1cb.rvt",
          },
          meta: {
            link: {
              href: "https://developer.api.autodesk.com/oss/v2/buckets/wip.dm.prod/objects/3c8f6bbc-fe5c-4815-a92e-8b8635e7b1cb.rvt?scopes=b360project.project.id.xyz,O2tenant.tenant-id",
            },
          },
        },
      },
    },
  ],
};

const test2 = [
  {
    type: "versions",
    id: "urn:adsk.wipprod:fs.file:vf.hC6k4hndRWaeIVhIjvHu8w?version=2",
    attributes: {
      name: "my_model.rvt",
      displayName: "my_model",
      createTime: "2018-01-17T11:52:34.0000000Z",
      createUserId: "BW9RM76WZBGL",
      createUserName: "John Doe",
      lastModifiedTime: "2018-01-17T11:53:20.0000000Z",
      lastModifiedUserId: "BW9RM76WZBGL",
      lastModifiedUserName: "John Doe",
      versionNumber: 2,
      mimeType: "application/vnd.autodesk.r360",
      fileType: "rvt",
      extension: [Object],
    },
    relationships: {
      links: [Object],
      refs: [Object],
      downloadFormats: [Object],
      derivatives: [Object],
      thumbnails: [Object],
      storage: [Object],
    },
  },
];
// Covert JavaScript object into JSON string
const test = JSON.stringify(sample);

// Covert JSON string into object
const bookObject = JSON.parse(test);
console.log(bookObject.included[0].attributes.extension.data.modelGuid); //.extension.data); // Print: Ego is the Enemy
