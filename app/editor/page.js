2:05:32 PM: build-image version: c7d789db33033d118ad9bb27d4968225e0f4a584 (noble)
2:05:32 PM: buildbot version: c7d789db33033d118ad9bb27d4968225e0f4a584
2:05:32 PM: Fetching cached dependencies
2:05:32 PM: Starting to download cache of 330.6MB (Last modified: 2025-06-20 10:32:48 +0000 UTC)
2:05:33 PM: Finished downloading cache in 1.363s
2:05:33 PM: Starting to extract cache
2:05:40 PM: Finished extracting cache in 6.496s
2:05:40 PM: Finished fetching cache in 7.917s
2:05:40 PM: Starting to prepare the repo for build
2:05:40 PM: Preparing Git Reference refs/heads/main
2:05:41 PM: Starting to install dependencies
2:05:41 PM: Started restoring cached python cache
2:05:42 PM: Finished restoring cached python cache
2:05:42 PM: Python version set to 3.13.3
2:05:42 PM: Started restoring cached ruby cache
2:05:43 PM: Finished restoring cached ruby cache
2:05:43 PM: Ruby version set to 3.4.3
2:05:43 PM: Started restoring cached go cache
2:05:44 PM: Finished restoring cached go cache
2:05:44 PM: Go version set to 1.24.4
2:05:44 PM: Using PHP version
2:05:45 PM: v22.16.0 is already installed.
2:05:45 PM: Now using node v22.16.0 (npm v10.9.2)
2:05:45 PM: Enabling Node.js Corepack
2:05:45 PM: Started restoring cached build plugins
2:05:45 PM: Finished restoring cached build plugins
2:05:45 PM: Started restoring cached corepack dependencies
2:05:45 PM: Finished restoring cached corepack dependencies
2:05:45 PM: No npm workspaces detected
2:05:45 PM: Started restoring cached node modules
2:05:45 PM: Finished restoring cached node modules
2:05:45 PM: Installing npm packages using npm version 10.9.2
2:05:46 PM: up to date in 469ms
2:05:46 PM: npm packages installed
2:05:46 PM: Successfully installed dependencies
2:05:46 PM: Starting build script
2:05:47 PM: Detected 1 framework(s)
2:05:47 PM: "next" at version "14.0.0"
2:05:47 PM: Section completed: initializing
2:05:48 PM: ​
2:05:48 PM: Netlify Build                                                 
2:05:48 PM: ────────────────────────────────────────────────────────────────
2:05:48 PM: ​
2:05:48 PM: ❯ Version
2:05:48 PM:   @netlify/build 33.4.6
2:05:48 PM: ​
2:05:48 PM: ❯ Flags
2:05:48 PM:   accountId: 684b368d76cdaf1e47dc76fb
2:05:48 PM:   baseRelDir: true
2:05:48 PM:   buildId: 6855407ab6bd620008daac10
2:05:48 PM:   deployId: 6855407ab6bd620008daac12
2:05:48 PM: ​
2:05:48 PM: ❯ Current directory
2:05:48 PM:   /opt/build/repo
2:05:48 PM: ​
2:05:48 PM: ❯ Config file
2:05:48 PM:   No config file was defined: using default values.
2:05:48 PM: ​
2:05:48 PM: ❯ Context
2:05:48 PM:   production
2:05:48 PM: ​
2:05:48 PM: ❯ Installing extensions
2:05:48 PM:    - neon
2:05:50 PM: ​
2:05:50 PM: ❯ Using Next.js Runtime - v5.11.3
2:05:50 PM: ​
2:05:50 PM: ❯ Loading extensions
2:05:50 PM:    - neon
2:05:51 PM: Next.js cache restored
2:05:51 PM: ​
2:05:51 PM: Build command from Netlify app                                
2:05:51 PM: ────────────────────────────────────────────────────────────────
2:05:51 PM: ​
2:05:51 PM: $ npm run build
2:05:51 PM: > webmaster-pro-frontend@1.0.0 build
2:05:51 PM: > next build
2:05:52 PM:  ⚠ Invalid next.config.js options detected:
2:05:52 PM:  ⚠     Unrecognized key(s) in object: 'appDir' at "experimental"
2:05:52 PM:  ⚠ See more info here: https://nextjs.org/docs/messages/invalid-next-config
2:05:52 PM:    ▲ Next.js 14.0.0
2:05:52 PM:    Creating an optimized production build ...
2:05:52 PM: Failed to compile.
2:05:52 PM: 
2:05:52 PM: ./app/editor/page.js
2:05:52 PM: Error:
2:05:52 PM:   x Unexpected token `;`. Expected identifier
2:05:52 PM:      ,-[/opt/build/repo/app/editor/page.js:762:1]
2:05:52 PM:  762 |   },
2:05:52 PM:  763 |
2:05:52 PM:  764 |
2:05:52 PM:  765 | 'use client';
2:05:52 PM:      :             ^
2:05:52 PM:  766 |
2:05:52 PM:  767 | import React from 'react';
2:05:52 PM:  768 | import ResponsiveEditor from './ResponsiveEditor';
2:05:52 PM:      `----

Caused by:
    Syntax Error

Import trace for requested module:
./app/editor/page.js
2:05:52 PM: > Build failed because of webpack errors
2:05:53 PM: Failed during stage 'building site': Build script returned non-zero exit code: 2 (https://ntl.fyi/exit-code-2)
2:05:53 PM: ​
2:05:53 PM: "build.command" failed                                        
2:05:53 PM: ────────────────────────────────────────────────────────────────
2:05:53 PM: ​
2:05:53 PM:   Error message
2:05:53 PM:   Command failed with exit code 1: npm run build (https://ntl.fyi/exit-code-1)
2:05:53 PM: ​
2:05:53 PM:   Error location
2:05:53 PM:   In Build command from Netlify app:
2:05:53 PM:   npm run build
2:05:53 PM: ​
2:05:53 PM:   Resolved config
2:05:53 PM:   build:
2:05:53 PM:     command: npm run build
2:05:53 PM:     commandOrigin: ui
2:05:53 PM:     publish: /opt/build/repo/.next
2:05:53 PM:     publishOrigin: ui
2:05:53 PM:   plugins:
2:05:53 PM:     - inputs: {}
2:05:53 PM:       origin: ui
2:05:53 PM:       package: '@netlify/plugin-nextjs'
2:05:53 PM: Build failed due to a user error: Build script returned non-zero exit code: 2
2:05:53 PM: Failing build: Failed to build site
2:05:53 PM: Finished processing build request in 21.679s
