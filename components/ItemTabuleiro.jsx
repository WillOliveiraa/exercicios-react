import styles from "../pages/css/style-tabuleiro.module.css"

export default function ItemTabuleiro(props) {
    const { isBlack } = props

    const squareStyle = { width: "100px", height: "100px", backgroundColor: isBlack == undefined ? "#FFF" : "#000" }

    return (
        <div
            className={styles.square}
            style={squareStyle}
        />
    )
}
