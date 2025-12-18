import type { Agreement } from "../types/agreement";

export async function fetchAgreements(): Promise<Agreement[]> {
  throw new Error("API not implemented");
}

export async function createAgreementApi(
  _agreement: Agreement
): Promise<void> {
  throw new Error("API not implemented");
}

export async function signAgreementApi(
  _id: string
): Promise<void> {
  throw new Error("API not implemented");
}
