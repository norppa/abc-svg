import Duration from './Duration'

export const parse = (abc) => {
    const data = {
        abc,
        length: 0.125
    }

    let noteStr = ''
    abc.split("\n").forEach(line => {
        const firstTwo = line.substr(0, 2)
        if (firstTwo === "T:") {
            data.title = line.substr(2).trim()
        } else if (firstTwo === "K:") {
            data.key = line.substr(2).trim()
        } else if (firstTwo === 'L:') {
            data.length = lengthStrToNumber(line.substr(2).trim())
        } else {
            noteStr += line
        }
    })
    data.notes = abcStrToArr(noteStr, data.length)
    return data
}

const lengthStrToNumber = (lenStr) => {
    const values = lenStr.split('/')
    if (values.length !== 2) return 0
    return parseInt(values[0]) / parseInt(values[1])
}

const abcStrToArr = (abcStr, baseLength) => {
    let notes = []


    let accidental = ''
    let accidentalAnnounced = false

    let name = ''
    let octave = 0

    let numerator = ''
    let denominator = ''
    let useNumerator = true
    let duration
    let combineToNext = false

    const pushAndReset = (c) => {
        numerator = numerator ? numerator : 1
        denominator = denominator ? denominator : 1
        console.log('pushing', numerator, denominator)
        duration = parseInt(numerator) / parseInt(denominator) * baseLength
        notes = notes.concat({
            accidental,
            name,
            octave,
            duration,
            combineToNext
        })
        accidental = ''
        name = ''
        octave = 0
        numerator = ''
        denominator = ''
        combineToNext = true
        accidental = c
        accidentalAnnounced = true
        useNumerator = true
    }

    for (let i = 0; i < abcStr.length; i++) {
        const c = abcStr.charAt(i)

        if (isAccidental(c)) {
            pushAndReset(c)
            continue
        }

        if (isNote(c)) {
            if (!accidentalAnnounced) pushAndReset()
            name = c.toLowerCase()
            if (name === c) {
                octave = octave + 1
            }
            accidentalAnnounced = false
            continue
        }

        if (isOctave(c)) {
            octave = octave + (c === ',' ? -1 : 1)
            continue
        }

        if (isTime(c)) {
            if (c === '/') {
                if (useNumerator === false) {
                    console.log('note duration error: multiple / symbols')
                }
                useNumerator = false
                continue
            }
            if (useNumerator) {
                numerator = numerator + c
            } else {
                denominator = denominator + c
            }
            continue
        }

        if (isBreak(c)) {
            combineToNext = false
        }
    }
    combineToNext = false
    pushAndReset()
    return notes.slice(1)
}

const isBreak = c => c === ' '
const isAccidental = c => c === '^' || c === '_' || c === '='
const isNote = c => 'ABCDEFG'.includes(c.toUpperCase())
const isOctave = c => c === ',' || c === '\''
const isTime = c => c === '/' || '0123456789'.includes(c)
