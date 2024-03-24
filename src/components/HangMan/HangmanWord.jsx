const HangmanWord = () => {
    const word = "test"
    const guessedLetters = ["t", "e", "g"]
    return (
    <div style = {{ 
        display: "flex", 
        gap: ".25em", 
        fontSize: "6rem", 
        fontWeight: "bold", 
        textTransform: "uppercase", 
        fontFamily: "monospace",
    }}
    >
        {word.split("").map((letter, index) => (
            <span style = {{ borderBottom: ".lem solid black"}} key = {index}>
                <span
                style = {{
                    visibility: guessedLetters.includes(letter)
                    ? "visibile"
                    : "hidden"
                }}
                >
                    {letter}
                </span>
            </span>
        ))}

    </div>
    )
};

export default HangmanWord;