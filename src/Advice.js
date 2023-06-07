export default function Advice({ id, advice }) {
    return (
        <div>
            <h1>Advice #{id}</h1>
            <blockquote>{advice}</blockquote>
        </div>
    );
}

Advice.defaultProps = {
    id: 0,
    advice: "Advice text",
};
