//your JS code here. If required.
let button =document.querySelector("#submit");
button.addEventListener("click",()=>{
	let container=document.querySelector(".form-group");
	let title=document.querySelector(".title").value;
	let Author=document.querySelector(".author").value;
	let ISBN=document.querySelector(".isbn").value;

	 if (!document.querySelector("#book-list")){
		container.innerHTML+=`
<table style="width: 100%; border-collapse: collapse; text-align: left;">
    <thead>
        <tr style="background-color: #f4f4f4;">
            <th style="width: 40%; padding: 10px; border: 1px solid #ddd;">Title</th>
            <th style="width: 30%; padding: 10px; border: 1px solid #ddd;">Author</th>
            <th style="width: 30%; padding: 10px; border: 1px solid #ddd;">ISBN#</th>
			
        </tr>
    </thead>
    <tbody id="book-list">
        
    </tbody>
</table>
` ;
	 }

let list=document.querySelector("#book-list");
	list.innerHTML=`
	 <tr>
            <td style="padding: 10px; border: 1px solid #ddd;">${title}</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${Author}</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${ISBN}</td>
        </tr>
	`;
	 document.querySelector(".title").value = "";
    document.querySelector(".author").value = "";
    document.querySelector(".isbn").value = "";
})
