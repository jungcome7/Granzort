export const fetchBooks = async (query:string) => {
  const res = await fetch(
    `https://dapi.kakao.com/v3/search/book?&query=${query}&size=10&page=1`,
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
