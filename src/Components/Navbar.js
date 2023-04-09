// for creating a top navigation bar in the user interface.
import AppBar from '@mui/material/AppBar';
/* contain elements such as buttons, text, and icons, and can also be used for creating 
a responsive layout that adapts to different screen sizes. */
import Toolbar from '@mui/material/Toolbar';
/* for applying pre-defined typographic styles to text elements. It helps create 
a consistent and visually pleasing layout with customizable font family, size,
 weight and spacing. */
import Typography from '@mui/material/Typography';
/* for creating a container element that can be used to 
create a responsive layout, and center and contain other elements in a user interface */
import { Container } from '@mui/system';

const Navbar = () => {
	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar>
					<Typography variant='h5'>Mortgage Calculator with React</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navbar;
