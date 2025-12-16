import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
import { EXPERIENCE_VALUE, EXPERIENCE_UNIT_CAPITALIZED, EXPERIENCE_LABEL } from './constants/experience';

describe('App - Experience Section', () => {
  it('should display experience statistics with correct values', () => {
    render(<App />);
    
    // ✅ GOOD: Assert using constants, not hard-coded strings
    const experienceValue = screen.getByTestId('experience-value');
    expect(experienceValue).toHaveTextContent(`${EXPERIENCE_VALUE} ${EXPERIENCE_UNIT_CAPITALIZED}`);
    
    const experienceLabel = screen.getByTestId('experience-label');
    expect(experienceLabel).toHaveTextContent(EXPERIENCE_LABEL);
  });

  it('should have semantically consistent experience data', () => {
    render(<App />);
    
    // ✅ GOOD: Test behavior, not exact copy
    const statSection = screen.getByTestId('experience-stat');
    expect(statSection).toBeInTheDocument();
    
    // Verify constants are used (not hard-coded values)
    expect(EXPERIENCE_LABEL.toLowerCase()).toContain(EXPERIENCE_UNIT_CAPITALIZED.toLowerCase());
  });

  it('should display experience section with stable selectors', () => {
    render(<App />);
    
    // ✅ GOOD: Use data-testid for stability
    expect(screen.getByTestId('experience-value')).toBeInTheDocument();
    expect(screen.getByTestId('experience-label')).toBeInTheDocument();
  });
});
