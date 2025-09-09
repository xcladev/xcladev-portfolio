import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function DownloadCvButton() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setLoading(true);

      const res = await fetch("/CV_Sergi_Cladera.pdf", { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const blob = await res.blob();

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "/CV_Sergi_Cladera.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      toast.success("Espero contactes conmigo pronto 😉");
    } catch (e) {
      toast.error("Error al descargar el CV");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={loading}
      className="transition-colors duration-200 ease-in-out cursor-pointer"
      aria-busy={loading}
      aria-live="polite"
    >
      {loading ? (
        <>
          <Loader2 className="animate-spin" />
          Preparando…
        </>
      ) : (
        <>
          <Download />
          Descargar CV
        </>
      )}
    </Button>
  );
}
