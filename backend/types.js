const { gql } = require("graphql-tag");

const typeDefs = gql`
  type Message {
    id: ID!
    text: String!
    timestamp: String!
    userImage: String!
    walletAddress: String!
    username: String!
  }

  type Query {
    messages: [Message!]!
  }

  type Mutation {
    addMessage(
      text: String!
      userImage: String!
      walletAddress: String!
      username: String!
    ): Message!
  }
`;

module.exports = { typeDefs };