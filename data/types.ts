export interface Dress {
  slug: string;
  name: string;

  collection: string;
  collectionSlug: string;

  images: string[];

  description: string;

  // Основная информация
  color: string;
  fabric: string;
  line: string;

  // Дополнительные характеристики
  silhouette: string;
  train: string;
  neckline: string;
  sleeves: string;
  style: string;
}