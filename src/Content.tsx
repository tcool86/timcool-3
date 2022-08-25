import { Fragment } from 'react';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Experience } from './Pages/Experience';
import { Archive } from './Pages/Archive/Archive';
import { Projects } from './Pages/Projects';

function Content() {
	return (
		<Fragment>
			<section className="app-section" id="about">
				<About />
			</section>
			<section className="app-section" id="projects">
				<Projects />
			</section>
			<section className="app-section" id="experience">
				<Experience />
			</section>
			{/* <ScrollTest /> */}
			<section className="app-section" id="archive">
				<Archive />
			</section>
			<section className="app-section" id="contact">
				<Contact />
			</section>
		</Fragment>
	);
}

export default Content;
