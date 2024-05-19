export default function BlogPage({ params }
    : Readonly<{ params: { slug: string; }; }>) 
{
  return (
    <main>
      <div>My Shop: {JSON.stringify(params)}</div>
    </main>
  );
}