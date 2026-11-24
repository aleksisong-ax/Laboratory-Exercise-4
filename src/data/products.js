// Each item keeps its Lab 3 sample price in pesos and uses a matching local product image.
import wirelessMouse from '../assets/products/wireless-mouse.jpg';
import mechanicalKeyboard from '../assets/products/mechanical-keyboard.jpg';
import usbCHub from '../assets/products/usb-c-hub.jpg';
import javascriptHandbook from '../assets/products/javascript-handbook.svg';
import reactEssentials from '../assets/products/react-essentials.svg';
import notebookSet from '../assets/products/notebook-set.jpg';
import laptopSleeve from '../assets/products/laptop-sleeve.jpg';
import waterBottle from '../assets/products/water-bottle.jpg';

const products = [
  { id: 1, title: 'Wireless Mouse', price: 599, category: 'Electronics', inStock: true, image: wirelessMouse, imageAlt: 'Black wireless computer mouse', imageFit: 'cover' },
  { id: 2, title: 'Mechanical Keyboard', price: 2499, category: 'Electronics', inStock: true, image: mechanicalKeyboard, imageAlt: 'Pink mechanical keyboard with key switches', imageFit: 'cover' },
  { id: 3, title: 'USB-C Hub', price: 1299, category: 'Electronics', inStock: false, image: usbCHub, imageAlt: 'Multiport USB-C hub with USB, card-reader, and HDMI ports', imageFit: 'contain' },
  { id: 4, title: 'JavaScript Handbook', price: 850, category: 'Books', inStock: true, image: javascriptHandbook, imageAlt: 'JavaScript Handbook book cover', imageFit: 'cover' },
  { id: 5, title: 'React Essentials', price: 1100, category: 'Books', inStock: true, image: reactEssentials, imageAlt: 'React Essentials book cover with React logo', imageFit: 'cover' },
  { id: 6, title: 'Notebook Set', price: 250, category: 'School Supplies', inStock: true, image: notebookSet, imageAlt: 'Three notebooks arranged as a stationery set', imageFit: 'cover' },
  { id: 7, title: 'Laptop Sleeve', price: 750, category: 'Accessories', inStock: false, image: laptopSleeve, imageAlt: 'Laptop in a slim brown leather sleeve', imageFit: 'contain' },
  { id: 8, title: 'Water Bottle', price: 399, category: 'Accessories', inStock: true, image: waterBottle, imageAlt: 'A selection of reusable water bottles', imageFit: 'cover' },
];

export default products;
