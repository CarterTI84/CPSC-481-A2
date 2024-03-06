
import styles from '@/app/styles/Activity.module.css'
import Banff from '@/assets/banff.jpg'
import Banff2 from '@/assets/banff2.jpg'
import Banff3 from '@/assets/banff3.jpg'

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { symlink } from 'fs';

import Image from 'next/image';

interface Props {
    params: {
        id: string;
    };
}

export default async function ActivityPage({ params }: Props) {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Activity {params.id}</h1>
			<div className={styles.imageContainer}>
				<Image src={Banff} alt="Banff" width={250} />
			</div>
			<div className={styles.secondContainer}>
				<div>
					<Typography component="legend">Activity Rating</Typography>
					<Rating name="read-only" value={4.5} precision={0.5} readOnly />
				</div>
				<div className={styles.buttons}>
					<button>Book</button>
					<button>Save</button>
				</div>
			</div>
			<div className={styles.third}>
				<Typography component="legend">Price Rating</Typography>
				<Rating name="read-only" value={2} readOnly />
			</div>
			<div className={styles.third}>
				<Typography component="legend">Difficulty Rating</Typography>
				<Rating name="read-only" value={4} readOnly />
			</div>

			<div className={styles.description}>
				<div className={styles.box}>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non rutrum dui. Nam tempor dui venenatis augue molestie semper. Integer et auctor dolor, varius dignissim lectus. Praesent ullamcorper lobortis diam vel rhoncus. Aliquam aliquet ultrices facilisis. Maecenas ligula turpis, consequat sit amet rutrum ut, euismod ac arcu. Praesent gravida aliquam dolor imperdiet suscipit.</p>
				</div>
			</div>
		</div>
	);
}