---
to: src/components/<%= name %>/index.tsx
unless_exists: true
---
import React from 'react';
// import PropTypes from 'prop-types';

import * as S from './styled';

function <%= name %>({ ...props }) {
  return <div><%= name %></div>;
}

// <%= name %>.defaultProps = {};
// <%= name %>.propTypes = {};

export default <%= name %>;
