import { useEffect, useRef } from 'react';
import { baseAPI } from '@/lib/api';

/**
 * Fires a single GET to /session on mount.
 * In v3 this was called inline during App render; here we guard against
 * React 19 Strict Mode's intentional double-invoke and any HMR re-runs.
 */
export default function SessionPing() {
	const fired = useRef(false);
	useEffect(() => {
		if (fired.current) return;
		fired.current = true;
		fetch(`${baseAPI}/session`, { method: 'GET' }).catch(() => {
			/* swallow; this ping is best-effort */
		});
	}, []);
	return null;
}
