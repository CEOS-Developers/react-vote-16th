export default function Layout({ children }: any) {
  return (
    <div className="container">
      <div className="content">{children}</div>

      <style jsx>{`
        .container {
          width: 100vw;
          height: 100vh;

          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
