import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        "pk_test_51IK54ADMl0Sj1kjjp6LD8UeJRNgcJVk5AyAhzI3GcJPJDr3guMHJNvSvM8OS4uDnJ5bCJr2ziTqhYz1Ozi6QS6vP00rLlNOWco";
    const onToken = (token) => {
        console.log(token);
        alert("Payment Successful");
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeButton;
