import "../styles/cards.scss";
import Stories from "./Stories";
import Card from "./Card";

function Cards() {
  const commentsOne = [
    {
      user: "lindavivah",
      text: "Woah dude, this is awesome! 🔥",
      id: 1,
    },
    {
      user: "anushkasharma",
      text: "Like!",
      id: 2,
    },
    {
      user: "neerajchopra",
      text: "Niceeeee!",
      id: 3,
    },
  ];

  const commentsTwo = [
    {
      user: "amazon",
      text: "Amazing content, keep it up!",
      id: 4,
    },
    {
      user: "viratkohli",
      text: "Yeah so cool!",
      id: 2,
    },
    {
      user: "kapilsharma",
      text: "Beautiful kid!",
      id: 3,
    }
  ];

  const commentsThree = [
    {
      user: "zaynmalik",
      text: "Love this!",
      id: 5,
    },
    {
      user: "rohitsharma",
      text: "Woah man!",
      id: 2,
    }
  ];
  const commentsFour = [
    {
      user: "amazon",
      text: "Awesome view",
      id: 4,
    },
    {
      user: "thephotographer",
      text: "DM for collaborations!",
      id: 2,
    },
    {
      user: "msd",
      text: "Zivaaaaa!",
      id: 3,
    },
  ];
  const commentsFive = [
    {
      user: "therock",
      text: "Just Wow!",
      id: 4,
    },
    {
      user: "anushkasharma",
      text: "Like!",
      id: 2,
    },
    {
      user: "neerajchopra",
      text: "Cool Cool!",
      id: 3,
    },
  ];

  return (
    <div className="cards">
      <Stories />

      <Card
        accountName="roberto"
        storyBorder={true}
        image="https://picsum.photos/800/900"
        comments={commentsOne}
        likedByText="harrystyles"
        likedByNumber={89}
        hours={16}
      />
      <Card
        accountName="arianagrande"
        image="https://picsum.photos/800"
        comments={commentsTwo}
        likedByText="mostlysane"
        likedByNumber={47}
        hours={12}
      />
      <Card
        accountName="codewithharry"
        storyBorder={true}
        image="https://picsum.photos/800/1000"
        comments={commentsThree}
        likedByText="selenagomez"
        likedByNumber={897}
        hours={4}
      />
      <Card
        accountName="wakeupsid"
        storyBorder={true}
        image="https://picsum.photos/800/800"
        comments={commentsFour}
        likedByText="mehaksharrma"
        likedByNumber={450}
        hours={24}
      />
      <Card
        accountName="dadatlacak"
        storyBorder={true}
        image="https://picsum.photos/800/1200"
        comments={commentsFive}
        likedByText="aroramonika"
        likedByNumber={120}
        hours={1}
      />
    </div>
  );
}

export default Cards;
