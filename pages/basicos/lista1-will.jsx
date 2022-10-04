export default function listWill() {
    return generateList(10)
}

function generateList(length) {
    var spans = []
    
    for (let i = 1; i <= length; i++) {
        spans.push(<span>{i}, </span>)
    }

    return (
        <div>
            {spans}
        </div>
    )
}
