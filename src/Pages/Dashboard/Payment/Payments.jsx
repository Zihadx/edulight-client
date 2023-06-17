import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import useSelectedClass from "../../../Hooks/useSelectedClass";
// import { useParams } from "react-router-dom";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)
const Payments = () => {
    const [selectedClass] = useSelectedClass()
    // const {id} = useParams()
    // const getPrice = (itemId) => {
    //     const selectedClassItem = selectedClass.find((item) => item.id === itemId);
    //     return selectedClassItem ? selectedClassItem.price : 0;
    //   };
    const total = selectedClass.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total).toFixed(2);
    return (
        <div className="w-full h-full mt-8 text-center ps-12">
            <h4 className="text-3xl font-semibold ">Pay now</h4>
            <div className="divider mb-20"></div>
            <Elements stripe={stripePromise}>
                <CheckOutForm price={price} selectedClass={selectedClass}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payments;