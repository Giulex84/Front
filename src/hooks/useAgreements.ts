import { useEffect, useState } from "react";
import type { Agreement } from "../types/agreement";
import { usePi } from "../pi/usePi";
import { BACKEND_ENABLED } from "../config/backend";
import {
  fetchAgreements,
  createAgreementApi,
  signAgreementApi,
} from "../api/agreements";

const STORAGE_KEY = "pactpi_agreements";

export function useAgreements() {
  const [agreements, setAgreements] = useState<Agreement[]>([]);
  const { authenticate } = usePi();

  useEffect(() => {
    if (BACKEND_ENABLED) {
      fetchAgreements().then(setAgreements).catch(() => {});
    } else {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setAgreements(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (!BACKEND_ENABLED) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(agreements));
    }
  }, [agreements]);

  const createAgreement = async (title: string, content: string) => {
    const agreement: Agreement = {
      id: crypto.randomUUID(),
      title,
      content,
      createdAt: new Date().toISOString(),
    };

    if (BACKEND_ENABLED) {
      await createAgreementApi(agreement);
      setAgreements(prev => [...prev, agreement]);
    } else {
      setAgreements(prev => [...prev, agreement]);
    }
  };

  const signAgreement = async (id: string) => {
    const user = await authenticate();

    if (BACKEND_ENABLED) {
      await signAgreementApi(id);
    }

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
