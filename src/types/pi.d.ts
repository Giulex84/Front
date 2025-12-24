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
          onReadyForServerCompletion?: () => void;
          onReadyForServerApproval?: () => void;
          onCancel?: () => void;
          onError?: (error: any) => void;
        }
      ) => void;
    };
  }
}
