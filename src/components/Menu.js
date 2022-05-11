export default function Menu(props) {
    const {startRecall} = props;

    return (
        <div className="menu">
            <img className="logo" src="./assets/images/logo.png" alt="Logo do Zap Recall" />
            <h1>ZapRecall</h1>
            <div onClick={startRecall} className="button--begin"><span>Iniciar Recall</span></div>
        </div>
    )
}