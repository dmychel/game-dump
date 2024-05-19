import ProfileHeader from "../components/profile/ProfileHeader";
import UserInfo from "../components/profile/UserInfo";
import UserGames from "../components/profile/UserGames";

export default function Profile() {
  return (
    <section className="profile">
      <ProfileHeader />
      <UserInfo />
      <UserGames />
    </section>
  );
}
