import { describe, expect, it, beforeEach } from 'vitest';
import { portfolioState, setSection } from '@/state/portfolio';

describe('portfolio state', () => {
	beforeEach(() => {
		portfolioState.section = 'about';
	});

	it('defaults to the about section', () => {
		expect(portfolioState.section).toBe('about');
	});

	it('updates the section via setSection', () => {
		setSection('contact');
		expect(portfolioState.section).toBe('contact');
	});

	it('is a no-op when the section is unchanged', () => {
		const before = portfolioState.section;
		setSection(before);
		expect(portfolioState.section).toBe(before);
	});
});
