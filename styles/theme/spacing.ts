/**
 * Spacing values for the application theme
 */
import unit from '../unit';

// Base spacing unit (4px)
const base = 4 * unit;

// Spacing scale
const spacing = {
	// Named spacing
	none: 0,
	xs: base * 0.5, // 2px
	sm: base, // 4px
	md: base * 2, // 8px
	lg: base * 3, // 12px
	xl: base * 4, // 16px
	'2xl': base * 6, // 24px
	'3xl': base * 8, // 32px
	'4xl': base * 12, // 48px
	'5xl': base * 16, // 64px
	'6xl': base * 24, // 96px
	'7xl': base * 32, // 128px
	'8xl': base * 40, // 160px
	'9xl': base * 48, // 192px
	container: base * 4, // 16px

	// Numeric spacing (for array access)
	0: 0,
	0.5: base * 0.5, // 2px
	1: base, // 4px
	1.5: base * 1.5, // 6px
	2: base * 2, // 8px
	2.5: base * 2.5, // 10px
	3: base * 3, // 12px
	3.5: base * 3.5, // 14px
	4: base * 4, // 16px
	5: base * 5, // 20px
	6: base * 6, // 24px
	7: base * 7, // 28px
	8: base * 8, // 32px
	9: base * 9, // 36px
	10: base * 10, // 40px
	12: base * 12, // 48px
	16: base * 16, // 64px
	20: base * 20, // 80px
	24: base * 24, // 96px
	32: base * 32, // 128px
	40: base * 40, // 160px
	48: base * 48, // 192px
	56: base * 56, // 224px
	64: base * 64, // 256px
};

// Helper functions
const getSpacing = (value: keyof typeof spacing) => spacing[value];

// Padding and margin shortcuts
const padding = {
	xs: { padding: spacing.xs },
	sm: { padding: spacing.sm },
	md: { padding: spacing.md },
	lg: { padding: spacing.lg },
	xl: { padding: spacing.xl },
	'2xl': { padding: spacing['2xl'] },
	'3xl': { padding: spacing['3xl'] },
	'4xl': { padding: spacing['4xl'] },
};

const margin = {
	xs: { margin: spacing.xs },
	sm: { margin: spacing.sm },
	md: { margin: spacing.md },
	lg: { margin: spacing.lg },
	xl: { margin: spacing.xl },
	'2xl': { margin: spacing['2xl'] },
	'3xl': { margin: spacing['3xl'] },
	'4xl': { margin: spacing['4xl'] },
};

export default {
	base,
	spacing,
	getSpacing,
	padding,
	margin,
};
