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
          metadata?: Record<string, any>;
        },
        callbacks: {
          onReadyForServerApproval?: (paymentId: string) => void;
          onReadyForServerCompletion?: (paymentId: string) => void;
          onCancel?: () => void;
          onError?: (error: any) => void;
        }
      ) => Promise<any>;
    };
  }
}
