import {CardInterface} from "../../types"
import Badge from "../Badge/Badge"
import Button from "../Button/Button"
// @ts-ignore
import styles from '../Card/Card.module.css'
import {Link} from 'react-router-dom';

const Card = ({body, btn, title, badge, image, indicator, subtitle}: CardInterface) => {
    return (
        <article className={`stack-lg ${styles.card}`}>
            {indicator &&
                <small className={styles.indicator}>{indicator}</small>
            }
            {badge &&
                <Badge text={badge.text} filled={badge.filled}/>
            }
            {image &&
                <img src={image} alt="Random Image" className={styles.image}/>
            }
            <div className="stack-sm">
                <h3 className={styles.title}>{title}</h3>
                {subtitle &&
                    <small className={styles.subtitle}>{subtitle}</small>
                }
            </div>
            <p className={styles.body}>{body}</p>
            <Link to="FundingDetail">
                <Button
                    filled={btn.filled}
                    type={btn.type}
                    text={btn.text}
                    href={btn.href}
                    icon={btn.icon}
                />
            </Link>
        </article>
    )
}
export default Card