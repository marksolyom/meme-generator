export default function Meme() {
    return (
        <main>
            <form>
                <input
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                />
                <button
                className="form-btn">
                    Get a new meme image <span className="weird-face">( ͡° ͜ʖ ͡°)</span>
                </button>
            </form>
        </main>
    )
}