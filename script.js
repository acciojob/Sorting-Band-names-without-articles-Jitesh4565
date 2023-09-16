//your code here
let regexp = /\bthe\b|\ban\b|\ba\b/gi;
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let articlelessarr=[];
let mp={};
for(let i=0;i<arr.length;i++)
	{
		let articlelessItem=arr[i].replace(regexp,"").trim();
		articlelessItem=articlelessItem.replace(/ /g," ");
		articlelessarr.push(articlelessItem);
		mp[articlelessItem]=arr[i];
	}
articlelessarr.sort();
let ans[];
for(let i of articlelessarr)
	{
		ans.push(mp[i]);
	}
console.log(ans);