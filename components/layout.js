import { Box, Stack } from '@mui/material';
import Link from 'next/link';

function Layout({ children }) {
	return (
		<>
			<header>
				<Box
					sx={{
						padding: '0 24px',
						borderStyle: 'solid',
						borderWidth: '0 0 2px 0',
						borderColor: 'black',
						backgroundColor: 'primary.main',
						color: 'white',
					}}>
					<Stack direction='row' alignItems='center' spacing={12}>
						<Link href='/'>
							<a>
								<h1>AnimeDB</h1>
							</a>
						</Link>
						<Link href='seasonal'>
							<a>Seasonal Anime</a>
						</Link>
						<Link href='search'>
							<a>Search anime</a>
						</Link>
					</Stack>
				</Box>
			</header>
			<main>{children}</main>
		</>
	);
}

export default Layout;
