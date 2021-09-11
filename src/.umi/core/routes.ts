// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/agree/Desktop/dumiapp/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('/Users/agree/Desktop/dumiapp/node_modules/@umijs/preset-dumi/lib/theme/layout').default],
    "component": (props) => {
        const { default: getDemoRenderArgs } = require('/Users/agree/Desktop/dumiapp/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { default: demos } = require('@@/dumi/demos');
        const { usePrefersColor } = require('dumi/theme');

        
      const renderArgs = getDemoRenderArgs(props, demos);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        }
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('/Users/agree/Desktop/dumiapp/node_modules/@umijs/preset-dumi/lib/theme/layout').default, require('/Users/agree/Desktop/dumiapp/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/components/foo",
        "component": require('/Users/agree/Desktop/dumiapp/src/Foo/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Foo/index.md",
          "updatedTime": 1631341885487,
          "componentName": "Foo",
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Foo",
              "heading": "foo"
            }
          ],
          "title": "Foo",
          "group": {
            "path": "/components/foo",
            "title": "Components"
          }
        },
        "title": "Foo"
      },
      {
        "path": "/",
        "component": require('/Users/agree/Desktop/dumiapp/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1631341885485,
          "hero": {
            "title": "dumiapp",
            "desc": "<div class=\"markdown\"><p>dumiapp site example</p></div>",
            "actions": [
              {
                "text": "Getting Started",
                "link": "/components"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "Feature 1",
              "desc": "<div class=\"markdown\"><p>Balabala</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "Feature 2",
              "desc": "<div class=\"markdown\"><p>Balabala</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "Feature 3",
              "desc": "<div class=\"markdown\"><p>Balabala</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2020<br />Powered by <a href=\"https://d.umijs.org/\" target=\"_blank\">dumi<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "Hello dumiapp!",
              "heading": "hello-dumiapp"
            }
          ],
          "title": "Hello dumiapp!"
        },
        "title": "Hello dumiapp!"
      },
      {
        "path": "/components",
        "meta": {},
        "exact": true,
        "redirect": "/components/foo"
      }
    ],
    "title": "dumiapp",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
