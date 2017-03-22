module.exports = {
  port:8080,
  files:["./public/**/*.{html,htm,css,js}","./src/**/*.{html,htm,css,js}"],
  server: { "baseDir": "./public",
            routes : {
                '/src' :'./src',
                '/components' :'./src/components',
                '/public' : './public'
            }
    }
};
