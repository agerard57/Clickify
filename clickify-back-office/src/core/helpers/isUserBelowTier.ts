import { PlanTypes } from "@clickify/clickify-common";

/**
 * Checks if the user's current subscription plan is below a certain tier,
 * based on optional exclusivity to specific plans.
 *
 * @param currentPlan - The current subscription plan of the user.
 * @param exclusiveTo - Optional parameter specifying an exclusive plan for the check.
 * @returns {boolean} Returns true if the user's current plan is below the specified tier, otherwise false.
 */
export const isUserBelowTier = (currentPlan: PlanTypes, exclusiveTo?: PlanTypes): boolean => {
  switch (exclusiveTo) {
    case PlanTypes.CLICKIFY:
      return currentPlan === PlanTypes.BASIC;
    case PlanTypes.PREMIUM:
      return currentPlan === PlanTypes.BASIC || currentPlan === PlanTypes.CLICKIFY;
    default:
      return false;
  }
};
