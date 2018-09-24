import expressServer from "./server";
import express from "express";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import Helmet from "react-helmet";
import routes from "./client/routes";
import PianoApp from "./client/PianoApp";
import Home from "./client/Home";
import createStore, { initializeSession } from "./client/store";

expressServer.use( express.static( path.resolve( __dirname, "../dist" ) ) );


expressServer.get( "/*", ( req, res ) => {
    const context = { };
    const store = createStore( );

    store.dispatch( initializeSession( ) );

    const dataRequirements =
        routes
            .filter( route => matchPath( req.url, route ) ) // filter matching paths
            .map( route => route.component ) // map to components
            .filter( comp => comp.serverFetch ) // check if components have data requirement
            .map( comp => store.dispatch( comp.serverFetch( ) ) ); // dispatch data requirement

    Promise.all( dataRequirements ).then( ( ) => {
        const jsx = (
            <ReduxProvider store={ store }>
                <StaticRouter context={ context } location={ req.url }>
                    <Layout/>
                </StaticRouter>
            </ReduxProvider>
        );
        const reactDom = renderToString( jsx );
        const reduxState = store.getState( );
        const helmetData = Helmet.renderStatic( );

        res.writeHead( 200, { "Content-Type": "text/html" } );
        res.end( htmlTemplate( reactDom, reduxState, helmetData ) );
    } );
} );





// expressServer.use(handleRender);
// function handleRender(req, res) {
//   // Create a new Redux store instance
//   // const store = createStore(()=>1,1);
// 	const context = { };
//     const store = createStore( );

//     store.dispatch( initializeSession( ) );


//     const dataRequirements =
//         routes
//             .filter( route => matchPath( req.url, route ) ) // filter matching paths
//             .map( route => route.component ) // map to components
//             .filter( comp => comp.serverFetch ) // check if components have data requirement
//             .map( comp => store.dispatch( comp.serverFetch( ) ) ); // dispatch data requirement



//     Promise.all( dataRequirements ).then( ( ) => {
//       const reactDom = renderToString(
//         <ReduxProvider store={store}>
//           <StaticRouter context={ context } location={ req.url }>
//               <Home/>
//             </StaticRouter>
//         </ReduxProvider>
//       );

//         // res.writeHead( 200, { "Content-Type": "text/html" } );
//         // res.end( htmlTemplate( reactDom, reduxState, helmetData ) );

//         const helmetData = Helmet.renderStatic( );
//         const preloadedState = store.getState();    // Send the rendered page back to the client
//         res.writeHead( 200, { "Content-Type": "text/html" } );
//         res.end(renderFullPage(reactDom, preloadedState, helmetData));

//     } );
// }

function renderFullPage(html, preloadedState, helmetData) {
  return `
    <!doctype html>
    <html>
      <head>
             <meta charset="utf-8">
            ${ helmetData.title.toString( ) }
            ${ helmetData.meta.toString( ) }
            <title>React SSR</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          // window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          window.REDUX_DATA = ${ JSON.stringify(preloadedState) }
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `;
}

function htmlTemplate( reactDom, reduxState, helmetData ) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            ${ helmetData.title.toString( ) }
            ${ helmetData.meta.toString( ) }
            <title>React SSR</title>
        </head>
        
        <body>
            <div id="app">${ reactDom }</div>
            <script>
                window.REDUX_DATA = ${ JSON.stringify( reduxState ) }
            </script>
            <script src="./app.bundle.js"></script>
        </body>
        </html>
    `;
}

var urlEx = expressServer.listen(8081);
console.log(`🚀 Express server running: http://localhost:${urlEx.address().port} `);
//
