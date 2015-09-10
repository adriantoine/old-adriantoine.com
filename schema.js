
import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql/type';

import { getBlog } from './schema/database';
import { blogType, node } from './schema/types';

var Root = new GraphQLObjectType({
  name: 'Root',
  fields: () => ({
    node: node.nodeField,
    blog: {
      type: blogType,
      resolve: () => getBlog()
    }
  }),
});

var schema = new GraphQLSchema({
  query: Root
});

export default schema;
