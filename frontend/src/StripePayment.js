import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

                                                                           

const StripePayment = ({ formValid,buttonText }) => {
    
  const onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then((response) => {
      response.json().then(() => {
        alert(`We are in business`);
      });
    });
  };

  return (
    <StripeCheckout
      token={onToken}
      label={buttonText}
      stripeKey="pk_test_51MxthUSBDydqG55Q0PvFj5ISu1g1tgIKo26qcIiLNiFeFWoXY5LMBSper3hDp74mgYn1T3ssUDPpruvLT69Sj0gm00nNNaB0eZ"
      className='btn w-100 mt-4'
      disabled={formValid}
    />
  );
};

export default StripePayment;