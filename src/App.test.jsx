import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { EXPERIENCE_VALUE, EXPERIENCE_UNIT_CAPITALIZED, EXPERIENCE_LABEL } from './constants/experience';

// Mock all complex components that require WebGL/Canvas/Browser APIs
vi.mock('./Galaxy', () => ({
  default: () => null
}));

vi.mock('./LogoLoop', () => ({
  default: () => null
}));

vi.mock('./ClickSpark', () => ({
  default: ({ children }) => <div>{children}</div>
}));

vi.mock('./InfiniteMenu', () => ({
  default: () => null
}));

vi.mock('./Dock', () => ({
  default: () => null
}));

vi.mock('./MagicBento', () => ({
  default: () => null
}));

vi.mock('./TiltedCard', () => ({
  default: () => null
}));

vi.mock('./Carousel', () => ({
  default: () => null
}));

vi.mock('./CircularGallery', () => ({
  default: () => null
}));

// Dynamically import App after mocks are set up
const AppModule = await import('./App');
const App = AppModule.default;

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
