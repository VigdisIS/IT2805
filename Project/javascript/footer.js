let footer = document.createElement("FOOTER");
footer.classList.add("footer");
let footer_table = document.createElement("TABLE");
footer_table.id = "footer_table";
let footer_row = document.createElement("TR");
let footer_column1 = document.createElement("TD");
let footer_column2 = document.createElement("TD");

footer_column1.innerText = "thanksalatte@business.com";
footer_column1.style = "border-right: 2px solid #FFFAF3; padding-right: 15px;";

footer_column2.innerHTML = "Tinghusplassen 24, 7013 Trondheim";
footer_column2.style = "border-left: 2px solid #FFFAF3; padding-left: 15px;";

footer_row.appendChild(footer_column1);
footer_row.appendChild(footer_column2);
footer_table.appendChild(footer_row);
footer.appendChild(footer_table);
document.body.appendChild(footer);
