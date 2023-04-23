import React from "react";

export function getRandomNumber  (stringLength:number) {return Math.floor(Math.random() * stringLength)}

export function getRandomName(maxSyllabus: number):string{
    const alphabet:string = 'abcdefghijklmnopqrstuvwxyz'
    const vowels:string = 'aeiou'

    let randomName:string = ''

    for (let i = 0; i <= maxSyllabus-1; i++){
        const randomAlphabetLetter:string = alphabet[Math.floor(Math.random() * alphabet.length)]
        const randomVowel:string = vowels[getRandomNumber(vowels.length)]
        randomName = randomName +  randomAlphabetLetter + randomVowel
    }
    // setNewLabel(randomName)
    return randomName
}

export function getRandomColor(setNewColor:React.Dispatch<any>):void {
    const color: string[] = ['yellow', 'blue', 'red', 'green', 'black', 'white', 'brown']
    console.log(getRandomNumber(color.length))
    setNewColor(color[getRandomNumber(color.length)])
}