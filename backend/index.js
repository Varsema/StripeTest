const express = require("express");
require('dotenv').config();

const app =express()
const cors= require('cors')
app.use(express.json());
app.use(cors({
    origin: `${process.env.CLIENT_URL}`,
}))


const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([[
    1, { priceInCents: 10000, name: 'Learn React Today'}],
    [2, { priceInCents: 20000, name: 'Learn CSS Today'}]
])

app.post('/create-checkout-session', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: req.body.items.map(item => {
                const storeItem = storeItems.get(item.id)
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: storeItem.name
                        },
                        unit_amount: storeItem.priceInCents
                    },
                    quantity: item.quantity
                }
            }),
            success_url: `${process.env.CLIENT_URL}/success`,
            cancel_url: `${process.env.CLIENT_URL}/cancel`
        })
        res.json({url: session.url})
    } catch (e) {
        res.status(500).json({ error: e.message})
    }
})

app.listen(3000);