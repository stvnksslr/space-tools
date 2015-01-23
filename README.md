Space-Tools
==========

A series of tools and proofs of concept for EvE online

[**Dependencies listed in package.json**](https://github.com/stvnksslr/spaceTools/blob/master/package.json)


**Frameworks/languages used:** Bootstrap + Angular + ES6 + SASS

**Steps to compile**
* **1.** npm install
* **2.** gulp 
* **3.** gulp styles
* **4.** launch the app from build/index.html

**File structure explantion**

```app/``` - Where you will be changing code and making modifications to be compiled, this entire directory consists of Bootstrap + Angular + ES6 + SASS to form the backbone and core of the front end portion of the application.

```es5/``` - 6to5 compiled source files from ```app/```, *used for reference/debugging*

```build/``` - Contains the browserify compiled code, and SASS compiled styles for the app.

```index.html``` - This is the entry point for the app and is the only file outside of the app folder you will be editing.
