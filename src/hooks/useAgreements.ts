import { useState } from "react";
import type { Agreement } from "../types/agreement";

export function useAgreements() {
  const [agreements, setAgreements] = useState<Agreement[]>([]);

  const createAgreement = (title: string, content: string) => {
    const newAgreement: Agreement = {
      id: crypto.randomUUID(),
      title,
      content,
      createdAt: new Date().toISOString(),
    };
    setAgreements(prev => [...prev, newAgreement]);
  };

  return {
    agreements,
    createAgreement,
  };
}
