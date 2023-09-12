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

export const GET_REPO_DETAILS = gql`
  query GetRepoDetails($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      name
      owner {
        login
      }
      stargazerCount
      description
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

export const GET_ISSUE_DETAILS = gql`
  query GetIssue($owner: String!, $name: String!, $number: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $number) {
        title
        body
        state
        author {
          login
          avatarUrl
        }
        comments(first: 10) {
          nodes {
            author {
              login
              avatarUrl
            }
            body
            createdAt
            updatedAt
          }
        }
      }
    }
  }
`;
