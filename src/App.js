import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import Navbar from './Components/Navbar';
import Result from './Components/Result';
import SliderSelect from './Components/SliderSelect';
import TenureSelect from './Components/TenureSelect';

function App() {
	const [data, setData] = useState({
		homeValue: 3000,
		downPayment: 3000 * 0.2,
		loanAmount: 3000 * 0.8,
		loanTerm: 5,
		interestRate: 5,
	});
	return (
		<div className='App'>
			<Navbar />
			{/* add inline-style to a component in Material UI. */}
			<Container maxWidth='xl' sx={{ marginTop: 4 }}>
				{/* create a responsive layout that adapts to different screen sizes with grid */}
				<Grid container spacing={5} alignItems='center'>
					{/* take up all screen on small screens and half screen on medium/large sized screens  */}
					<Grid item xs={12} md={6}>
						<SliderSelect data={data} setData={setData} />
						<TenureSelect data={data} setData={setData} />
					</Grid>
					<Grid item xs={12} md={6}>
						<Result data={data} />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default App;
