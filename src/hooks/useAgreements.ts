import { useState } from "react";
import type { Agreement } from "../types/agreement";
import { usePi } from "../pi/usePi";

export function useAgreements() {
  const [agreements, setAgreements] = useState<Agreement[]>([]);
  const { authenticate } = usePi();

  const createAgreement = (title: string, content: string) => {
    const newAgreement: Agreement = {
      id: crypto.randomUUID(),
      title,
      content,
      createdAt: new Date().toISOString(),
    };
    setAgreements(prev => [...prev, newAgreement]);
  };

  const signAgreement = async (id: string) => {
    const user = await authenticate();

    setAgreements(prev =>
      prev.map(a =>
        a.id === id
          ? {
              ...a,
              signedBy: user.username,
              signedAt: new Date().toISOString(),
            }
          : a
      )
    );
  };

  return {
    agreements,
    createAgreement,
    signAgreement,
  };
}
