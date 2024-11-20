import ReadLayout from '@/app/single-page-layout/layout';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import data from './data';
export default function page() {
  return (
    <ReadLayout>
      <Markdown remarkPlugins={[remarkGfm]}>
        {`# ${data.title} \n\n ## ${data.subtitle} \n\n ${data.body}`}
      </Markdown>
    </ReadLayout>
  );
}
