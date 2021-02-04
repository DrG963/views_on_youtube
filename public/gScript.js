//INIT firebase

var config = {
  apiKey: "AIzaSyAS7sS3JRQCvrcecgdS9sTgFRGxVjGKNAA",
  authDomain: "views-a300f.firebaseapp.com",
  databaseURL: "https://views-a300f.firebaseio.com/",
  projectId: "views-a300f",
  storageBucket: "views-a300f.appspot.com",
  messagingSenderId: "56502957151"
};

firebase.initializeApp(config);
//initialize a database called names on the fly
var entries = firebase.database().ref('entries');

//END INIT FIREBASE

function validateRecaptcha() {
    var response = grecaptcha.getResponse();
    if (response.length === 0) {
        //alert("not validated");
        return false;
    } else {
        //alert("validated");
        return true;
    }
}

$("#mobileBody").hide();
$("#deskBody").hide();

getDimensions = function(){
  screenHeight = $(window).height();
  screenWidth = $(window).width();
}
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;
}
if(isMobile === true){
  $("#mobileBody").show();
  document.getElementById("mobileButtons").innerHTML = '<form style="display:block;width:auto;margin-left:auto;margin-right:auto;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"> <input style="display: block; margin: 0 auto;" type="hidden" name="cmd" value="_s-xclick"><table style="display: block; margin: 0 auto;"><tr style="display: block; margin: 0 auto;"><td  style="display: block; margin: 0 auto;"><input style="display: block; margin: 0 auto;" type="hidden" name="on0" value="Prices"><p style="color:white;font-size:18px;font-weight:600;padding:10px;text-align:center;">Prices</p></td></tr><tr style="display: block; margin: 0 auto;"><td style="display: block; margin: 0 auto;"><select  id="encPayment" style="display: block; margin: 0 auto;" name="os0"><option value="500 Views">500 Views $8.00 USD</option><option value="1000 Views">1000 Views $15.00 USD</option><option value="2000 Views">2000 Views $25.00 USD</option><option value="5000 Views">5000 Views $50.00 USD</option> </select></td></tr></table> <input style="display: block; margin: 0 auto;" type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----"> <input style="display: block; margin: 0 auto;" type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"> <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
  document.getElementById("insertFormMobile").innerHTML = '<form class="theForm" onsubmit="return validateRecaptcha();"><input id="name" name="Name" placeholder="Your Name" required><input id="package" name="Package" placeholder="Requested Package" required><h2 class="fitMiddle big allFields">Fill Out All Fields</h2><input id="email" name="Email" placeholder="Your E-Mail Address" required><input id="video" name="Video" placeholder="Your Video URL" required><h2 class="fitMiddle big success">Success!<br>You&#39;ll be hearing from us</h2><div class="text-xs-center"><div class="g-recaptcha" data-sitekey="6Lf9XswUAAAAAFKhAaz0oNF-M34yiAKUprS2MvhX"></div></div><h2 class="fitMiddle big recap">Validate Re-Captcha</h2><button onclick="getter()" type="submit" value="Submit" id="submit">Submit</button></form>';
}else{
  $("#deskBody").show();
  document.getElementById("desktopButtons").innerHTML = '<form style="display:block;width:auto;margin-left:auto;margin-right:auto;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"> <input style="display: block; margin: 0 auto;" type="hidden" name="cmd" value="_s-xclick"><table style="display: block; margin: 0 auto;"><tr  style="display: block; margin: 0 auto;"><td  style="display: block; margin: 0 auto;"><input style="display: block; margin: 0 auto;" type="hidden" name="on0" value="Prices"><p style="color:white;font-size:18px;font-weight:600;padding:10px;text-align:center;">Prices</p></td></tr><tr style="display: block; margin: 0 auto;"><td style="display: block; margin: 0 auto;"><select id="encPayment" style="display: block; margin: 0 auto;" name="os0"><option value="500 Views">500 Views $8.00 USD</option><option value="1000 Views">1000 Views $15.00 USD</option><option value="2000 Views">2000 Views $25.00 USD</option><option value="5000 Views">5000 Views $50.00 USD</option> </select></td></tr></table> <input style="display: block; margin: 0 auto;" type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----"> <input style="display: block; margin: 0 auto;" type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"> <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
  document.getElementById("insertFormDesktop").innerHTML = '<form class="theForm" onsubmit="return validateRecaptcha();"><input id="name" name="Name" placeholder="Your Name" required><input id="package" name="Package" placeholder="Requested Package" required><h2 class="fitMiddle big allFields">Fill Out All Fields</h2><input id="email" name="Email" placeholder="Your E-Mail Address" required><input id="video" name="Video" placeholder="Your Video URL" required><h2 class="fitMiddle big success">Success!<br>You&#39;ll be hearing from us</h2><div class="text-xs-center"><div class="g-recaptcha" data-sitekey="6Lf9XswUAAAAAFKhAaz0oNF-M34yiAKUprS2MvhX"></div></div><h2 class="fitMiddle big recap">Validate Re-Captcha</h2><button onclick="getter()" type="submit" value="Submit" id="submit">Submit</button></form>';
}

function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}

$(".theForm").submit(function(e) {
    e.preventDefault();
});

// set prices and styles

$(".packOne").click(function(){
  $(".packOne").addClass('activated');
  purchaseCode = 8;
  $(".packTwo").removeClass('activated');
  $(".packThree").removeClass('activated');
  $(".packFour").removeClass('activated');
  document.getElementById("encPayment").selectedIndex = 0;
});
$(".packTwo").click(function(){
  $(".packTwo").addClass('activated');
  purchaseCode = 15;
  $(".packOne").removeClass('activated');
  $(".packThree").removeClass('activated');
  $(".packFour").removeClass('activated');
  document.getElementById("encPayment").selectedIndex = 1;
});
$(".packThree").click(function(){
  $(".packThree").addClass('activated');
  purchaseCode = 25;
  $(".packOne").removeClass('activated');
  $(".packTwo").removeClass('activated');
  $(".packFour").removeClass('activated');
  document.getElementById("encPayment").selectedIndex = 2;
});
$(".packFour").click(function(){
  $(".packFour").addClass('activated');
  purchaseCode = 50;
  $(".packTwo").removeClass('activated');
  $(".packThree").removeClass('activated');
  $(".packOne").removeClass('activated');
  document.getElementById("encPayment").selectedIndex = 3;
});

// END set prices

//BLOCK FOR form

name ="";
package ="";
email=""
video=""

getter = function(){
	name = $('#name').val();
	package = $('#package').val();
	email = $('#email').val();
	video = $('#video').val();

  if(name !== "" && package !== "" && email !== "" && video !== ""){
    if(validateRecaptcha() === true){
      $(".recap").hide();
      $(".allFields").hide();
    entries.push({name: name, package: package, email: email, video: video, is_approved: "0"});
    $('#submit').hide();
    $(".success").show();
    setTimeout(function(){ $('#submit').show(); }, 2000);
    name = $('#name').val("");
  	package = $('#package').val("");
  	email = $('#email').val("");
  	video = $('#video').val("");
  }else{
    $(".recap").show();
  }}else{
    //console.log("Fill out all fields pls..")
    $(".allFields").show();
  }
}//END function

//END BLOCK FOR FORM
$(".success").hide();
$(".allFields").hide();
$(".recap").hide();
