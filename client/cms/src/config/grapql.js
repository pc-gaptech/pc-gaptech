import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
    uri: "http://localhost:4000",
    // uri: "http://3.137.158.163:4000/",
    cache: new InMemoryCache()
})

export default client