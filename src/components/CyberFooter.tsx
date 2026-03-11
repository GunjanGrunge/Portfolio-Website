const CyberFooter = () => {
  return (
    <footer className="relative py-6">
      {/* Checkered flag border */}
      <div className="checkered-border h-1 w-full mb-6" />
      <div className="container mx-auto px-6 text-center">
        <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
          Designed & Built by Gunjan Sarkar · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default CyberFooter;
