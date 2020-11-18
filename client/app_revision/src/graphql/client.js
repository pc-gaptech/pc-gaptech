import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "http://13.229.97.157:4000/",
	cache: new InMemoryCache(),
});

export default client;
