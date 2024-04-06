import { activityCategories } from '~/mockData/Activities';
import styles from './page.module.css';
import Category from '@/components/Category';
import { CategoryType } from '@/types/Category';
import TopNavbar from '@/components/TopNavbar';
import PaddedContainer from '@/components/PaddedContainer';

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
        <PaddedContainer>
            <div className={styles.container}>
                <TopNavbar />
                <div className={styles.categoriesContainer}>
                    <div style={{ width: "100%", height: "90px" }}></div>
                    {activityCategories.map(category => <CategoryCard key={category.id} category={category} />)}
                </div>
            </div>
        </PaddedContainer>
    )
}