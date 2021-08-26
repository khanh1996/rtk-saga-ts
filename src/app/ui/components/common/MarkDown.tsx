import { colors } from 'app/ui/utils/styles';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

/**
 * Markdown component is a simple style wrapper for markdown content used across our app
 */
interface Props {
  content: string;
}

const MarkDown = ({ content }: Props) => {
  return <StyledMarkdown children={content} />;
};

export default MarkDown;

/** Markdown styled components */
const StyledMarkdown = styled(ReactMarkdown)({
  color: colors.grey.darker,

  h1: {
    fontSize: '1.7em',
  },
  h2: {
    fontSize: '1.4em',
  },
  h3: {
    fontSize: '1.2em',
  },
  a: {
    color: colors.pink.base,
  },
  pre: {
    padding: 20,
    borderRadius: 4,
    border: `solid 1px ${colors.silver.dark}`,
    backgroundColor: colors.silver.base,
    code: {
      fontSize: '0.9em',
    },
  },
});
