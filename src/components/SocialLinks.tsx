import './SocialLinks.css';
import { motion } from 'framer-motion';
import { LinkedInIcon, GithubIcon, TwitterIcon } from '../assets/Icons';

export default function SocialLinks() {
	const socialLinks = [
		{
			link: 'https://www.linkedin.com/in/tim-cool/',
			name: 'linked-in',
			icon: LinkedInIcon,
		},
		// {
		// 	link: 'https://stackoverflow.com/users/1347616/tcool',
		// 	name: 'stackoverflow',
		// 	icon: StackOverflowIcon,
		// },
		{
			link: 'https://twitter.com/timothymcool',
			name: 'twitter',
			icon: TwitterIcon,
		},
		{
			link: 'https://github.com/tcool86/',
			name: 'github',
			icon: GithubIcon,
		},
		// {
		// 	link: 'https://discordapp.com/users/349036886813310976',
		// 	name: 'discord',
		// 	icon: DiscordIcon,
		// },
		// {
		// 	link: 'https://tcool.medium.com',
		// 	name: 'medium-blog',
		// 	icon: MediumIcon,
		// },
	];
	return (
		<motion.ul className="app-social-links">
			{socialLinks.map(({ link, icon, name }) => {
				return (
					<motion.li className={name}>
						<motion.a target="blank" href={link}>
							{icon()}
						</motion.a>
					</motion.li>
				);
			})}
		</motion.ul>
	);
}
