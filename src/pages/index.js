import '../app/globals.css';
import components from '@/components';

export default function Index() {
  const { Test } = components;
  return (
    <div className="flex">
      <h1 className="mt-10 ml-10 flex">Hello World</h1>
      <h1 className="mt-10 ml-10 flex">Hello World</h1>
      <h1 className="mt-10 ml-10 flex">Hello World</h1>
      <Test />
    </div>
  );
}
