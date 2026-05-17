import PaymentOptions from "../components/payment/payment-options";
import PaymentSteps from "../components/payment/payment-steps";

const Payment = () => {
  return (
    <main className="bg-gray-100 min-h-[80vh] pt-12">
      <div className="max-w-5xl mx-auto py-16 scale-90 origin-top">
        <h1 className="text-5xl font-bold text-center mb-11">Payment</h1>
        <div className="grid grid-cols-2 gap-14 items-start">
          <PaymentOptions />
          <PaymentSteps />
        </div>
      </div>
    </main>
  );
};

export default Payment;