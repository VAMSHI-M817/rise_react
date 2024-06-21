const ProfileCard = ({ name, email, body }) => {
  return (
    <section>
      <li className="comment">
        <div className="comment-header">
          <h3 className="name">{name}</h3>
          <h3 className="email">{email}</h3>
        </div>
        <p className="message">
          {body}
        </p>
      </li>
    </section>
  );
};

export default ProfileCard;
