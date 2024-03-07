import { activityCategories } from '~/mockData/Activities';
import styles from './page.module.css';
import Category from '@/components/Category';
import { CategoryType } from '@/types/Category';

type CategoryCardProps = {
    category: CategoryType
}
const CategoryCard = ({ category }: CategoryCardProps) => {
    return (
        <div className={styles.categoryCard}>
            <Category category={category} />
        </div>
    )
}

export default function page() {
    return (
        <div className={styles.container}>
            <div className={styles.categoriesContainer}>
                {activityCategories.map(category => <CategoryCard key={category.id} category={category} />)}
            </div>
        </div>
    )
}