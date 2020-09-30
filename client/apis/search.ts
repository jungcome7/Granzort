import React from 'react';

export const getBooks = async () => {
  const res = await fetch(
    `https://dapi.kakao.com/v3/search/book?target=authors&query=박찬&size=1&page=3`,
    {
      method: 'GET',
      headers: {
        Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );
  const result = await res.json();
  return result;
};
