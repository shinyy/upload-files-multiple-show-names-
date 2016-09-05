$(function(){
		
			
		function change(){
			var obj=document.getElementsByClassName("fileBtn")[0];
			var temp="";
			for(var i=0;i<obj.files.length;i++){
				temp=temp+"<p>"+obj.files[i].name+"<span class='uploadState'>等待上传······</span></p>";
				}
			$(".filesName").html(temp);
			/*if(temp!=""){
				$(".uploadState").show();
				}else{
					$(".uploadState").hide();
					}*/
			};
			
		$(".fileBtn").change(function(){
			change();
			})
			
		$(".btn1").click(function(){
			$(".fileBtn").click();
			})
	})
