import React from 'react';
import PropType from 'prop-types';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import LoadData from './LoadData';

import environment from '../environment';

const query = graphql`
  query LoadDataQuery {
    urls {
      ...LoadData_url
    }
  }
`;

export const Renderer = ({ error, props: data }) => {
  if (error) return <div>error!</div>;
  if (!data) return <div>loading...</div>;
  return <LoadData data={data} />;
};

Renderer.propTypes = {
  error: PropType.object,
  props: PropType.object
};

Renderer.defaultProps = {
  error: undefined,
  props: undefined
};

export const LoadDataRoot = props => {
  const variables = {};

  return (
    <QueryRenderer
      environment={environment}
      query={query}
      variables={variables}
      render={Renderer}
    />
  );
};

LoadDataRoot.propTypes = {
  environment: PropType.object.isRequired,
  selectedOrganization: PropType.object
};

LoadDataRoot.defaultProps = {
  selectedOrganization: null
};

export default LoadDataRoot;
