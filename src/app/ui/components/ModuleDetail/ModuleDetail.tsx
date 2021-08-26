import useWindowDimensions from 'app/ui/hooks/useWindowDimensions';
import { colors, widths } from 'app/ui/utils/styles';
import styled from 'styled-components';
import ContentSection from '../common/ContentSection';
import MarkDown from '../common/MarkDown';
import ModulesNav from '../ModulesNav/ModulesNav';
import ReactPlayer from 'react-player/youtube';

interface Props {
  track?: any;
  module?: any;
}

const ModuleDetail = ({ track, module }: Props) => {
  const { videoUrl, title, content } = module;
  const { width, height } = useWindowDimensions();
  return (
    <>
      <TopSection>
        <TopContainer totalWidth={width}>
          <PlayerContainer>
            <ReactPlayer url={videoUrl} width="100%" height="100%" />
          </PlayerContainer>
          <ModulesNav track={track} module={module}></ModulesNav>
        </TopContainer>
      </TopSection>
      <ContentSection>
        <ModuleTitle>{title}</ModuleTitle>
        <MarkDown content={content} />
      </ContentSection>
    </>
  );
};

export default ModuleDetail;

/** Module Detail styled components */
const TopSection = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colors.black.base};
  padding: 20px;
  border-bottom: solid 1px ${colors.pink.base};
`;

const TopContainer = styled.div.attrs((props: any) => ({
  totalWidth: ((props.totalWidth - 60) * (2 / 3)) / (16 / 9),
  maxHeight: (widths.largePageWidth * (2 / 3)) / (16 / 9),
}))`
  display: flex;
  flex-direction: row;
  align-self: center;
  width: 100%;
  max-width: ${widths.largePageWidth}px;
  // 60 below removes 3 * 20 horizontal paddings (sides and inner between player and list)
  height: ${(props) => props.totalWidth}px;
  max-height: ${(props) => props.maxHeight}px;
`;

const PlayerContainer = styled.div`
  width: 66%;
`;

const ModuleTitle = styled.h1`
  margin-top: 10px;
  margin-bottom: 30px;
  padding-bottom: 10px;
  color: ${colors.black.lighter};
  border-bottom: solid 1px ${colors.pink.base};
`;
