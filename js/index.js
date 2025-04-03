//Inserting the images

function insertImage() {

    document.querySelectorAll('.box').forEach(image => {

        if (image.innerText.length !== 0) {
            if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') {
                image.innerHTML = `${image.innerText} <img class='allimg allpawn' src="./img/${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'

            }

            else {

                image.innerHTML = `${image.innerText} <img class='allimg' src="./img/${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    })
}
insertImage()

// *coloring*

function coloring(){
    document.querySelectorAll('.box').forEach(color => {
        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
// When you give eval a number that is a string, it actually returns number so it can be sum.
        a = aside + aup

        if (a % 2 == 0) {
            color.style.backgroundColor = '#757778' 
        }
// (a % 2 !== 0) 
        else {
            color.style.backgroundColor = '#dee0e1'
        }
    })
}
coloring();

//function to not remove the same team element

function teammate(){
    // selected thing
    document.querySelectorAll('.box').forEach(i1 => {
        if(i1.style.backgroundColor == 'blue'){

    // another object in youre way
            document.querySelectorAll('.box').forEach(i2 => {
                if(i2.style.backgroundColor == 'green' && i2.innerText.length !== 0){

                    blueText = i1.innerText;
                    greenText = i2.innerText;

                    blueColor = (array.from(blueText).shift()).toString();
                    greenColor = (array.from(greenText).shift()).toString();

                    getId = i2.id;
                    arr = array.from(getId);
                    arr.shift();
                    aside = eval(arr.pop());
                    aup = eval(arr.shift());
                    a = aside + aup;
    
    // youre teammate in youre way
                    if ( a % 2 == 0 && blueColor == greenColor) {
                        i2.style.backgroundColor = '#757778'
                    }
                    if( a % 2 !== 0 && blueColor == greenColor){
                        i2.style.backgroundColor = '#dee0e1'
                    }

                }
            })
        }
    })
}

// start the game by clicking

// if whites turn or black turn, if white do a move its blacks turn now
tog = 1;
whiteCastleChance=true
blackCastleChance=true

document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('click', function(){

        // To delete the opposite element in green boxes

        if(item.style.backgroundColor == 'aque' && item.innerText.length == 0){
            tog = tog + 1;
        }
        else if(item.style.backgroundColor == 'green' && item.innerText.length == 0){
            tog = tog + 1;
        }
        else if(item.style.backgroundColor == 'green' && item.innerText.length !== 0){
            document.querySelectorAll('.box').forEach(i =>{
                if(i.style.backgroundColor == 'blue'){
                    blueId = i.id;
                    blueText = i.innerText;

                    document.getElementById(blueId).innerText = '';
                    item.innerText = blueText;
                    coloring();
                    insertImage();
                    tog = tog + 1;
                }
            })
        }

        getId = item.id;
        arr = Array.from(getId);
        arr.shift()
        // returns b and arr = ['8', '0', '5'];
        aside = eval(arr.pop());
        // aside is 5, it shows columns and arr = ['8', '0'];
        arr.push('0');
        aup = eval(arr.join(''));
        // aup = 800;
        a = aside + aup;
        // a = 805 becuase of eval()

        // Function to display the available paths for all pieces

        function whosTurn(toggle){

            if (item.innerText == `${toggle}pawn`) {
                item.style.backgroundColor = 'blue';
                // wpawn and it only goes to aup == 700
                if (tog % 2 !== 0 && aup < 800) {
                    // wpawn in their home and wants to move
                    if (aup == 200 && document.getElementById(`b${a + 100}`).innerText.length == 0) {
                        document.getElementById(`b${a + 100}`).style.backgroundColor = 'green';

                        if(aup == 200 && document.getElementById(`b${a + 200}`).innerText.length == 0){
                            document.getElementById(`b${a + 200}`).style.backgroundColor = 'green';
                        }
                    }
            
                    if (aup !== 200 && document.getElementById(`b${a + 100}`).innerText.length == 0) {
                        document.getElementById(`b${a + 100}`).style.backgroundColor = 'green';
                    }
                    // wpawn attack move to right
                    if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green';
                    }
                    // wpawn attack move to left
                    if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green';
                    }

                }

                if (tog % 2 == 0 && aup > 100) {

                    if (aup == 700 && document.getElementById(`b${a - 100}`).innerText.length == 0) {
                        document.getElementById(`b${a - 100}`).style.backgroundColor = 'green';

                        if (aup == 700 && document.getElementById(`b${a - 200}`).innerText.length == 0) {
                            document.getElementById(`b${a - 200}`).style.backgroundColor = 'green';
                        }
                    }

                    if (aup !== 700 && document.getElementById(`b${a - 100}`).innerText.length == 0) {
                        document.getElementById(`b${a - 200}`).style.backgroundColor =  'green';
                    }

                    if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0 ) {
                        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green';
                    }

                    if (aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green';
                    }
                }

            }

            // King

            if (item.innerText == `${toggle}king`) {
                item.style.backgroundColor = 'blue';
                // wking move foreward and bking move back
                if (aup < 800) {
                    document.getElementById(`b${a + 100}`).style.backgroundColor = 'green';
                }
                // wking move back and Wking move foreward
                if (aup > 100) {
                    document.getElementById(`b${a - 100}`).style.backgroundColor = 'green';
                }

                // Wking move right and Bking move left
                if (aside < 8) {
                    document.getElementById(`b${a + 1}`).style.backgroundColor = 'green';
                }

                // Wking move left and Bking move right
                if (aside > 1) {
                    document.getElementById(`b${a - 1}`).style.backgroundColor = 'green';
                }

                if (aup < 800 && aside > 1) {
                    document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green';
                }
                
                if (aup < 800 && aside < 8) {
                    document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green';
                }

                if (aup > 100 && aside > 1) {
                    document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green';
                }

                if (aup > 100 && aside < 8) {
                    document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green';
                }

                if(whiteCastleChance == true && a == 105 && document.getElementById('b106').innerText == '' && document.getElementById('b107').innerText == '' && document.getElementById('b108').innerText == 'Wrook') {
                    document.getElementById(`b107`).style.backgroundColor = 'aque';
                }

                if(whiteCastleChance == true && a == 105 && document.getElementById('b104').innerText == '' && document.getElementById('b103').innerText == '' && document.getElementById('b102').innerText == '' && document.getElementById('b101').innerText == 'Wrook') {
                    document.getElementById(`b103`).style.backgroundColor = 'aque';
                }

                if(blackCastleChance == true && a == 805 && document.getElementById('b806').innerText == '' && document.getElementById('b807').innerText == '' && document.getElementById('b808').innerText == 'Brook') {
                    document.getElementById(`b807`).style.backgroundColor = 'aque';
                }

                if(whiteCastleChance == true && a == 805 && document.getElementById('b804').innerText == '' && document.getElementById('b803').innerText == '' && document.getElementById('b802').innerText == '' && document.getElementById('b801').innerText == 'Brook') {
                    document.getElementById(`b803`).style.backgroundColor = 'aque';
                }

            }

            // rook

            if(item.innerText == `${toggle}rook`) {
                item.style.backgroundColor = 'blue';

                // Wrook move foreward and Brook move back
                // using for loop for items go till the end
                for (let i = 1; i < 9; i++) {
                    if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText == 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green';
                    }
                    else if((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green';
                        break
                    }
                }

                // Wrook move back and Brook move foreward
                for (let i = 1; i < 9; i++) {
                    if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText == 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green';
                    }
                    else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green';
                        break
                    }
                }

                // wrook move left 
                for (let i = 1; i < 9; i++) {
                    if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText == 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green';
                    }
                    else if((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText !== 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green';
                        break;
                    }
                }

                for (let i = 1; i < 9; i++) {
                    if ((a - i) > aup && document.getElementById(`b${a - i}`).innerText == 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green';
                    }
                    else if((a - i) < (aup ) && document.getElementById(`b${a - i}`).innerText !== 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green';
                        break;
                    }
                }
            }

            // bishop

            if (item.innerText == `${toggle}bishop`) {
                item.style.backgroundColor = 'blue';

                // wbishop move foreward and right
                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < (9 - aside) && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green';
                    }
                    else if(i < (900 - aup) / 100 && i < (9 - aside) && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green';
                        break;
                    }
                }

                // wrook move foreward but left
                for (let i = 1; i < 9; i++) {
                    if(i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green';
                    }
                    else if(i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green';
                        break;
                    }
                }

                // wrook move back but right
                for (let i = 1; i < 9; i++) {
                    if (i < (aup) / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                    }
                    else if (i < (aup) / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {
                    if (i < (aup) / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                    }
                    else if (i < (aup) / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                        break
                    }
                }
            }

            // Queen

            if(item.innerText == `${toggle}queen`) {
                item.style.backgroundColor = 'blue';

                for(let i = 1; i < 9; i++) {
                    if((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green';
                    }
                    else if((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green';
                        break
                    }
                }

                for(let i = 1; i < 9; i++) {
                    if((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green';
                    }
                    else if((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green';
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {
                    if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText == 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                    }
                    else if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText !== 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {
                    if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText == 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                    }
                    else if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText !== 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < (9 - aside) && document.getElementById(`b${a + i * 100 + i}`).innerText == 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                    }
                    else if (i < (900 - aup) / 100 && i < (9 - aside) && document.getElementById(`b${a + i * 100 + i}`).innerText !== 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText == 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                    }
                    else if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText !== 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText == 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                    }
                    else if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText !== 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < (9 - aside) && document.getElementById(`b${a - i * 100 + i}`).innerText == 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                    }
                    else if (i < aup / 100 && i < (9 - aside) && document.getElementById(`b${a - i * 100 + i}`).innerText !== 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                        break
                    }
                }
            }

            // Knight

            if (item.innerText == `${toggle}knight`) {

                if (aup < 800 && aside < 7) {
                    document.getElementById(`b${a + 100 + 2}`).style.backgroundColor = 'green';
                }
                if (aup < 800 && aside > 2) {
                    document.getElementById(`b${a + 100 - 2}`).style.backgroundColor = 'green';
                }
                if (aup < 700 && aside < 8) {
                    document.getElementById(`b${a + 200 + 1}`).style.backgroundColor = 'green';
                }
                if (aup < 700 && aside > 1) {
                    document.getElementById(`b${a + 200 - 1}`).style.backgroundColor = 'green';
                }
                if (aup > 200 && aside < 7) {
                    document.getElementById(`b${a - 100 + 2}`).style.backgroundColor = 'green';
                }
                if (aup > 200 && aside > 2) {
                    document.getElementById(`b${a - 100 - 2}`).style.backgroundColor = 'green';
                }
                if (aup > 200 && aside < 8) {
                    document.getElementById(`b${a - 200 + 1}`).style.backgroundColor = 'green';
                }
                if (aup > 200 && aside > 1) {
                    document.getElementById(`b${a - 200 - 1}`).style.backgroundColor = 'green';
                }
            }

        }
        
        // Toggling the turn
        // white has started with tog = 1,3,5,...
        if (tog % 2 !== 0) {
            document.getElementById('tog').innerText = "White's Turn"
            whosTurn('W')
            // doesnt let you click black items and only items start with w
        }
        // black stars with tog = 2,4,6,...
        if (tog % 2 == 0) {
            document.getElementById('tog').innerText = "Black's Turn"
            whosTurn('B')
        }
        // 
        teammate();



    })
})
