import React from 'react';
import './Temp.css';
import Particles from 'react-tsparticles';
import { Engine } from 'tsparticles-engine';
import { loadFirePreset } from 'tsparticles-preset-fire';
import { useCallback } from 'react';

export function Temp() {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadFirePreset(engine);
	}, []);

	const options = {
		background: {
			image: 'radial-gradient(rgb(40 81 90), #0f0c24)',
		},
		particles: {
			color: '#a35050',
		},
		preset: 'fire',
	};
	return (
		<React.Fragment>
			<div id="overlay" className="container">
				<h1 className="info">Under Construction</h1>
				<p className="info">Hi 👋, I'm updating my site right now.</p>
				<p className="info">Check back here in a few days...</p>
				<p className="info">- Tim 👨🏻‍💻</p>
			</div>
			<Particles options={options} init={particlesInit} />;
		</React.Fragment>
	);
}
