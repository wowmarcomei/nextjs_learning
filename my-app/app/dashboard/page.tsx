async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { message: "John Doe" };
}


export default async function DashboardPage() {
  const {message} = await getData()
  
  return (
    <div>
      <h1>Hello, Dashboard Page.</h1>
      <p>Greeting from {message}</p>
    </div>
  );
}