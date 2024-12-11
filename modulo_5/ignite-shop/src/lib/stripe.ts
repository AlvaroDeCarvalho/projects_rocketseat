import Stripe from 'stripe'



export const stripe = new Stripe("sk_test_51QUZ2eCvYBO5CFIOHhOgvcXH4lQ7Y7cDJyakM8shVaasDerwyB2iOpmwlrQ0ZGfNPkZ90X88Eb7O7bVBnZYD26rN00BjCmUbhE", {
    apiVersion: '2024-11-20.acacia',
    appInfo: {
        name: 'ignite Shop',
    }
})