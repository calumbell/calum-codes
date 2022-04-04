import React, {useState, useEffect} from 'react';
import * as styles from './Waves.module.scss';

const Waves = () => {
	const [waves, setWaves] = useState([
		{ offset: `-${(50*Math.random())}%`, period: `${(30*Math.random())+45}s`, },
		{ offset: `-${(50*Math.random())}%`, period: `${(30*Math.random())+45}s`, },
		{ offset: `-${(50*Math.random())}%`, period: `${(30*Math.random())+45}s`, },
	]);
	return(
		<>
			{waves.map((wave, i) => {
				return(
					<svg
						className={styles.waveContainer} key={i}
						width='200%'
						height='inherit'
						preserveAspectRatio='none'
						style={{
							['--period' as string]: wave.period,
							['--offset' as string]: wave.offset,
						}}
						xmlns="http://www.w3.org/2000/svg" 
						viewBox="0 0 3600 150"
					>
						<g>
							<path	
								className={styles.wave}
								d="	M0, 50 
										C600, 100, 1200, 100, 1800, 50 
										C2400, 0, 3000, 0, 3600, 50 
										C4200, 100, 4800, 100, 5400, 50 
										C6000, 0, 6600, 0, 7200, 50
										C6600, 100, 7200, 100, 7800, 50 
										C8400, 0, 9000, 0, 9600, 50 
										C10200, 100, 10800, 100, 11400, 50 
										C12000, 0, 12600, 0, 13200, 50  
										L13200, 0  
										L0, 0 "
							/>
						</g>
					</svg>
			)})}
	</>
	)
};

export default Waves;