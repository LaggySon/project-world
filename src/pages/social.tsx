import styles from "../styles/social.module.scss"
// Generate content server-side
export async function getServerSideProps() {
    const authors = ["mike", "pete", "george", "james", "gabe"];
    const contents = [
        "Start your day with a smile and end it with a laugh! 🌟 #GoodVibesOnly",
        "Coffee first, adulting second. ☕️ #MorningMotivation",
        "Life's better when you're laughing. 😂 #HappinessMatters",
        "Exploring new places, one adventure at a time. 🗺️ #TravelGoals",
        "Weekend vibes: Relax, refresh, and recharge. 🌞 #WeekendMood",
        "Chasing dreams, not people. 💫 #StayFocused",
        "Sipping on success, one step at a time. 🍹 #MotivationMonday",
        "Every moment is a fresh beginning. 🌅 #PositiveVibes",
        "Let the good times roll! 🎉 #PartyTime",
        "Sunsets are proof that endings can be beautiful too. 🌄 #NatureLovers",
        "Be yourself; everyone else is already taken. 🌟 #BeUnique",
        "Work hard, stay humble, and always be kind. 💪 #LifeLessons",
        "When in doubt, dance it out! 💃 #FeelGoodFriday",
        "Cheers to the little things in life! 🥂 #Gratitude",
        "Dream big, hustle harder. 🚀 #SuccessMindset",
        "Find joy in the ordinary moments. 🌼 #SimplePleasures",
        "Good vibes, good company, and great memories. 🌈 #FriendshipGoals",
        "Dare to be different, it's worth it. 🎨 #BeCreative",
        "Monday blues? Not here! 💙 #FreshStart",
        "Celebrate life, no matter how small the victory. 🎉 #CelebrateEveryday",
    ];

    function getRandomElement<T>(list: T[]) {
        const randomIndex = Math.floor(Math.random() * list.length);
        return list[randomIndex];
    }

    function createPost() {
        const post = {
            author: getRandomElement(authors),
            content: getRandomElement(contents),
        };
        return post
    }

    const posts = []
    for(var i=0;i < 50;i++){
        posts.push(createPost())
    }

    // Pass the random post as a prop
    return {
        props: {
            posts,
        },
    };
}

export default function Social({ posts }: { posts: [{ author: string; content: string }] }) {
    // Render the post
    return (
        <div className={styles.postbox}>
            {posts.map((post)=>(
                <div className={styles.post}>
                    <h1>{post.author}</h1>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}
