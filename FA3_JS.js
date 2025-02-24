for (let i = 1; i < 4; i++)
{
    rand = Math.floor(Math.random() * 21);
	if (i == 1)
	{
		var num1 = rand;
		console.log("num1 = " + num1);
	}
	if (i == 2)
	{
		var num2 = rand;
		console.log("num2 = " + num2);
	}
	if (i == 3)
	{
		var num3 = rand;
		console.log("num3 = " + num3);
	}
}

if (num1 >= num2 && num1 >= num3)
{
	var highest = num1;
	var school = " elementary ";
}
else if (num2 >= num1 && num2 >= num3)
{
	var highest = num2;
	var school = " high school ";
}
else
{
	var highest = num3;
	var school = " college ";
}

console.log("highest = " + highest);

switch(num1)
{
	case 0:
		var letter = 'A';
        break;
	case 1:
		var letter = 'A';
		break;
	case 2:
		var letter = 'B';
		break;
	case 3:
		var letter = 'C';
		break;
	case 4:
		var letter = 'D';
		break;
	case 5:
		var letter = 'E';
		break;
	case 6:
		var letter = 'F';
		break;
	case 7:
		var letter = 'G';
		break;
	case 8:
		var letter = 'H';
		break;
	case 9:
		var letter = 'I';
		break;
	case 10:
		var letter = 'J';
		break;
	case 11:
		var letter = 'K';
		break;
	case 12:
		var letter = 'L';
		break;
	case 13:
		var letter = 'M';
		break;
	case 14:
		var letter = 'N';
		break;
	case 15:
		var letter = 'O';
		break;
	case 16:
		var letter = 'P';
		break;
	case 17:
		var letter = 'Q';
		break;
	case 18:
		var letter = 'R';
		break;
	case 19:
		var letter = 'S';
		break;
	case 20:
		var letter = 'T';
		break;
}
console.log("letter = " + letter);

time = num2 * num3;
min = time % 60;
hr = (time - min) / 60;
console.log("hour = " + hr + ", min = " + min);

document.write("<hr>ELEMENTARY FRIENDS: " + num1 + "<br>HIGH SCHOOL FRIENDS: " + num2 + "<br>COLLEGE FRIENDS: " + num3);
document.write("<hr>HIGHEST NUMBER: " + highest);
document.write("<hr>LETTER: " + letter);
document.write("<hr>TIME: " + hr + " HOURS " + min + " MINUTES<hr>");
document.write('<p id="text">' + "<br><br>It's a big big big day today! My friends and I went to Tropical Serenade, a resort filled with fun and dreams by the crystal-clear beach.");
document.write('<p id="text">' + " But the thing is... we had a MASSIVE problem. Yikes! We didn't have enough finances and efforts to manage it. On top of that, this was our very first time.");
document.write('<p id="text">' + " For a circle of " + highest + school + " friends, it was definitely tough. Luckily, my friend from class " + letter + " offered help from her rich parents.");
document.write('<p id="text">' + " We immediately entered the resort for " + hr + " hours and " + min + " minutes suited from travel. And yes, we indeed enjoyed our vacay!");
