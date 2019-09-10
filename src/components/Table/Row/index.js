import React from 'react';
import PropType from 'prop-types';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import Row from './Row';

import environment from '../../../environment';

const query = graphql`
  query RowQuery {
    urls {
      ...Row_Row
    }
  }
`;

export const Renderer = ({ error, props: data }) => {
  console.log('in index');
  if (error) return <div>error!</div>;
  if (!data) return <div>loading...</div>;
  return <Row data={data} />;
};

Renderer.propTypes = {
  error: PropType.object,
  props: PropType.object
};

Renderer.defaultProps = {
  error: undefined,
  props: undefined
};

export const RowRoot = () => {
  const variables = {};
  console.log('test');

  return (
    <QueryRenderer
      environment={environment}
      query={query}
      variables={variables}
      render={Renderer}
    />
  );
};

export default RowRoot;
