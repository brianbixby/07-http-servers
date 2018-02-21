## Directory Structure

* **README.md** - contains documentation
* **.gitignore** - contains a robust `.gitignore` file 
* **.eslintrc.json** - contains the linter configuratoin
* **.eslintignore** - contains the linter ignore configuration
* **package.json** - contains npm package config
  * contains a `lint` script for running the linter
  * contains a `start` script for running the server
  * contains a `test` script for running Jest
* **lib/** - contains module definition (parse-body)
* **server.js** - vanilla Javascript HTTP server

## Feature Tasks  
For this assignment, I built a vanilla Javascript HTTP server. There are 3 route methods defined, a get route for the homepage, get and route for '/cowsay' and a post route for '/cowsay'.

##Instructions
Please fork this repo and install all dependencies (npm i -S) from inside the lab-brian folder. Please Make sure that you have the npm package httpie installed globally on your local machine. Open up the terminal and from inside the lab-brian folder enter the following command into your command line "node server.js". Open up a new tab in terminal and enter in the following command "http :3000" (a homepage get route). 

##Sample Commands
  *  '/' GET route: http :3000
  *  '/cowsay' GET route: http :3000/cowsay text=='Brian is the man'
     '/cowsay' GET route:http :3000/cowsay text=='Brian is the man' f=='dragon'
      * changes the cow to a dragon, please visit https://github.com/piuccio/cowsay/tree/master/cows for a full list of compatable animals
  *  '/cowsay' POST route:   http POST :3000/cowsay name=brian
  *  '/cowsay' POST route:   http :3000/cowsay name=brian f=='dragon'