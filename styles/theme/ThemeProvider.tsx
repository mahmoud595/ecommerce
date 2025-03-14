import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme } from '.';

// Define the theme context type
type ThemeContextType = {
	theme: typeof lightTheme;
	isDarkMode: boolean;
	toggleTheme: () => void;
	setTheme: (theme: 'light' | 'dark') => void;
};

// Create the theme context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme provider props
type ThemeProviderProps = {
	children: React.ReactNode;
};

// ThemeProvider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	// Get the device color scheme
	const colorScheme = useColorScheme();

	// Initialize theme state based on device color scheme
	const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

	// Update theme when device color scheme changes
	useEffect(() => {
		setIsDarkMode(colorScheme === 'dark');
	}, [colorScheme]);

	// Get the current theme based on dark mode state
	const theme = isDarkMode ? darkTheme : lightTheme;

	// Toggle between light and dark themes
	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
	};

	// Set a specific theme
	const setTheme = (themeMode: 'light' | 'dark') => {
		setIsDarkMode(themeMode === 'dark');
	};

	// Context value
	const contextValue: ThemeContextType = {
		theme,
		isDarkMode,
		toggleTheme,
		setTheme,
	};

	return (
		<ThemeContext.Provider value={contextValue}>
			{children}
		</ThemeContext.Provider>
	);
};

// Custom hook to use the theme
export const useTheme = () => {
	const context = useContext(ThemeContext);

	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}

	return context;
};

export default ThemeProvider;
