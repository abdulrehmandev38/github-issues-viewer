import { gql } from "@apollo/client";

export const SEARCH_REPOSITORIES = gql`
  query SearchRepositories($repo: String!) {
    search(query: $repo, type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            id
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

export const GET_ISSUES = gql`
  query GetIssues($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      issues(first: 10) {
        nodes {
          title
          body
          number
          state
          bodyHTML
          comments {
            totalCount
          }
          author {
            login
          }
        }
      }
    }
  }
`;
