export default async function Dashboard() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <span>Dashboard</span>
      <a href="/api/auth/logout">Logout</a>
    </div>
  );
}
