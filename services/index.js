import { request, gql } from 'graphql-request';

//enivormental variable 
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

//pass the query 
export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
           
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
}
