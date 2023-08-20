import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import Link from 'next/link';

const getTopics = async () => {
    const apiUrl = process.env.API_URL;
    try {
        const res = await fetch(`${apiUrl}/API/topics`, {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch topics");
        }
        return res.json();
    } catch (error) {
        console.log("Error loading topics:", error);
    }
};

export default async function TopicsList() {
    const { topics } = await getTopics();
    return (
        <>
            {topics.map((t) => (
                <div
                    key={t._id}
                    style={{
                        border: '1px solid #ccc',
                        padding: '20px',
                        marginLeft: '50px',
                        marginRight: '50px',
                        marginBottom: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            flex: '1',
                        }}
                    >
                        <h2
                            style={{
                                fontWeight: 'bold',
                                fontSize: '1.5rem',
                            }}
                        >
                            {t.title}
                        </h2>
                        <div
                            style={{
                                marginTop: '5px',
                                color: '#666',
                            }}
                        >
                            {t.description}
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            gap: '30px',
                        }}
                    >
                        <RemoveBtn id={t._id} />
                        <Link href={`/editTopic/${t._id}`}>
                            <HiPencilAlt size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}
