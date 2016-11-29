# full stack web development starter template

## client - frontend development

npm run setup - installs bower and npm modules

npm run wire - wire up front end dependencies

npm run start - watch live development server

npm run build - build static final files

npm run server - webserver see build static files

## Global npm install

    sudo npm install -g bower gulp

    sudo npm install -g browserify beefy livereload 

## To use on Windows -

The npm modules such as gulp are not installed to the path.

If gulp has been installed globally, you can use the process below:

    1. Create an environmental variable called NODE_PATH

    2. Set it to: %AppData%\npm\node_modules

