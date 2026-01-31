export default function Home() {
  return (
    <main>
      <h1>SSGPT6 is live</h1>
      <p>Root governance console online.</p>
    </main>
  );
}
