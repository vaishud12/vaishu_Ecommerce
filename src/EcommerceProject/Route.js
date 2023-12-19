// Assuming your cart.jsx sends a POST request with body like { cart: [{ title, image, price, quantity, id }, ...] }

router.post("/create-checkout-session", async (req, res) => {
    const { cart } = req.body;

    try {
        const lineItems = cart.map((product) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: product.title, // Assuming 'title' is the product name
                    images: [product.image],
                },
                unit_amount: Math.round(product.price * 100),
            },
            quantity: product.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:5173/cart/success",
            cancel_url: "http://localhost:5173/cart/cancel",
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).json({ error: "Failed to create checkout session" });
    }
});
