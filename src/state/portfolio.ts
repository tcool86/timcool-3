import { proxy, useSnapshot } from 'valtio';

export type SectionId =
	| 'about'
	| 'experience'
	| 'projects'
	| 'archive'
	| 'contact';

export interface PortfolioState {
	section: SectionId;
}

export const portfolioState = proxy<PortfolioState>({ section: 'about' });

export const setSection = (section: SectionId): void => {
	if (portfolioState.section !== section) {
		portfolioState.section = section;
	}
};

export const usePortfolio = () => useSnapshot(portfolioState);
