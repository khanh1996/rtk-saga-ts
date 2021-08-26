import { getModuleAndParentTrack } from 'app/core/features/module/moduleTrackSlice';
import { useAppDispatch } from 'app/core/redux/hooks';
import { humanReadableTimeFromSeconds } from 'app/ui/utils/helpers';
import { colors, IconArrowRight, IconDoubleArrowRight } from 'app/ui/utils/styles';
import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  module?: any;
  track?: any;
}

const ModulesNav = ({ module, track }: Props) => {
  const dispatch = useAppDispatch();
  const { path } = useRouteMatch();
  console.log(path);

  function onClickGetModuleAndParentTrack(moduleId: string) {
    dispatch(getModuleAndParentTrack({ moduleId: moduleId, trackId: track?.id }));
  }
  return (
    <ModulesNavContainer>
      <ModuleTitle>
        <h4>
          <Link to={`/customer/track/${track?.id}`}>{track.title}</Link>
        </h4>
      </ModuleTitle>
      <ModulesList>
        {track?.modules?.map((navModule: any) => (
          <ModuleListItem key={`module_${navModule.id}`}>
            <div>
              <ModuleNavStyledLink
                to={`./${navModule.id}`}
                onClick={() => onClickGetModuleAndParentTrack(navModule.id)}
              >
                {/* isActive={navModule.id === module.id} */}
                <ModuleListItemContent>
                  {navModule.id === module.id ? (
                    <IconDoubleArrowRight width="14px" />
                  ) : (
                    <IconArrowRight width="14px" weight="thin" />
                  )}
                  <div>{navModule.title}</div>
                  <div>{humanReadableTimeFromSeconds(navModule.length)}</div>
                </ModuleListItemContent>
              </ModuleNavStyledLink>
            </div>
          </ModuleListItem>
        ))}
      </ModulesList>
    </ModulesNavContainer>
  );
};

export default ModulesNav;

/** Module Navigation styled components */
const ModulesNavContainer = styled.div({
  width: '33%',
  position: 'relative',
  marginLeft: 20,
  backgroundColor: colors.black.light,
  borderRadius: 4,
  border: `solid 1px ${colors.black.lighter}`,
  overflow: 'auto',
});

const trackTitleHeight = 70;

const ModuleTitle = styled.div`
  display: flex;
  position: sticky;
  font-size: 1.6em;
  font-weight: 400;
  height: ${trackTitleHeight}px;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${colors.pink.base};
  border-bottom: solid 1px ${colors.pink.base};
  a {
    text-decoration: none;
    color: ${colors.silver.base};
  }
  :hover {
    background-color: ${colors.black.base};
  }
`;

const ModulesList = styled.ul({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  overflowY: 'scroll',
  height: `calc(100% - ${trackTitleHeight}px)`,
});

const ModuleListItem = styled.li((props) => ({
  borderBottom: `solid 1px ${colors.grey.darker}`,
  ':last-child': {
    borderBottom: 'none',
  },
}));

const ModuleNavStyledLink = styled(Link)({
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
});

const ModuleListItemContent = styled.div((props: any) => ({
  backgroundColor: props.isActive ? colors.black.base : colors.black.light,
  color: props.isActive ? colors.silver.lighter : colors.silver.darker,
  minHeight: 80,
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '1.1em',
  flex: 1,
  ':hover': {
    backgroundColor: props.isActive ? colors.black.dark : colors.black.base,
    color: 'white',
  },
}));
