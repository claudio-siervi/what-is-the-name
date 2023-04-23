import React from "react";

export function getRandom  (stringLength:number) {return Math.floor(Math.random() * stringLength)}

export function getRandomName(maxSyllabus: number, setNewLabel:React.Dispatch<any>):void{
    const alphabet:string = 'abcdefghijklmnopqrstuvwxyz'
    const vowels:string = 'aeiou'

    let randomName:string = ''

    for (let i = 0; i <= maxSyllabus-1; i++){
        const randomAlphabetLetter:string = alphabet[Math.floor(Math.random() * alphabet.length)]
        const randomVowel:string = vowels[getRandom(vowels.length)]
        randomName = randomName +  randomAlphabetLetter + randomVowel
    }
    setNewLabel(randomName)
}

export function getRandomColor(setNewColor:React.Dispatch<any>):void {
    const color: string[] = ['yellow', 'blue', 'red', 'green', 'black', 'white', 'brown']
    console.log(getRandom(color.length))
    setNewColor(color[getRandom(color.length)])
}