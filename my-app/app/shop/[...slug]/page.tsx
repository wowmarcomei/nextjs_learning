export default function ShopPage({ params }
    : Readonly<{ params: { slug: string; }; }>
) {
  return (
    <main>
      <div>My Shop: {JSON.stringify(params)}</div>
    </main>
  );
}