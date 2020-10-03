import React from 'react';
import * as S from './SearchedContentStyle';
import { Book } from '../../../../../types/book';

interface SearchedContentProps extends Book {
  bookWidth: string;
  bookHeight: string;
  titleFontSize: string;
  contentFontSize: string;
  setDisplaySearchModal?: (displaySearchModal: boolean) => void;
  setSelectedBook?: (book: Book) => void;
}

const SearchedContent: React.FC<SearchedContentProps> = ({
  setDisplaySearchModal,
  setSelectedBook,
  bookWidth,
  bookHeight,
  titleFontSize,
  contentFontSize,
  ...data
}: SearchedContentProps) => {
  const { thumbnail, title, authors, translators, publisher, datetime } = data;

  const selectBook = () => {
    setDisplaySearchModal && setDisplaySearchModal(false);
    setSelectedBook && setSelectedBook(data);
  };

  return (
    <S.Container onClick={selectBook}>
      {thumbnail ? (
        <S.BookImg
          src={thumbnail}
          bookWidth={bookWidth}
          bookHeight={bookHeight}
        />
      ) : (
        <S.EmptyBookImg bookWidth={bookWidth} bookHeight={bookHeight}>
          <S.MenuBookIcon style={{ fontSize: '30px' }} />
        </S.EmptyBookImg>
      )}
      <S.BookInfo>
        <S.Title titleFontSize={titleFontSize}>{title}</S.Title>
        <S.Authors contentFontSize={contentFontSize}>
          {authors.join(', ')}
        </S.Authors>
        {/* {translators && (
          <S.Translators contentFontSize={contentFontSize}>
            {translators.join(', ')}
          </S.Translators>
        )} */}
        <S.Publisher contentFontSize={contentFontSize}>{publisher}</S.Publisher>
        <S.PublishedDate contentFontSize={contentFontSize}>
          {datetime.split('T')[0]}
        </S.PublishedDate>
      </S.BookInfo>
    </S.Container>
  );
};

export default SearchedContent;
