export default function DemographicCategory({ name, score_out_of_10 }) {
    return (
        <div>
            <p>{name}: {score_out_of_10}/10</p>
        </div>
    )
}
