export {};

declare global {
  interface Window {
    Pi?: {
      authenticate?: (
        scopes: string[],
        options: any
      ) => Promise<any>;

      createPayment: (
        payment: {
          amount: number;
          memo?: string;
          metadata?: any;
        },
        callbacks: {
          onReadyForServerApproval: (paymentId: string) => void;
          onReadyForServerCompletion: (
            paymentId: string,
            txid: string
          ) => void;
          onCancel?: () => void;
          onError?: (error: any) => void;
        }
      ) => Promise<void>;

      approvePayment?: (paymentId: string) => void;
    };
  }
}
