# full stack web development starter template

## client - frontend development

npm run setup - installs bower and npm modules

npm run wire - wire up front end dependencies

npm run start - watch live development server

npm run build - build static final files

npm run server - webserver see build static files

## Global npm install

    npm install -g browserify live-reload beefy


## To use on Windows -

add

    npm install globstar --global
    npm install live-reload --global

edit package.json to

    "pug": "globstar -- pug --pretty \"**/client/jade/*.pug\" --out ./client/preview",
    "watch-pug": "globstar -- pug --pretty --watch \"**/client/jade/*.pug\" --out ./client/preview",
    "live": "live-reload client --port=35729 --delay=900",
