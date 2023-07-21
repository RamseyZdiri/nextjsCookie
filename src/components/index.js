import dynamic from 'next/dynamic';
import Loader from './loader';

const components = {
  textImage: dynamic(() => import('./textImage')),
  loader: Loader,
  Test: () => <div>test component</div>,
};

export default components;
