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



    /* ENCRYPTION-RELATED */

    const ITERATIONS = 200000;
    const SEGMENTS_JSON = {
        "salt": "xLvFHgAbv8uhEjyPkG6RMQ==",
        "iv": "u+dZs51R4vciiYZzXQBFdw==",
        "ct": "R9XCrCXPRHtJ7NoNyUnoHIt1g9bwuTSVymLOOdtdUdYZOjWa+Jkm4x6Zks8wST9XsUm+q+htf/S0tTFqJN2LxLGHk8+X2HasafFmS7Z7Y0sQOGJ0QPzPWIPqEtrv342fBThWaSqcr4I86Wz6IbbF3BoA72rtJnw3t15aAPMzzW+d73l4yWPus9trr9uL+tg3z2t/C6j8HTNFfpuwivyksT8ZGrvRyTFUvKzhx5cX+sPj+CUEfOaw1FL110qnTIij1MpNjHWjYSXCU4wrHYoz4Q37wXZ3wYBK/9H0lM+RJoDi2DfJbOrjGcZxlqOv1v+CoGqupCeLN/vIXzt52I/i0nrzxwaPQABDZ3s3tlu4Yqq+s4FRsUy2UfMSrcACu3clkqwLc7YHj55ofSixSgJrxVDwARwJW1FO1+elz/Ka2NF9qGkGQgt37XDTCzMYCgB/hgNsKJ8Hqpqaa9MMDMULoaa3kYTu1wMCeZYp6dyC9vigDRAIPbDnSMmSc2BSWjPjl8ploN+8tjd4vDR/pOXs8bdG4G/bThwQvgbIhNximOAWmxrUNciSsxRcjH0RgIi7ANAIrB/lHXEaeQeCay8cmY8oEpEtgK9IUd9uwAprfMEem0DfGW+t6MSly+RwyYUNxXDraPZEF9w6Kr2GKTpe4zyv5GtZqJALgBpGtuQ4Vtgz0BboFYTq0Qd/9ewcfKtzzdndnNAtjXaa3vZGihZSun40aTUSPbiZ7xD03CsLHy5yUDjIs0ux9tJ1MxQxP2OJbH+CYJmKD5ocsPqrSGQ7wfWECBGRLyKWKPEOXaBt3KE7yVjDX0gdkswDde0JfxM5uB2CGj0hjnqbt8rnIhkLt0ivxatf4gkkSj9G4NpflCgtnvDXg0tfoTGzqTa+ZUJ//y1cGc8qq+232ACLb9FtPkK1SFk8QJn4pcTZ4j2L090Tu5D+SBqSnMKLPPfttzZdos3Nqpd/GsfQIpgoTTHZZBL0I1kxdGvtimDb/Zm7zsmsuud4bB+8AqOmQkqQGNrRV9rjuUH/sQ6Rz3SC3j8EGUMtezZm6R1wUelv9vQ7O7C4rVXhyvdVBWM5p3aawujF7UJg+1UaHnToeXAgisaTQ1DLO/RcNm3ZDu9QkU1zGDR/ChwqYjuoRfdABjw3MkraPYeOyuvzgEYBbPodoTR+Td9OCfIJ5tOkbiabQdimrN60mOLnDvVHeIui7Om9IndZKhOlFxHMOMw0cwkJR5E0vLFP8+y4X8FPhA6nw8/Tvrv0T95ycErxea741ZWlAocNdVvWLNSpMHOPIVq2nBJReErDEnZQ+2YAnsZwyZ2EY0BT0fgQAdLN0dZQK5i0NDf3ncgewp6lQb8hUaCMfOMEE06ifZTd1Qqa2rmiVWw5HD05zDtYBkYfOKxIclr1CNhGxk1kA8YImulP6Mo6aoATNJU2g50sh33y9KgEMJugkAp7e0KGxOHPQDsaqFImpbuISiYlGBcLITjiCqIWwRKZLKY3TJ9ZbmNGsha/CRcMyhYttsLXwBIJlj++88HbyIPXeW5x33pWxCSPnjM5pGvm9P2g7sDNL5yQ5eIsCw0bxAnGX51qHVwIH6o48o5xQ4/uzyihoASafmkp1lqa7uAl/UAYZi13qSNo9s2IFKLuks8jlNNTsWJvAVrSpkBVYHjKDvOiG05iV8We5RauRtlJ/3pW3wIhtzW+sK5BaUme3TDyjU+/qgfTBnOJXIW+v1iPI5qHao29n4OEY+2nLPyNj9Gb09BRGMZerl9klI+rxVK/2Q6aTNjBS0ckVqTiZwi+yBWxdfHcpnGTuVvxLLJEB+hCEBZBT9p6MsnCXig1HVD/PPmdH3So6qpWRRs0vn3KntCExbfVo7my7oFPgt+KLIxp15a3elHL/U4eLUmVPJOWKok440Rjqd+CNsTZArKM/4or9swM4iziKvwg82xQy9oF+XIHIp6MVETH723lFKnpEiI6IpexylB8OX3dKgabAWKEkJJWt/NfUu01N+TCr2Sc7ReApY++40Q7VriRm8Yvq9xnePnpOVWKmq3QzLwEno77jRPLC8u/OPFRBK/gcLI2lSn2cFAlQQSO6KGbzYGZ8ATKem4sMjxO/Ex+CKFJ5hsYWexBuIJoha17MifZ+h+O0icVTFXCqeOYEFgSp6h2e0t4gL3ToDoSHxqCpE19UZML+rNeDLXIacZbaqJ9u9bnDvKVJ+b+mdAlnCHbMmHLZ9OEJ/eoFcYR7xVcNatQOSR/pZ8KeVROsXC6BKxceVyJa5ddN89eczFgQz/KBidrC+/n7DZUOF3DJqM2cx4W3OgDh1agfdAADN2h2+helyQOtPFc1qU3j6EexIe95cq1XgF2AC8uCdFoLtXvhICVYojrqCRppqPWFPdGaHk5Z75X0PUF7kdigVa+gbNOuThUyQj243zQ3UdA3msK+9/UEC8vsvHLITu+IH+igVST/kv+f+5iV/xHJqgoZuRqkA8YhXmUraid6w9+M3XUReq7vPLRsWs16mkpQqzNGcc1pPMcRYZTG17DQIUqGrUXk7Ac/oMIBigmPLwwim74D50uk4wRnHFW4Wnxe+kZTHNEpROS7zASdCe9UYrWb3puqiYxij2xyCDaP1m6xAMecKW5W3pTXB9ZFuAtqFFlinLSzyN8xIWpLTprSBmltuha0zBXh/O2GhGhMtn5pbTunPaKI6frLW8it+mczHtWE914nUlKubNLWtSthdfK6KnIwdDvqJpMVVQVNtONPo37R7blIY6wmebnCo9eofs3hzMxU7c6vj7hew4zbgIwQ/E85lBJWAHiOBgZtk098mB7wEyGMlYzq7aUXlX22MAE6BWrTb6uHk7lA8xYq8cKSMNXsI0LTHy8v3XAic72+ua1rarA6x5zg52QL4brMyGHyxIVt+Oty4umPbtqzkiSEL5Y8942Is3N+93y3emusnetPIziOxKoSVOy769ekbDarnPFIYdzYGWUpNvL3a94io5XbbjtVOhQd9j14XaO8ZRVWVrSNLc5w1Jng0+MoKJqGKZxUTFdmNDWwr+ooKbNdxeeslQWj2FZFTpbBe4PLu2g/ckpCpE7Z7teSwdkuDr9J+5SRVAshyKMBWjLcEEkovy5yEy/l4ihboVc/jAsz1yRLYPzQEt+qMffNmqQNArAVSo5rtpg+6jaxw9SAhj/m8UfoxgxUjo1ntHzSb794NMEsmN/ivfv6s7K47xR1/JfrG4EXk0Zmvfzk9DY2VWkNexnSnou+hkNsVvkoHzgwU5Iy1O2Jpwoa0gRXw/mtpKdevWYRasFzBioM8y4wlhpXbNTK2o/n6WLoT228sqwGe6cYfoFoSemg6zkC8SNIsIVbywdFSGJ3Z8s+0wkVO4naudwgoRmjFf7UiY6SV61xVzkJtyJJwA/e8hjtT/AzzRLEyg8isp6tLi9c2CH1Rv/8NDfzElCs4FqgQ1MtwKh4GhQ3OG/O6OgGSin0ZesfVfnXht8WvqlxlJbqMjlObV0lxnbrYhTg05Mj8Tt+8bNGxszsCqjDFcebXCGXKayrtv3AwfMnd1btnlzttKmZcn9iXHtJSkMZnD5QE9SvSkSvU4rEjP5ApTBkxiO4RtKnqy/gMbKijXZxJl+LC2Vibvmm2iuhKFLgTL58qmSD/qejJaW3OjdxB+92vS68rUuIf3AmYFOak1FdnrsXub5mF4axyyLu2hxe4CxagJF/Q6PiCN5ahxp8DzThonSKuSGNAyOIP3N5QEkTBi9LK2ZjJf0N5C+HJ7GpsB/tikPtwf8FNAU3nZg/BDzH4eu++yqm4/Na41SbA==",
        "iterations": 200000
    };


    const _0x3af12c = _0x50fd; (function (_0x3d42e9, _0x1a1dad) { const _0x6dc611 = _0x50fd, _0x28ee99 = _0x3d42e9(); while (!![]) { try { const _0x2d1adf = parseInt(_0x6dc611(0x1db)) / 0x1 + -parseInt(_0x6dc611(0x1ae)) / 0x2 + parseInt(_0x6dc611(0x1b3)) / 0x3 + -parseInt(_0x6dc611(0x1c5)) / 0x4 * (-parseInt(_0x6dc611(0x1b8)) / 0x5) + parseInt(_0x6dc611(0x1d7)) / 0x6 + parseInt(_0x6dc611(0x1ac)) / 0x7 * (parseInt(_0x6dc611(0x1c4)) / 0x8) + parseInt(_0x6dc611(0x1d5)) / 0x9 * (-parseInt(_0x6dc611(0x1cd)) / 0xa); if (_0x2d1adf === _0x1a1dad) break; else _0x28ee99['push'](_0x28ee99['shift']()); } catch (_0x474e59) { _0x28ee99['push'](_0x28ee99['shift']()); } } }(_0x146a, 0x3e75e)); const overlay = document[_0x3af12c(0x1b4)](_0x3af12c(0x1cf)), pwInput = document[_0x3af12c(0x1b4)]('pw'), ok = document[_0x3af12c(0x1b4)]('ok'), cancel = document[_0x3af12c(0x1b4)](_0x3af12c(0x1ca)), msg = document[_0x3af12c(0x1b4)]('msg'); function showOverlay() { const _0x3421d3 = _0x3af12c; overlay[_0x3421d3(0x1c3)][_0x3421d3(0x1ba)] = _0x3421d3(0x1ad), pwInput[_0x3421d3(0x1d8)] = '', msg[_0x3421d3(0x1d9)] = '', setTimeout(() => pwInput[_0x3421d3(0x1a9)](), 0x32); } function _0x50fd(_0x4eb355, _0x3ad46c) { const _0x146a31 = _0x146a(); return _0x50fd = function (_0x50fd66, _0x17d4aa) { _0x50fd66 = _0x50fd66 - 0x1a8; let _0x36a2f9 = _0x146a31[_0x50fd66]; return _0x36a2f9; }, _0x50fd(_0x4eb355, _0x3ad46c); } function hideOverlay() { const _0x203733 = _0x3af12c; overlay[_0x203733(0x1c3)]['display'] = _0x203733(0x1b2); } async function decryptSegment(_0x1cde37) { const _0x4d651e = _0x3af12c; if (!SEGMENTS_JSON || SEGMENTS_JSON[_0x4d651e(0x1d2)] === 0x0) { msg[_0x4d651e(0x1d9)] = _0x4d651e(0x1a8); return; } try { if (!SEGMENTS_JSON || !SEGMENTS_JSON['ct']) return null; const _0x6715ac = CryptoJS['enc']['Base64'][_0x4d651e(0x1da)](SEGMENTS_JSON[_0x4d651e(0x1b0)]), _0x83084d = CryptoJS[_0x4d651e(0x1d1)][_0x4d651e(0x1b6)][_0x4d651e(0x1da)](SEGMENTS_JSON['iv']), _0x3dbe65 = CryptoJS[_0x4d651e(0x1b1)](_0x1cde37, _0x6715ac, { 'keySize': 0x8, 'iterations': SEGMENTS_JSON[_0x4d651e(0x1d3)] || ITERATIONS }), _0x1f78b3 = CryptoJS[_0x4d651e(0x1b5)][_0x4d651e(0x1c2)][_0x4d651e(0x1c6)]({ 'ciphertext': CryptoJS['enc']['Base64'][_0x4d651e(0x1da)](SEGMENTS_JSON['ct']) }), _0x192170 = CryptoJS[_0x4d651e(0x1de)][_0x4d651e(0x1dc)](_0x1f78b3, _0x3dbe65, { 'iv': _0x83084d }), _0x32ff6b = _0x192170['toString'](CryptoJS[_0x4d651e(0x1d1)]['Utf8']); return _0x32ff6b || null; } catch (_0x2ed633) { return null; } } async function attemptUnlock(_0xc4e48b) { const _0x11231c = _0x3af12c, _0x338287 = _0xc4e48b[_0x11231c(0x1bf)]()[_0x11231c(0x1cc)](_0x11231c(0x1bb)); if (!_0x338287) { msg['textContent'] = 'please\x20enter\x20password!'; return; } msg[_0x11231c(0x1d9)] = _0x11231c(0x1ab), await new Promise(_0x37258f => setTimeout(_0x37258f, 0x0)); const _0x10efd4 = await decryptSegment(_0x338287); if (_0x10efd4 === null || _0x10efd4[_0x11231c(0x1d2)] === 0x0) msg[_0x11231c(0x1d9)] = _0x11231c(0x1c7); else { for (const [_0x48dbaf, _0x30542f] of JSON[_0x11231c(0x1da)](_0x10efd4)[_0x11231c(0x1bd)]()) { const _0x49fb9f = document[_0x11231c(0x1b4)](_0x11231c(0x1af) + _0x48dbaf); if (_0x49fb9f) { let _0x92abb2 = _0x30542f; window[_0x11231c(0x1dd)][_0x11231c(0x1cb)] !== _0x11231c(0x1c0) && (_0x92abb2 = _0x92abb2['replace'](_0x11231c(0x1d6), window[_0x11231c(0x1dd)]['origin'] + '/')), _0x49fb9f[_0x11231c(0x1ce)] = _0x92abb2; } } msg[_0x11231c(0x1d9)] = _0x11231c(0x1c8), setTimeout(hideOverlay, 0xc8); } } overlay[_0x3af12c(0x1c1)](_0x3af12c(0x1b7), _0x19cc78 => { _0x19cc78['target'] === overlay && hideOverlay(); }), cancel[_0x3af12c(0x1c1)]('click', _0x2c30c3 => { hideOverlay(); }), window['addEventListener'](_0x3af12c(0x1d4), _0x15340a => { const _0x182cc2 = _0x3af12c; _0x15340a['key'] === _0x182cc2(0x1d0) && hideOverlay(); }), document[_0x3af12c(0x1aa)]('div.encrypted-seg')['forEach'](_0x2d3958 => { const _0x14ba78 = _0x3af12c; _0x2d3958[_0x14ba78(0x1c1)]('click', _0x140ae9 => { const _0x263999 = _0x14ba78; showOverlay(), _0x140ae9[_0x263999(0x1c9)](); }); }), ok['addEventListener'](_0x3af12c(0x1b7), _0xf024d7 => { attemptUnlock(pwInput['value']); }), pwInput[_0x3af12c(0x1c1)]('keyup', _0xbf4efd => { const _0x302300 = _0x3af12c; _0xbf4efd[_0x302300(0x1bc)] === _0x302300(0x1b9) && attemptUnlock(pwInput[_0x302300(0x1d8)]); }); function _0x146a() { const _0x524508 = ['lib', 'Base64', 'click', '610ePHrOv', 'Enter', 'display', 'NFC', 'key', 'entries', 'hash', 'trim', 'abdellaui.github.io', 'addEventListener', 'CipherParams', 'style', '8LXYkXu', '11728lruHZB', 'create', 'wrong\x20password!', 'all\x20unlocked!', 'preventDefault', 'cancel', 'host', 'normalize', '2050VwUSQB', 'outerHTML', 'overlay', 'Escape', 'enc', 'length', 'iterations', 'keydown', '44073hxdkyF', 'https://abdellaui.github.io/sahin.uk/', '1887618GWiOly', 'value', 'textContent', 'parse', '274681gudNic', 'decrypt', 'location', 'AES', 'no\x20encrypted\x20segments\x20configured.', 'focus', 'querySelectorAll', 'trying...', '375508KXulFr', 'flex', '392598OqVjBQ', 'encrypted-seg-', 'salt', 'PBKDF2', 'none', '1366170gLwNAj', 'getElementById']; _0x146a = function () { return _0x524508; }; return _0x146a(); } if (location['hash'] && location[_0x3af12c(0x1be)][_0x3af12c(0x1d2)] > 0x1) { const hashPw = decodeURIComponent(location[_0x3af12c(0x1be)]['slice'](0x1)); hashPw && (showOverlay(), pwInput['value'] = hashPw, attemptUnlock(hashPw)); }
};


/* 
    copyright (c) by abdullah şahin
*/