import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const G_TOKEN = process.env.REACT_APP_G_TOKEN;

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${G_TOKEN}`,
  },
});

const ApolloWrapper = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
