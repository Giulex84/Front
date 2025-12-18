import type { Agreement } from "../types/agreement";
import { BACKEND_URL } from "../config/backend";

export async function fetchAgreements(): Promise<Agreement[]> {
  const res = await fetch(`${BACKEND_URL}/agreements`);
  if (!res.ok) throw new Error("fetch failed");
  return res.json();
}

export async function createAgreementApi(
  agreement: Agreement
): Promise<void> {
  await fetch(`${BACKEND_URL}/agreements`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(agreement),
  });
}

export async function signAgreementApi(
  id: string
): Promise<void> {
  await fetch(`${BACKEND_URL}/agreements/${id}/sign`, {
    method: "POST",
  });
}
