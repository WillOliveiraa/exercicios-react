import ItemTabuleiro from "../../components/ItemTabuleiro";

export default function () {
    return (
        <div className="content">
            {generateRows(4)}
        </div>
    )

    function generateLines(count) {
        var line = []
        var line2 = []
        for (let i = 0; i < count; i++) {
            line.push(<ItemTabuleiro isBlack={i % 2 == 0 ? true : undefined} />)
            line2.push(<ItemTabuleiro isBlack={i % 2 != 0 ? true : undefined} />)
        }
        var lines = (
            <>
                <div className="line">
                    {line}
                </div>
                <div className="line">
                    {line2}
                </div>
            </>
        )

        return lines
    }

    function generateRows(count) {
        var rows = []

        for (let i = 0; i < count; i++) {
            rows.push(generateLines(8))
        }

        return <>
            {
                rows
            }
        </>
    }
}
