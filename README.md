# Topaz Pool group
A client website based on Apollo's lift-off course companion app (completed)
[Live Demo App](https://lift-off-client-demo.netlify.app/)

# Run
To get started run the following command.

```
yarn install && yarn start
```
or
```
yarn start
```

Once everything is bootstraped navigate to `http://localhost:3000` in your browser. See the Documentation section for more details on how to connect the middleware.

## Tests
No tests at the moment


You should be able to see the test results report as the list in the console.

## Build for production
Build for production option is provided by running:

```bash
yarn build
```
You'll find under /build folder files you can deploy.

## Documentation
Checkout the [middleware](https://github.com/vladyn/Catstronaut-api) repo and run it.
Make sure you have credentials to the [backend](https://technologytalents.io/space-cats/catstronaut). They can be requested from the author. 
Create a file in the root folder of the middleware project called config.js with your credentials like 
```
module.exports = credentials = {
    username: yourData,
    password: yourData
}
```
Run the Middleware Apollo GraphQL server. Run the front-end (this project).

navigate to `http://localhost:3000` in your browser.

## Deployment
Deploy is thought sftp on the client host. Ask for permissions the author. 


## Build with
- JS ([ECMAScript 2021](https://2ality.com/2020/09/ecmascript-2021.html))
- [ReactJS](https://reactjs.org)
- [Apollo Grapgl Studio](https://www.apollographql.com/) for middleware 
- [React Create App](https://reactjs.org/docs/create-a-new-react-app.html)
- [Expression Engine 2.x](https://expressionengine.com/)
- [React test tools](https://testing-library.com/docs/react-testing-library/intro/)

## Meta
[1.1]: http://i.imgur.com/wWzX9uB.png
[2.1]: http://i.imgur.com/9I6NRUm.png

Vladimir Varbanov
- [vlado1.com](http://vlado1.com)
- [![GitHub][2.1]](https://github.com/vladyn/) [vladyn](https://github.com/vladyn/)
- [![Twitter][1.1]](https://twitter.com/vladyn) [@vladyn](https://twitter.com/vladyn)

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](https://github.com/vladyn/topaz-pool/blob/master/LICENSE)

