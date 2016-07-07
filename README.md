# full stack web development starter template

## client - frontend development

npm run setup - installs bower and npm modules

npm run wire - wire up front end dependencies

npm run start - watch live development server

npm run build - build static final files

npm run server - webserver see build static files


## To use on Windows -

add

    npm install globstar --global

edit package.json to

    "pug": "globstar -- pug --pretty \"**/client/jade/*.pug\" --out ./client/preview",
    "watch-pug": "globstar -- pug --pretty --watch \"**/client/jade/*.pug\" --out ./client/preview",
