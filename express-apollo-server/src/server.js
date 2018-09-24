const { ApolloServer, gql } = require('apollo-server');
const express = require('express');
// const { ApolloServer, gql } = require('apollo-server-express');
const songs = [{
  id: 1,
  title: 'Some song title',
  keysPlayed: ['C', 'D', 'E'],
}];

const typeDefs = gql `
    type Song {
        id: ID!
        title: String
        keysPlayed: [String]
    }

    type Query {
        songs: [Song]
    }

    type Mutation {
        addSong(title: String, keysPlayed: [String]): Song
    }
`;

const resolvers = {
  Query: {
    songs: () => songs,
  },
  Mutation: {
    addSong: (_, { title, keysPlayed }) => {
      const newSong = {
        id: songs.length + 1,
        title,
        keysPlayed,
      };
      songs.push(newSong);

      return newSong;
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers });


// HTTP Server express
var expressServer = express();


// server.applyMiddleware({ expressServer }); // app is from an existing express app

server.listen().then(({ url }) => {
  console.log(`🚀 Apollo server running: ${url}`);
});

module.exports = expressServer;