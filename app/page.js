export default function HomePage() {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "var(--hs-black)"
      }}
    >
      <iframe
        src="/hand-viewer"
        title="3D Hand Viewer"
        style={{ border: "none", width: "100%", height: "100%" }}
        allow="camera *"
      />
    </main>
  );
}
