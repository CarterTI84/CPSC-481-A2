import styles from './page.module.css'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import ActivityImages from './ActivityImages';
import { activities } from '~/mockData/Activities';
import { Button } from '@mui/material';
import Link from 'next/link';
import { getFormattedPrice } from '@/lib/helpers';

interface Props {
    params: {
        name: string;
    };
}

export default function ActivityPage({ params: { name } }: Props) {
	const activityName = decodeURIComponent(name);

	const activity = activities.find(activity => activity.name === activityName);

	if(!activity)
		return <h1>{`Could not find activity: ${activityName}`}</h1>

	const { id, pictures, description, price, address, rating, difficulty } = activity;

	return (
		<center className={styles.container}>
			<h1 className={styles.title}>{activityName}</h1>
			<div className={styles.imagesContainer}>
				<ActivityImages images={pictures} />
			</div>
			<div className={styles.priceContainer}>
				{getFormattedPrice(price)}
			</div>
			<div className={styles.ratingContainer}>
				<Typography component="legend">Activity Rating:</Typography>
				<Rating name="read-only" value={rating} precision={0.1} readOnly />
			</div>
			<div className={styles.ratingContainer}>
				<Typography component="legend">Difficulty Rating:</Typography>
				<Rating name="read-only" value={difficulty} precision={0.1} readOnly />
			</div>
			<div className={styles.addressContainer}>
				{`Address: ${address}`}
			</div>
			<div className={styles.box}>
				<p>{description}</p>
			</div>
			<div className={styles.buttonContainer}>
				<Link href={`/book?activityId=${id}`} style={{ width: '100%' }}>
					<Button
						variant='contained'
						sx={{ 
							width: "100%",
							bgcolor: "brown", 
							"&:hover": { bgcolor: "maroon" } 
						}}
					>
						Book
					</Button>
				</Link>
			</div>
			<div className={styles.buttonContainer}>
				<Link href={`/review?activityId=${id}`} style={{ width: '100%' }}>
					<Button
						variant='contained'
						sx={{ 
							width: "100%",
							bgcolor: "#a66832", 
							"&:hover": { bgcolor: "#422a14" } 
						}}
					>
						Review
					</Button>
				</Link>
			</div>
		</center>
	);
}