import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('sk_test_51Oz1bPP6VzehrbIAuaaLp0t6T91cBPavYGZcKJQzE4H23A4rYygmJkSkhGuvJDqYc8ts1LEph8XkEhzBqykqz4h400SmCcGZqG');

const Donate = () => {
    const [amount, setAmount] = useState(0);

    const handleDonate = async () => {
        // Dummy session ID for demonstration
        const session = { id: 'dummy-session-id' };
        const stripe = await stripePromise;
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });
        if (result.error) {
            console.error(result.error.message);
        } else {
            // Show a message or alert that the payment is not actually processed
            alert('This is a demo. Payment not processed.');
        }
    };

    return (
        <div className="donate-container">
            <h1>Donate</h1>
            <div className="donation-amount">
                <label htmlFor="amount">Amount:</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <button onClick={handleDonate}>Donate</button>
        </div>
    );
};

export default Donate;