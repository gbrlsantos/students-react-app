import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import App  from "./App"

const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
