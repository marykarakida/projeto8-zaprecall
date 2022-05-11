export default function IonIcon() {
    const status = "effortful"

    switch (status) {
        case "incorrect":
            return <ion-icon name="close-circle"></ion-icon>;
        case "effortful":
            return <ion-icon name="help-circle"></ion-icon>;
        case "correct":
            return <ion-icon name="checkmark-circle"></ion-icon>;
        default:
            return <ion-icon name="play-outline"></ion-icon>;
    }
}