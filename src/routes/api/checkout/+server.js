import { json } from "@sveltejs/kit";
import Stripe from "stripe";
import { STRIPE_API_KEY, PRICE_ID } from "$env/static/private";
import { PUBLIC_FRONTEND_URL } from "$env/static/public";

const stripe = new Stripe(STRIPE_API_KEY);

export async function POST() {
  console.log("POST");
  console.log(PUBLIC_FRONTEND_URL);

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: PRICE_ID,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${PUBLIC_FRONTEND_URL}/checkout/success`,
      cancel_url: `${PUBLIC_FRONTEND_URL}/checkout/failure`,
    });
    console.log(session);
    return json({ sessionId: session.id });
  } catch (error) {
    console.error(error);
    return json({ error: error.message }, { status: 500 });
  }
}
