import { gql } from "@apollo/client";

export const SEARCH_REPOSITORIES = gql`
  query SearchRepositories($repo: String!) {
    search(query: $repo, type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            name
            owner {
              login
            }
            stargazerCount
            description
          }
        }
      }
    }
  }
`;
