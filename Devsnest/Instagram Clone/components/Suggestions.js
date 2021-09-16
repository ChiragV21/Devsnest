import "../styles/suggestions.scss";
import Profile from "./Profile";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="titleContainer">
        <div className="title">Suggestions For You</div>
        <a href="/">See All</a>
      </div>

      <Profile
        caption="Followed by Ritika + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Followed by Aman + 1 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        caption="Follows you"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        caption="Followed by Anuj + 7 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Followed by AkshayKumar + 4 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        caption="Follows you"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        caption="Followed by Hrithik + 23 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        caption="Followed by Manish Paul + 44 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
    </div>
  );
}

export default Suggestions;
