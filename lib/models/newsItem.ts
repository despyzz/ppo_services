export interface NewsItemDto {
  // ID новости
  id_news: number,
  // Заголовок новости
  name: string,
  // Описание новости (HTML)
  description: string,
  // Дата новости
  date: string,
  // Путь до картинки
  path_to_photo: string,
  // Альтернативный текст
  Alt: string,
  // Цветовой акцент
  Colour: string,
  // Дополнительные атрибуты
  Attribute: string,
}