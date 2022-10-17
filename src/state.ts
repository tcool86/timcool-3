import create from 'zustand';
import { devtools, persist } from 'zustand/middleware'

interface PortfolioState {
	section: string;
	updateSection: (section: string) => void;
}

export const usePortfolioState = create<PortfolioState>()(
	devtools(
		persist(
			(set) => ({
				section: 'about',
				updateSection: (section) => set((state) => {
					return { section }
				}),
			}),
			{
				name: 'portfolio-storage',
			}
		)
	)
)

