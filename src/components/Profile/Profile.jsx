import css from './Profile.module.css'

export default function Profile({ name, tag, location, avatar, stats }) {
    return (
        <div className={css.profileCard}> 
        <div>
            <img
                src={avatar}
                alt="User avatar"
                className={css.avatar}    
            />
                <p className={css.name}>{name}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
        </div>

        <ul className={css.statsContainer}>
            <li className={css.statsItem}>
                <span className={css.statsTitle}>Followers</span>
                <span className={css.statsValue}>{ stats.followers }</span>
            </li>
            <li className={css.statsItem}>
                <span className={css.statsTitle}>Views</span>
                <span className={css.statsValue}>{ stats.views }</span>
            </li>
            <li className={css.statsItem}>
                <span className={css.statsTitle}>Likes</span>
                <span className={css.statsValue}>{ stats.likes }</span>
            </li>
        </ul>
        </div>
    )
} 

