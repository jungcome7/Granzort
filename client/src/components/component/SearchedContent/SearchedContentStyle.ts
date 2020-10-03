import styled from 'styled-components';
import {
  $WHITE,
  $GRAY_000,
  $GRAY_001,
  $GRAY_002,
  $GRAY_006,
  $GRAY_004,
} from '../../../styles/color-variables';
import MenuBook from '@material-ui/icons/MenuBook';

export const Container = styled.div`
  display: flex;
  margin: 10px;
  padding: 10px;
  background-color: ${$WHITE};
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: ${$GRAY_000};
    box-shadow: 2px 2px 5px ${$GRAY_004};
  }
`;

interface BookImgProps {
  bookWidth: string;
  bookHeight: string;
}
export const BookImg = styled.img<BookImgProps>`
  /* width: 120px;
  height: 173.99px; */
  width: ${(props) => props.bookWidth};
  height: ${(props) => props.bookHeight};
  border-radius: 10px;
  box-shadow: 2px 2px 5px ${$GRAY_004};
`;

export const EmptyBookImg = styled.div<BookImgProps>`
  width: ${(props) => props.bookWidth};
  height: ${(props) => props.bookHeight};
  border-radius: 10px;
  background-color: ${$GRAY_001};
  box-shadow: 2px 2px 5px ${$GRAY_004};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuBookIcon = styled(MenuBook)`
  color: ${$GRAY_006};
`;

export const BookInfo = styled.div`
  margin-left: 20px;
  & p {
    margin: 5px;
  }
`;
interface TitleProps {
  titleFontSize: string;
}

interface ContentProps {
  contentFontSize: string;
}

export const Title = styled.p<TitleProps>`
  font-size: ${(props) => props.titleFontSize};
  font-weight: 600;
`;
export const Authors = styled.p<ContentProps>`
  font-size: ${(props) => props.contentFontSize};
`;
export const Translators = styled.p<ContentProps>`
  font-size: ${(props) => props.contentFontSize};
`;
export const Publisher = styled.p<ContentProps>`
  font-size: ${(props) => props.contentFontSize};
`;
export const PublishedDate = styled.p<ContentProps>`
  font-size: ${(props) => props.contentFontSize};
`;
