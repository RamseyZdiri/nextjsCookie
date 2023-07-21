import axios from 'axios';
import components from '@/components';

export default function slug({ data }) {
  // rename widgets
  const { items = [] } = data.properties.widgets;
  return (
    <div>
      {
        items.length > 0 && items.map(({ content }) => {
          const Component = components[content.contentType] || null;
          return (
            Component && <Component data={content} key={content.contentType} />
          );
        })
      }
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const { data: items } = await axios({ method: 'get', url: `https://ren-s-easygoing-harp-seal.euwest01.umbraco.io/umbraco/delivery/api/v1/content/item/${params.slug[0]}` });

  return { props: { data: items, params } };
};
