import { gql } from "graphql-tag";

export const typeDefs = gql`
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

export type MeessageType = {
  text: string;
  userImage: string;
  walletAddress: string;
  username: string;
};
