import { colors, widths } from 'app/ui/utils/styles';
import styled from 'styled-components';

/**
 * Content Section component renders content (mainly text/mdown based)
 * for course detail and lesson detail
 */
interface Props {
  children: any;
}

const ContentSection = ({ children }: Props) => {
  return <ContentDiv>{children}</ContentDiv>;
};

export default ContentSection;

/** ContentSection styled component */
const ContentDiv = styled.div({
  marginTop: 10,
  display: 'flex',
  flexDirection: 'column',
  maxWidth: widths.textPageWidth,
  width: '100%',
  alignSelf: 'center',
  backgroundColor: colors.background,
});
