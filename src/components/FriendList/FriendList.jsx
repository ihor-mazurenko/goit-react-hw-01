import css from './FriendList.module.css'

export default function FriendList({ friends }) {
    return (
         <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={css.friendItem}>
          <img className={css.avatar} src={avatar} alt="User avatar" />
          <p className={css.name}>{name}</p>
          <p className={(isOnline ? css.isOnline : css.isOffline)}>
            {isOnline ? 'Online' : 'Offline'}
          </p>
        </li>
      ))}
    </ul>
    )
}
