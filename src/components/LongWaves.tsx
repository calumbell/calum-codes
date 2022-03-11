import React, { useState, useEffect } from 'react';

const LongWaves = () => {
	return(
		<svg className='long-wave'
		xmlns="http://www.w3.org/2000/svg" 
		viewBox="0 0 3600 150"
	>
		<path
			d="
				M0, 50 
				C600, 100, 1200, 100, 1800, 50 
				C2400, 0, 3000, 0, 3600, 50 
				L3600, 0  
				L0, 0
			"
		/>
		<path 
			d="
				M0, 50 
				C600, 100, 1200, 100, 1800, 50 
				C2400, 0, 3000, 0, 3600, 50 
				L3600, 0  
				L0, 0
			"
		/>
		<path 
			d="
				M0, 50 
				C600, 100, 1200, 100, 1800, 50 
				C2400, 0, 3000, 0, 3600, 50 
				L3600, 0  
				L0, 0
			"
		/>
	</svg>
	)
};

export default LongWaves;