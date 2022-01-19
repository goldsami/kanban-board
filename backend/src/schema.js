import {
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLInputObjectType,
} from 'graphql';
import { Authors } from './data/authors';
import { Posts } from './data/posts';

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'This represent an author',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    twitterHandle: { type: GraphQLString },
  }),
});

const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'This represent a Post',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    body: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(post) {
        return Authors.find((a) => a.id === post.author_id);
      },
    },
  }),
});

const BlogQueryRootType = new GraphQLObjectType({
  name: 'BlogAppSchema',
  description: 'Blog Application Schema Query Root',
  fields: () => ({
    authors: {
      type: new GraphQLList(AuthorType),
      description: 'List of all Authors',
      resolve() {
        return Authors;
      },
    },
    posts: {
      type: new GraphQLList(PostType),
      description: 'List of all Posts',
      resolve() {
        return Posts;
      },
    },
  }),
});

const inputMovieType = new GraphQLInputObjectType({
  name: 'MovieInput',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    year: { type: GraphQLInt },
    directorId: { type: GraphQLID },
  },
});

// const outputMovieType = new GraphQLOutpuType

export const mutationType = new GraphQLObjectType({
  name: 'mutation',
  fields: {
    addAuthor: {
      type: PostType,
      args: {
        data: { type: inputMovieType },
      },
      resolve: (source, args) => {
        console.log('resolve', { source, args });
      },
    },
  },
});

export const BlogAppSchema = new GraphQLSchema({
  query: BlogQueryRootType,
  mutation: mutationType,
  /* Если вам понадобиться создать или
     обновить данные, вы должны использовать
     мутации.
     Мутации не будут изучены в этом посте.
     mutation: BlogMutationRootType
  */
});
