Space-Tools
==========

A series of tools and proofs of concept for EvE online

**Dependencies:**
Gulp
npm

**Frameworks/languages used:** Bootstrap + Angular + ES6 + SASS

**Steps to compile**
* **1.** npm install
* **2.** gulp 
* **3.** gulp styles
* **4.** launch the app from build/index.html

**File structure explantion**

**es5/** - older version of javascript for use in current day browsers due to the newness of the ES6 syntax and tyle

**app/** - where you will be changing code and making modifications to be compiled, this entire directory consists of Bootstrap + Angular + ES6 + SASS to form the backbone and core of the front end portion of the application.

**build/** - this folder is where you want to be running the code that you are writing in the app folder it is the finished compiled/minified version of the code and is able to be viewd in modern browsers.

**index.html** - this is the roots that the app tree springs from and the only file outside of the app folder you will be editing.
