import { CategoryType } from "@/types/Category"
import styles from './index.module.css'
import Image from 'next/image'

type Props = {
    category: CategoryType
}
export default function Category({ category }: Props) {
    const { name, picture } = category
    return (
        <div className={styles.container}>
            <div className={styles.imageSection}>
                <Image alt={picture} src={picture} width={390} height={250} />
            </div>
            <div className={styles.descriptionSection}>
                <h2>{name}</h2>
            </div>
        </div>
    )
}