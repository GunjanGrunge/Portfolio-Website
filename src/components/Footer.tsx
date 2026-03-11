const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground font-display">
          © {new Date().getFullYear()} Gunjan Sarkar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
