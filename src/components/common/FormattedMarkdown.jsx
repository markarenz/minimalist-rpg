import React from 'react';
import { useIntl } from 'react-intl';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

const FormattedMarkdown = ({ id }) => {
  const { formatMessage } = useIntl();
  const message = formatMessage({ id });
  return <ReactMarkdown>{message}</ReactMarkdown>;
};

FormattedMarkdown.propTypes = {
  id: PropTypes.string.isRequired,
};
export default FormattedMarkdown;
