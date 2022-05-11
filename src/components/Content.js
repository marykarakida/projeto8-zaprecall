import FlashCards from "./FlashCards"
import Status from "./Status"

export default function Content() {
    return (
        <div className="content">
            <header>
                <img className="logo" src="./assets/images/logo.png" alt="Logo do Zap Recall" />
                <h1>ZapRecall</h1>
            </header>
            <FlashCards />
            <Footer />
        </div>
    )
}

function Footer() {
    return (
        <footer></footer>
    )
}
