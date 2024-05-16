import prismadb from "@/lib/prismadb";
import { MAX_FREE_COUNTS } from "../../constants";

// Replace with logic to identify a unique user (optional)
// This could involve anonymous IDs or other non-personal identifiers.
const getUniqueUserId = () => {
  // Implement logic to generate a unique user ID (e.g., random string)
  return "placeholder_user_id";
};

export const incrementApiLimit = async () => {
  const userId = getUniqueUserId();

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: { userId },
  });

  if (userApiLimit) {
    await prismadb.userApiLimit.update({
      where: { userId },
      data: { count: userApiLimit.count + 1 },
    });
  } else {
    await prismadb.userApiLimit.create({
      data: { userId, count: 1 },
    });
  }
};

export const checkApiLimit = async () => {
  const userId = getUniqueUserId();

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: { userId },
  });

  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
    return true;
  } else {
    return false;
  }
};

export const getApiLimitCount = async () => {
  const userId = getUniqueUserId();

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: { userId },
  });

  if (!userApiLimit) {
    return 0;
  }

  return userApiLimit.count;
};
