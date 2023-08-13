# VueTSTW_Template
-Allows a CDN-like approach to using Vue.js without sacrificing Typescript functionality  
-Done by installing Vue 3.3.4 (for the types) alongside a local copy of the Vue 3.3.4 JS module in /src (dev) and /docs (prod, so it's minified there)  
-Also includes TailwindCSS  

-Easy to deploy to Github Pages  
  -On GH: go to settings -> pages -> make sure you're on preferred branch w/ /docs selected, then press save  
-Meant for use in VS Code (esp w/ Vue's Volar and Typescript Support Extensions installed)  
-Made in Windows though it may also work in Linux. Dev commands must be modified to work in Mac OS  

-To dev:  
  npm run devTS  
  Ctrl+C to exit terminal windows  
-To prod  
  purge CSS if desired, otw, no build needed  
