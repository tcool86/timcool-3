import { describe, expect, it, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '@/components/react/Header';
import { portfolioState, setSection } from '@/state/portfolio';

describe('<Header />', () => {
	beforeEach(() => {
		portfolioState.section = 'about';
	});

	it('renders every navigation link', () => {
		render(<Header />);
		for (const label of [
			'About',
			'Experience',
			'Projects',
			'Archive',
			'Contact',
		]) {
			expect(
				screen.getByRole('link', { name: label })
			).toBeInTheDocument();
		}
	});

	it('marks the active section as selected', () => {
		setSection('projects');
		render(<Header />);
		const projectsItem = screen
			.getByRole('link', { name: 'Projects' })
			.closest('li');
		expect(projectsItem).toHaveClass('selected');
	});
});
