$(document).ready(function(){
          var str="";var an=0;
          $("button").click(function(){
 				         str=str+$(this).val();
                
 				         $("input").val(str);
           });
        	$("#eb").click(function(){
                 str=$("input").val();
                 var con,position;
                 if((str.charAt(str.length-2)=='*') ||(str.charAt(str.length-2)=='%') ||(str.charAt(str.length-2)=='/' )||(str.charAt(str.length-2)=='+') ||(str.charAt(str.length-2)=='-')||(str.length==0))
                  { 
                    alert("invalide input enter something");
                    if(str.length!=0){
                    str=str.substring(0,str.length-1);
                    $("input").val(str);
                     }
                  }
                else
                {
        		      var ans=eval(str.substring(0,str.length-1));
                   $("#anss").text("Answer ="+ans);
                   str="";
 				           $("input").val(str);
                }
        	});
           $("#c").click(function(){
 				           str="";
 				           $("input").val(str);
                   $("#anss").text("Answer ="+0);
           });
           $("#delete").click(function(){
                str=str.substring(0,str.length-2);
                $("input").val(str);
           });
});