import { Helmet } from "react-helmet-async";
import usePaymentHistory from "../../../Hooks/usePaymentHistory";

const PaymentHistory = () => {
  const [paymentHistory] = usePaymentHistory();
  return (
    <div className="w-full md:ps-16">
      <Helmet>
        <title>EduLight | Payment history</title>
      </Helmet>
      <div className="uppercase  h-[80px] font-semibold md:flex items-center justify-between gap-8 mb-8 mt-4 text-center">
        <h3 className="text-3xl">My Payment History:{paymentHistory.length}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full bg-purple-50 text-center mt-8">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Date</th>
              <th>Total Payment</th>
              <th>transactionId</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map((history, index) => (
              <tr key={history._id}>
                <td>{index + 1}</td>
                <td>{history.email}</td>
                <td>{history.date}</td>
                <td>{history.price}</td>
                <td>{history.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
