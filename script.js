let a = new Promise((resolve)=>{
	setTimeout(()=>{
		resolve(2);
	},2000);
})
let b = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(1)
    },1000)
});
let c = new Promise((resolve)=>{
    setTimeout(() => {
        resolve(3);
    }, 3000);
})
let x = Promise.all([a,b,c]);
const tbody = document.querySelector("tbody");


tbody.innerHTML = `<tr>
			   Loading...
		  </tr>`
x.then((arr)=>{
	tbody.innerHTML = ""
   let totaltime = 0;
   for(let i = 0; i<arr.length; i++){
    totaltime=Math.max(arr[i],totaltime);
	const tr = document.createElement("tr");
 	tr.innerHTML = `<td>Promise ${i+1}</td>
           <td>${arr[i]}</td>
 		`
 	tbody.appendChild(tr);
   }
   const tr = document.createElement("tr");
 	tr.innerHTML = `<td>Total</td>
           <td>${totaltime}</td>
 		`
 	tbody.appendChild(tr);
   //tbody.firstElementChild.remove();
})