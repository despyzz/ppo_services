import { NewsItemDto } from '@/lib/models';
import React from 'react';
import NewsItem from './NewsItem';

export default async function NewsList() {
  // todo сделать адрес настраиваемым
  const news: NewsItemDto[] = await fetch('http://localhost:8080/ppo/API.php?action=getAllNews')
    .then((response) => response.json());

  return (
    <>
      {news.map((newsItem) => (
        <NewsItem key={newsItem.id_news} {...newsItem} />
      ))}
    </>
  );
}
