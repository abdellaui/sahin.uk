/* 
    copyright (c) by abdullah şahin
*/
var _0x90b5 = [
    "\x74\x65\x72\x6D\x69\x6E\x61\x6C",
    "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64",
    "\x61\x62\x64\x75\x6C\x6C\x61\x68",
    "\u015F\x61\x68\x69\x6E",
    "\x63\x6C\x61\x73\x73\x4E\x61\x6D\x65",
    "\x74\x65\x72\x6D\x69\x6E\x61\x6C\x2D\x75\x6E\x64\x65\x72\x73\x63\x6F\x72\x65\x20\x68\x69\x64\x64\x65\x6E",
    "\x74\x65\x72\x6D\x69\x6E\x61\x6C\x2D\x75\x6E\x64\x65\x72\x73\x63\x6F\x72\x65",
    "\x73\x65\x74\x49\x6E\x74\x65\x72\x76\x61\x6C",
    "\x6E\x61\x6D\x65\x2D\x68\x6F\x6C\x64\x65\x72",
    "\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C",
    "\x26\x23\x39\x35\x3B",
    "\x73\x75\x62\x73\x74\x72\x69\x6E\x67",
    "\x73\x65\x74\x54\x69\x6D\x65\x6F\x75\x74",
    "\x6C\x65\x6E\x67\x74\x68",
    "\x26\x6E\x62\x73\x70\x3B\x26\x23\x39\x35\x3B",
];
let terminal = document[_0x90b5[1]](_0x90b5[0]);
let word1 = _0x90b5[2];
let word2 = _0x90b5[3];
let letterCount = 0;
let letterDelete = 0;
let visible = true;
let notWork = false;
window[_0x90b5[7]](function () {
    if (visible) {
        terminal[_0x90b5[4]] = _0x90b5[5];
        visible = false;
    } else {
        terminal[_0x90b5[4]] = _0x90b5[6];
        visible = true;
    }
}, 300);
function terminalText(_0x3a0dx9) {
    let _0x3a0dxa = document[_0x90b5[1]](_0x90b5[8]);
    window[_0x90b5[12]](function () {
        window[_0x90b5[12]](function () {
            if (letterCount === 0) {
                while (letterCount <= _0x3a0dx9[_0x90b5[13]]) {
                    (function (letterCount) {
                        window[_0x90b5[12]](function () {
                            if (letterCount === 1) {
                                terminal[_0x90b5[9]] = _0x90b5[10];
                            }
                            _0x3a0dxa[_0x90b5[9]] = _0x3a0dx9[_0x90b5[11]](
                                0,
                                letterCount
                            );
                        }, 100 * letterCount);
                    })(letterCount++);
                }
            }
        }, 0);
        window[_0x90b5[12]](function () {
            if (letterCount >= _0x3a0dx9[_0x90b5[13]] && _0x3a0dx9 != word2) {
                while (
                    letterCount >= 0 &&
                    letterDelete != _0x3a0dx9[_0x90b5[13]] + 1
                ) {
                    (function (letterCount) {
                        window[_0x90b5[12]](function () {
                            if (letterCount < 1) {
                                terminal[_0x90b5[9]] = _0x90b5[14];
                            }
                            _0x3a0dxa[_0x90b5[9]] = _0x3a0dx9[_0x90b5[11]](
                                0,
                                letterCount
                            );
                        }, 1000 - letterCount * 40);
                    })(letterDelete++);
                }
            }
        }, 1000);
        letterCount = 0;
        letterDelete = 0;
    }, 1500);
}
function showAgain() {
    if (notWork) {
        notWork = false;
        terminalText(word1);
        window[_0x90b5[12]](function () {
            terminalText(word2);
            notWork = true;
        }, 3000);
    }
}
notWork = true;
showAgain();
setInterval(function () {
    showAgain();
}, 8e3);

window.onload = () => {
    const dateStr = new Date().toLocaleString('de-DE', { timeZoneName: 'short' })
    document.getElementById('render-date-1').textContent = dateStr;
    document.getElementById('render-date-2').textContent = dateStr;

    const printPage = (e) => {
        e.preventDefault()
        window.print();
        return false;
    };

    let printButton = document.getElementById("print-button")
    printButton.addEventListener('click', printPage);
    printButton.addEventListener('touchstart', printPage);

    window.onbeforeprint = () => {
        if (window.getSelection) { window.getSelection().removeAllRanges(); }
        else if (document.selection) { document.selection.empty(); }
    };
};
/* 
    copyright (c) by abdullah şahin
*/