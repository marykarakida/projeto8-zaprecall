import FlashCards from "./FlashCards"

export default function Content() {
    return (
        <div className="content">
            <header>
                <img className="logo" src="./assets/images/logo.png" alt="Logo do Zap Recall" />
                <h1>ZapRecall</h1>
            </header>
            <FlashCards />
            <footer></footer>
        </div>
    )
}