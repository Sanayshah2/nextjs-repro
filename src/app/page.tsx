// src/app/page.tsx
export const dynamic = 'force-dynamic';

import 'antd/dist/reset.css';
import { Button } from 'antd';

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    cache: 'no-store',   // optional but recommended for SSR freshness
  });
  const data = await res.json();

  return (
    <main style={{ padding: 40 }}>
      <h1>{data.title}</h1>
      <Button type="primary">AntD Button</Button>
    </main>
  );
}
