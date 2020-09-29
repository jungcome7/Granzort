import Link from 'next/link';
import React from 'react';
import { Header } from '../components/Header';
import { SubHeader } from '../components/SubHeader';
import { BookCardContainer } from '../components/BookCardContainer';

const data = [
  {
    id: 1,
    title: '아침놀',
    imgSrc:
      'http://image.kyobobook.co.kr/images/book/xlarge/345/x9788970134345.jpg',
    category: '철학',
  },
  {
    id: 2,
    title: '현대물리학과 동양사상',
    imgSrc:
      'http://image.kyobobook.co.kr/images/book/xlarge/634/x9788971671634.jpg',
    category: '과학',
  },
  {
    id: 3,
    title: '코스모스',
    imgSrc:
      'http://image.kyobobook.co.kr/images/book/xlarge/892/x9788983711892.jpg',
    category: '과학',
  },
  {
    id: 4,
    title: '도덕경',
    imgSrc:
      'http://image.kyobobook.co.kr/images/book/xlarge/676/x9791187142676.jpg',
    category: '철학',
  },
  {
    id: 5,
    title: '국부론(상)',
    imgSrc:
      'http://image.kyobobook.co.kr/images/book/xlarge/600/x9788937603600.jpg',
    category: '경제&경영',
  },
  {
    id: 6,
    title: 'CODE',
    imgSrc:
      'http://image.kyobobook.co.kr/images/book/xlarge/253/x9788966261253.jpg',
    category: '컴퓨터과학',
  },
  {
    id: 7,
    title: '조선상고사',
    imgSrc:
      'http://image.kyobobook.co.kr/images/book/xlarge/488/x9788937603488.jpg',
    category: '역사',
  },
  {
    id: 8,
    title: '총 균 쇠',
    imgSrc:
      'http://image.kyobobook.co.kr/images/book/xlarge/248/x9788970127248.jpg',
    category: '사회과학',
  },
];

const indexPage = () => {
  return (
    <>
      <Header />
      <SubHeader />
      <BookCardContainer data={data}/>
    </>
  );
};

export default indexPage;
