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

add

    npm install live-reload --global

edit package.json to

    "live": "live-reload client --port=35729 --delay=900",
