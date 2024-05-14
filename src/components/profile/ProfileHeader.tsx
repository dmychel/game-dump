export default function ProfileHeader() {
  return (
    <>
      <div className="prof-background">
        <img src="https://fakeimg.pl/1600x900" alt="" />
      </div>
      <div className="user-info content">
        <div className="info-wrapper">
          <div className="info-left info">
            <img
              src="https://fakeimg.pl/500x500"
              alt=""
              className="profile-img"
            />
          </div>

          <div className="info-mid info">
            <h3>Username</h3>
            <p>Online</p>
          </div>
          <div className="info-right info">
            <img src="https://fakeimg.pl/1000x500" alt="" />
          </div>
        </div>
        <div className="user-about">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            illum explicabo labore deserunt ab exercitationem error accusantium
            dolor. Qui aut blanditiis est unde ipsa ipsam aspernatur voluptate
            saepe libero et!
          </p>
          <button>Edit Profile</button>
        </div>
      </div>
    </>
  );
}
