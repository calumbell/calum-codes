import React, { useState } from 'react';
import * as styles from './Waves.module.scss';
import { svg } from './waveSVGData';

const Waves = () => {
	
	const [waves, setWaves] = useState(
		new Array(3).fill(null).map(() => {
			return({
				offset: `-${(50*Math.random())}%`,
				period: `${(30*Math.random())+45}s`,
			})
		})
	);

	return(
		<>
			{waves.map((wave, i) => {
				return(
					<svg
						className={styles.waveContainer} key={i}
						{...svg.attributes}
						style={{
							['--period' as string]: wave.period,
							['--offset' as string]: wave.offset,
						}}
					>
						<g>
							<path	
								className={styles.wave}
								d={svg.pathData}
							/>
						</g>
					</svg>
			)})}
	</>
	)
};

export default Waves;