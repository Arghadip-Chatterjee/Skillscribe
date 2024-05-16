import prismadb from "@/lib/prismadb";

const DAY_IN_MS = 86_400_000;

// Replace with logic to identify a unique user (optional)
// This could involve anonymous IDs or other non-personal identifiers.
const getUniqueUserId = () => {
  // Implement logic to generate a unique user ID (e.g., random string)
  return "placeholder_user_id";
};

export const checkSubscription = async () => {
  const userId = getUniqueUserId();

  const userSubscription = await prismadb.userSubscription.findUnique({
    where: {
      userId,
    },
    select: {
      stripeSubscriptionId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true,
    },
  });

  if (!userSubscription) {
    return false;
  }

  const isValid =
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now();

  return !!isValid;
};
