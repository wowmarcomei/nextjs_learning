export default function BlogPage({
  params,
}: Readonly<{
  params: {
    slug: string;
  };
}>) {
  return (
    <main>
      <h1>{params.slug}</h1>
    </main>
  );
}