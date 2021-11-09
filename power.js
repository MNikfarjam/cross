do{
		N=prompt("Enter Number Of Series",1);
		}while(N<=0)
		A=1;
		B=1;
		document.write("<div>")
		for(i=0;i<N;i++){
			document.write("<span>"+B+"</span>");
			A++;
			B=A*B;
			
				
		}
		document.write("</div>")