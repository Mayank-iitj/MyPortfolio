/**
 * Experience Configuration
 * ⚠️ IMPORTANT: This is the ONLY place where experience units should be defined.
 * Any UI text or test assertions MUST import from this file.
 * 
 * Changing these values will automatically update all UI components and tests.
 */

export const EXPERIENCE_VALUE = "15+";
export const EXPERIENCE_UNIT = "months"; // lowercase for semantic use
export const EXPERIENCE_UNIT_CAPITALIZED = "Months"; // for display
export const EXPERIENCE_LABEL = "Months of experience"; // full display text

/**
 * Helper function to get formatted experience text
 * @returns {string} Formatted experience string
 */
export const getFormattedExperience = () => {
  return `${EXPERIENCE_VALUE} ${EXPERIENCE_UNIT_CAPITALIZED}`;
};

/**
 * Validation: Ensure unit and label are semantically consistent
 * Only runs in development to avoid console pollution in production
 */
if (import.meta.env.DEV && !EXPERIENCE_LABEL.toLowerCase().includes(EXPERIENCE_UNIT.toLowerCase())) {
  console.warn(
    `⚠️ Semantic inconsistency: EXPERIENCE_LABEL "${EXPERIENCE_LABEL}" doesn't match EXPERIENCE_UNIT "${EXPERIENCE_UNIT}"`
  );
}

/**
 * 🚨 PATTERN ENFORCEMENT
 * 
 * ❌ BAD - Hard-coded strings:
 *   <p>15+ Months of experience</p>
 *   getByText("Months of experience")
 * 
 * ✅ GOOD - Import constants:
 *   import { EXPERIENCE_LABEL } from './constants/experience';
 *   <p data-testid="experience-label">{EXPERIENCE_LABEL}</p>
 *   getByTestId("experience-label")
 * 
 * CONVENTION: All experience-related copy MUST be imported from this file.
 * Code reviews should reject PRs with hard-coded experience text.
 */
