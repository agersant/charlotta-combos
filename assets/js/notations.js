const inputs = new Map([
    ["1", "d1"],
    ["2", "d2"],
    ["3", "d3"],
    ["4", "d4"],
    ["5", "d5"],
    ["6", "d6"],
    ["7", "d7"],
    ["8", "d8"],
    ["9", "d9"],
    ["L", "light"],
    ["M", "medium"],
    ["H", "heavy"],
    ["U", "unique"],
    ["S", "skill"],
    ["T", "throw"],
    ["B", "block"],
    ["D", "dash"],
]);

const shorthandRegexes = new Map();
for (const shorthand of inputs.keys()) {
    const regex = new RegExp(`(?<!R|S)${shorthand}(?![a-z]|P|B)`, "g"); // Look-behind/ahead to support RS, DP and SBA
    shorthandRegexes.set(shorthand, regex);
}

const combos = document.querySelectorAll("combo");
for (const combo of combos) {
    let comboHTML = combo.innerHTML;
    for (const [shorthand, embed] of inputs) {
        const regex = shorthandRegexes.get(shorthand);
        comboHTML = comboHTML.replaceAll(regex, `<embed ${embed}>`);
    }
    combo.innerHTML = comboHTML;
}
