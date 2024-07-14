import { getSession } from "@auth0/nextjs-auth0";

export default async function Home() {
  const session = await getSession();
  const user = session?.user;
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      {user ? (
        <>
          <span>Welcome, {user.email}</span>
          <a href="/api/auth/logout">Logout</a>
        </>
      ) : (
        <a href="/api/auth/login">Login</a>
      )}
    </main>
  );
}
