export {};

declare global {
  interface Window {
    Pi: {
      authenticate: (
        scopes: string[],
        onIncompletePaymentFound?: (payment: any) => void
      ) => Promise<{
        accessToken: string;
        user: {
          uid: string;
          username: string;
        };
      }>;

      createPayment: (
        paymentData: {
          amount: number;
          memo: string;
          metadata?: any;
        },
        callbacks: {
          onReadyForServerApproval?: (paymentId: string) => void | Promise<void>;
          onReadyForServerCompletion?: (
            paymentId: string,
            txid?: string
          ) => void;
          onCancel?: () => void;
          onError?: (error: any) => void;
        }
      ) => void;
    };
  }
}
