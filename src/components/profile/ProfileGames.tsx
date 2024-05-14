import Games from "./Games";

export default function ProfileGames() {
  return (
    <div className="profile-games">
      <div className="game-header">
        <h3>Recent Games</h3>
      </div>
      <div className="games-container">
        <Games />
        <Games />
        <Games />
      </div>
    </div>
  );
}
