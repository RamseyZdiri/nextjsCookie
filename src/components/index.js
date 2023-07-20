import dynamic from 'next/dynamic';
import Loader from './Loader';

const components = {
  textImage: dynamic(() => import('./TextImage')),
  loader: Loader,
};

export default components;
