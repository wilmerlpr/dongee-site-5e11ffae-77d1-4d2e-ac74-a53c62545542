export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'panel' | 'bateria' | 'inversor' | 'accesorio';
  price: number;
  image_url: string;
  specs: Record<string, string>;
}