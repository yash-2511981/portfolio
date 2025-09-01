export function Footer() {
  return (
    <footer className="w-full border-t bg-card p-4">
      <div className="container text-center text-sm">
        <div className="flex items-center justify-center text-foreground/60">
          © {new Date().getFullYear()} Yash Shetye. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
