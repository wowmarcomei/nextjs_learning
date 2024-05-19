// import Image from "next/image";

// export default function Page() {
//   return (
//     <h1>hello, Next.js!</h1>
//   );
// }

import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>hello, Next.js!</h1>
     <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}