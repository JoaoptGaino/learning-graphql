import {ApolloServer, gql} from 'apollo-server';

const typeDefs = gql`
    type Book{
        title:String
        author:String
    }

    type Query{
        books:[Book]
    }
`;


const books = [
    {
        title:"Fight club",
        author:"Chuck Palahniuk"
    }
]

const resolvers = {
    Query:{
        books:()=>books,
    },
};

const server = new ApolloServer({typeDefs,resolvers});
server.listen().then(({url})=>{
    console.log(`Server running at ${url}`);
});