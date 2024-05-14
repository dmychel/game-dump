import ProfileGames from "../components/profile/ProfileGames";
import ProfileHeader from "../components/profile/ProfileHeader";

export default function Profile() {
  return (
    <div className="profile">
      <ProfileHeader />
      <ProfileGames />
    </div>
  );
}
