// https://teachablemachine.withgoogle.com/models/YIHH7KFr7/ //
function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/YIHH7KFr7/model.json",modelready);
    
    }
    function modelready(){
    classifier.classify(gotResults);
    
    }
    function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
    
 random_number_r= Math.floor(Math.random()*255)+1;
random_number_g= Math.floor(Math.random()*255)+1;
random_number_b= Math.floor(Math.random()*255)+1;
document.getElementById("result_label").innerHTML="i can hear :"+results[0].label;
document.getElementById("result_confidence").innerHTML="Accuracy:"+(results[0].confidence*100).toFixed(2)+"%";
document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
img1=document.getElementById("img1");
img2=document.getElementById("img2");


if( results[0].label=="cat"){
    img1.src="cat gif.gif";
    img2.src="dog.jpg";
}
else{
img1.src="cat.jpg";
    img2.src="dog gif.gif ";
}
}