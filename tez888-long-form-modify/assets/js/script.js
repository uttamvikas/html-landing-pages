let signUpUrl = 'https://tez888.in';
function limit(element)
{
    var max_chars = 10;
        
    if(element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
    }
}
const characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";

function generateUniqueUsername(length) {
    let result = "Guest";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; SameSite=None; Secure; path=/";
  }
  
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  function eraseCookie(name) {
    document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }
$(document).ready(function () {
    $('#mobile_number').bind("cut copy paste", function (e) {
        e.preventDefault();
    });

    //enable req otp button if 10 digit no
    $('.signin-mob-val').on('keyup', function(e) {
        var $this = $(this); 
        if ($this.val().trim().length >= 10) {
            $('.request_otp_join').prop('disabled', false);
        }else{
            $('.request_otp_join').prop('disabled', true);
        }     
    });
        
    $('#mobile_number').on('input', function() {
        this.value = this.value.replace(/[^0-9]/g, ''); // Replace non-numeric characters with an empty string
    });

  const joinInputs = document.querySelectorAll('.otp2');
  const lastInputs = joinInputs[joinInputs.length - 1];
  
  joinInputs.forEach((input, index) => {
    const nextInput = joinInputs[index + 1];
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Backspace') {
        event.preventDefault();
        const previousInput = joinInputs[index - 1];
       // previousInput.value = '';
        previousInput.focus();
        
      }
    });
  
    input.addEventListener('input', () => {
      if (input.value.length === input.maxLength) {
        if (nextInput) {
          nextInput.focus();
          nextInput.selectionStart = nextInput.selectionEnd = 0;
        } else {
          lastInputs.focus();
        }
      }
    });
  });

  $('#mobile_number').on('input', function () {
    $('#mobile_number').parent().removeClass('errorBorder');
    this.value = this.value.replace(/[^0-9]/g, ''); // Replace non-numeric characters with an empty string
  });
  $('.otp2').on('input', function () {
    this.value = this.value.replace(/[^0-9]/g, ''); // Replace non-numeric characters with an empty string
  });

  $('.otp2').keydown(function(e) {
    if (e.keyCode === 190 || e.keyCode === 110) {
      e.preventDefault();
      return false;
    }
  });

  $('.otp2').keydown(function(e) {
    if (e.keyCode === 190 || e.keyCode === 110) {
      e.preventDefault();
      return false;
    }
  });
  // function to check OTP input and enable/disable verify button
  function checkOtpInputbox() {
    var otpBoxes = $('.otp2');
    var isOtpFilled = true;

    for (var i = 0; i < otpBoxes.length; i++) {
      if (!otpBoxes[i].value) {
        isOtpFilled = false;
        break;
      }
    }
    if (isOtpFilled) {
      $('#verifyCampaignJoinNowOTP').prop('disabled', false);
      $('#verifyCampaignJoinNowOTP').removeClass("disable-verify-otp");
    } else {
      $('#verifyCampaignJoinNowOTP').prop('disabled', true);
      $('#verifyCampaignJoinNowOTP').addClass("disable-verify-otp");
    }
  }

  // event listener for OTP input fields
  $('.otp2').on('keydown input', function (event) {

    var key = event.key;
    var input = $(this);

    if (key === "Backspace") {
      event.preventDefault();
      input.val('');
      if (input.prev().length) {
        input.prev().focus();
      }
    } else if (key === "ArrowLeft") {
      if (input.prev().length) {
        input.prev().focus();
      }
    } else if (key === "ArrowRight") {
      if (input.next().length) {
        input.next().focus();
      }
    } else if (/^\d$/.test(key)) {
      event.preventDefault();
      input.val(key);
      if (input.next().length) {
        input.next().focus();
      }

    } else if (key === "v" && event.ctrlKey) {
      // handle paste event
      setTimeout(function () {
        // var value = input.val().trim().slice(0, 6);
        var value = input.val().replace(/\D/g,'').slice(0, 6); 
        input.val(value);
        if (value.length === 6 && input.next().length) {
          input.next().focus();
        }
      }, 0);
    }

    checkOtpInputbox();
  });
  
///shift tab
function readKey(el) {
    if (el.value.length > 1) {
      el.value = el.value[el.value.length - 1];
    }
    try {
      if (el.value == null || el.value == "") {
        this.foucusOnInput(el.previousElementSibling);
      } else {
        this.foucusOnInput(el.nextElementSibling);
      }
    } catch (e) {

    }
  }
  
  function foucusOnInput(ele) {
    ele.focus();
    let val = ele.value;
    ele.value = "";
    // ele.value = val;
    setTimeout(() => {
      ele.value = val;
    })
  }
});
$(function () {
  var enterOTPJoinPressed = false; 
    $('input[name="mobile_number"]').keydown(function (event) {
        if (event.keyCode == 13 && !enterOTPJoinPressed) {
            otpSend();
            enterOTPJoinPressed = true
            event.preventDefault();
            return false;
        }
    });

    $('.otp2').keydown(function (event) {
      if (event.keyCode == 13) {
        const otpInputs = document.querySelectorAll('.otp2');
        const otpValue = Array.from(otpInputs).map(input => input.value.trim()).join('');
        if (otpValue.length === 6) {
          otpVerify();
          event.preventDefault();
          return false;
        }
      }
    });
    
    $("#mobile_number").on("keypress keyup blur", function (event) {
        $(this).val($(this).val().replace(/[]/));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });

    $('.join_otp input[type="number"]').keydown(function (event) {
      if (event.keyCode == 13) {
        if ((event.which < 48 || event.which > 57)) 
          {
            event.preventDefault();
          }
        otpVerify();
      }
    });

});

function checkOtpInputbox() {
  var otpBoxes = $('.otp2');
  var isOtpFilled = true;

  for (var i = 0; i < otpBoxes.length; i++) {
    if (!otpBoxes[i].value) {
      isOtpFilled = false;
      break;
    }
  }

  if (isOtpFilled) {
    $('#verifyCampaignJoinNowOTP').prop('disabled', false);
  } else {
    $('#verifyCampaignJoinNowOTP').prop('disabled', true);
  }
}

var interval;
var counter;

function timer() {
    clearInterval(interval);
    counter = 60;
    interval = setInterval(function () {
        counter--;
        $('#resendhide').css("display", 'block');
        //new
        $('#resendhide').css("cursor", 'none');
        $('#resendhide').removeAttr('onclick', 'resendOtp()');
        // Display 'counter' wherever you want to display it.
        if (counter <= 0) {
            clearInterval(interval);
            //new
            $('#resendhide').css("cursor", '');
            var element1 = $('#resendhide');
            element1.attr('onclick', 'resendOtp()');
            $('#timecount').html('');
            //old
            // $('#resendhide').css("display", 'none');
            // $('#timecount').html('<a href="#" class="btn text-danger border-0 resend-otp" onclick="resendOtp();">Resend OTP</a>');
            return;
        } else {
            $('#timecount').text(counter);
        }
    }, 1000);

}
$(".back_join_page").on('click', function () {
    $(".join_otp").hide(300, "linear");
    clearInterval(interval);
    $('.otp_inputt1').val("");
    counter = 60;
    $('#timecount').html('');
    $('#join-wrong-otp-error').html('');
    $(".join_send_otp").show(300, "linear");
});

async function otpSend() {
    var countrycode =  "+91";
    var mobnum = $('#mobile_number').val();
    var phoneNumber = countrycode + $('#mobile_number').val();
    var mobnumb = $('#mobile_number').val();

        if (mobnumb.length > 10 || mobnumb.length < 10) {
            $('.join_error').text('Invalid Mobile Number. Please Enter 10 Digit Mobile Number.').css({
                "color": "red",
                "fontSize": "12px",
                "font-weight": "bolder"
            });
            $('#mobile_number').parent().addClass('errorBorder');
            return;
        }
        //check 1st digit Mobile number is not 1 to 5.
        var firstDigit = mobnumb.charAt(0);
        if(firstDigit < 6){
            $(".join_error").text("Invalid Mobile Number. Please Enter Correct Mobile Number.").css({
                "color": "red",
                "fontSize": "12px",
                "font-weight": "bolder",
            });
            $('#mobile_number').parent().addClass('errorBorder');
            return;
        }
    
    $("#loader").css("display", "flex");
    $('.usermobilenumber').html(mobnum);
    $("#loader").css("display", "flex");
    isSasEnable = await getOtpType();
    if(isSasEnable){
      sendSasOTPForJoin(phoneNumber, "send");
    }else{
      var appVerifier = window.recaptchaVerifier;
      sendFirbaseOtpForJoin(phoneNumber, appVerifier);
    }

}

function sendSasOTPForJoin(phoneNumber, type){
  var url = signUpUrl+'/api/v1/send-otp';
  $.ajax({
    type: 'POST',
    url: url,
    headers: {
        'accept': 'application/json',
      },
    data: {
        'phoneNumber': phoneNumber
    },
    success: function (data) {
      if(data.statusCode ==200){
        if(type == "send"){
          showJoinOTPModel(1);
        }else{
          showJoinOTPModel(2)
        }
      }else{
        $("#loader").hide();
        $(".request_otp_join").prop("disabled", false);
        $('.join_error').text(data.response.message).css({
          "color": "red",
          "fontSize": "12px",
          "font-weight": "bolder"
        });
      }
    },error:function(data){
      $("#loader").hide();
      $(".request_otp_join").prop("disabled", false);
      $('.join_error').text(data.response.message).css({
        "color": "red",
        "fontSize": "12px",
        "font-weight": "bolder"
      });
    }
  });
}

function sendFirbaseOtpForJoin(phoneNumber, appVerifier){
  firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier).then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      showJoinOTPModel(1); 

  }).catch((error) => {
      $("#loader").css("display", "none");
      if (error.code == 'auth/too-many-requests') {
          $(".join_otp").hide(300, "linear");
          $(".join_send_otp").show(300, "linear");
          $('.join_error').text('To Many Attempts, Please Try Again Later').css({
              "color": "red",
              "fontSize": "12px",
              "font-weight": "bolder"
          });
          alertify.notify('To Many Attempts, Please Try Again Later', 'error', 15);
          alertify.set('notifier', 'position', 'top-right');
    
      } else if (error.code == 'auth/invalid-phone-number') {
          $("#loader").css("display", "none");
          $('.join_error').text('Invalid phone number, Try again').css({
              "color": "red",
              "fontSize": "12px",
              "font-weight": "bolder"
          });
          $('#mobile_number').parent().addClass('errorBorder');
      } else if (error.code == 'auth/quota-exceeded') {
          $("#loader").css("display", "none");
          $('.join_error').text('QUOTA EXCEEDED').css({
              "color": "red",
              "fontSize": "12px",
              "font-weight": "bolder"
          });
      }

  });
}

function showJoinOTPModel(type){
  if(type == 1){
    timer();
    $('.otp_inputt1').removeClass('errorBorder');
    $("#loader").css("display", "none");
    alertify.notify('OTP has been sent succesfully!', 'success', 7);
    alertify.set('notifier', 'position', 'top-right');
    $(".join_send_otp").hide(300, "linear");
    $(".join_otp").show(300, "linear");
    $("input[name='join-1']").focus();
    $('#verifyCampaignJoinNowOTP').attr("disabled", true);  
  }  else {
    $('.wrong-otp-error').text('');
    $('.otp_inputt1').val("");
    timer();
    $("#loader").hide();
    alertify.notify('OTP resent succesfully.', 'success', 5);
    alertify.set('notifier', 'position', 'top-right');
  }
}

async function resendOtp() {
    $("#loader").css("display", "flex");
    var countrycode = "+91";
    var phoneNumber = countrycode + $('#mobile_number').val();
    $("#loader").css("display", "flex");
    isSasEnable = await getOtpType();
    if(isSasEnable){
      sendSasOTPForJoin(phoneNumber, 'resend');
    }else{
      var appVerifier = window.recaptchaVerifier;
      getFirbaseResendOtp(phoneNumber, appVerifier);
    }
}
function getFirbaseResendOtp(phoneNumber, appVerifier){
  firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      showJoinOTPModel(2);
    }).catch((error) => {
        $("#loader").hide();
        if (error.code == 'auth/too-many-requests') {
            $(".join_otp").hide(300, "linear");
            $(".join_send_otp").show(300, "linear");
            $('.join_error').text('To Many Attempts, Please Try Again Later').css({
                "color": "red",
                "fontSize": "12px",
                "font-weight": "bolder"
            });
            alertify.notify('To Many Attempts, Please Try Again Later', 'error', 5);
            alertify.set('notifier', 'position', 'top-right');
        } else if (error.code == 'auth/invalid-phone-number') {
            $("#loader").hide();
            $('.join_error').text('Mobile Number Invalid Format.').css({
                "color": "red",
                "fontSize": "12px",
                "font-weight": "bolder"
            });
        }
    });
}

async function otpVerify() {
    $("#loader").css("display", "flex");
    var otp = [];

    $(".otp_inputt1").each(function () {
        otp.push($(this).val());
    });

    var code = otp.join("");
    if (code == '') {
        $("#loader").hide();
        $('#join-wrong-otp-error').text('OTP is empty,please enter a valid OTP').css({
            "color": "red",
            "fontSize": "12px",
            "font-weight": "bolder"
        });
    }
    isSasEnable = await getOtpType();
    if(isSasEnable){
      var countrycode = "+91";
      var phoneNumber = countrycode + $('#mobile_number').val();
      verifySasJoinOtp(phoneNumber, code);
    }else{
      verifyFirebaseJoinOTP(code);
    } 
}

function verifyFirebaseJoinOTP(code){
  confirmationResult.confirm(code).then(function (authResult) {

    authResult.user.getIdToken().then(function (idToken) {
        var user = authResult.user;
        var isNewUser = authResult.additionalUserInfo.isNewUser;
        var username = generateUniqueUsername(6);
        var promocode = $('#promocode').val();
        
        $("#loader").css("display", "flex");
        var url = signUpUrl+'/api/v1/signup';
        var stag = getCookie('stag')== null?'':getCookie('stag');
        if(stag != '')
            url = url + '?stag='+stag + '&mob=' + $('#mobile_number').val();
        $.ajax({
            type: 'POST',
            url: url,
            headers: {
                'accept': 'application/json',
              },
            data: {
                'accessToken': idToken,
                'username': username,
                'promo_code': promocode,
                'stag': stag
            },
            success: function (data) {
                $("#loader").hide();
                if (data.success) {
                  onSuccess(data, isNewUser)
                }
            }
        });
    })

  }).catch(function (error) {
    $("#loader").hide();
    if (error.code == 'auth/invalid-verification-code') {
        $('#join-wrong-otp-error').text('Invalid OTP, Try again').css({
            "color": "red",
            "fontSize": "12px",
            "font-weight": "bolder"
        });
        $('.otp_inputt1').addClass('errorBorder');

        clearInterval(interval);
        $(".request_otp_join").attr("disabled", true);
        //new
        $('#resendhide').css("cursor", '');
        var element1 = $('#resendhide');
        element1.attr('onclick', 'resendOtp()');
        $('#timecount').html('');
        //old
        // $('#resendhide').css("display", 'none');
        // $('#timecount').html('<a href="#" class="yellowP text-center resend-otp mt-3 resend-otp" onclick="resendOtp();">Resend OTP</a>');

    }
  });
}

function onSuccess(data, isNewUser){
  eraseCookie('stag')
  eraseCookie('utm_source')
  if(isNewUser){
      setCookie('newSignUp', 'true', 15);
  }
  localStorage.setItem('user-details', JSON.stringify(data));
  localStorage.setItem('user-id', data.userid);
  localStorage.setItem('count', 1);
  localStorage.setItem('loyalty-modal-open', 1);
  window.location.href = window.location = signUpUrl + '/user/deposit';
}

function verifySasJoinOtp(phoneNumber,code){
  var url = signUpUrl+'/api/v1/verify-otp';
  var codeAsInteger = parseInt(code, 10);
  var username = generateUniqueUsername(6);
  var promocode = $('#promocode').val();
  var stag = getCookie('stag') == null ? '' : getCookie('stag');
  if(stag != '')
      url = url + '?stag='+stag + '&mob=' + $('#mobile_number').val();
  $.ajax({
    type: 'POST',
    headers: {
        'accept': 'application/json',
    },
    url: url,
    data: {
        'phoneNumber': phoneNumber,
        'code':codeAsInteger,
        'username': username,
        'promo_code': promocode,
        'stag': stag
    },
    success: function (data) {
      if(data.success){
        var isNewUser = data.isNewUser;
        onSuccess(data, isNewUser)
      }else{
        $('#join-wrong-otp-error').text(data.error).css({
          "color": "red",
          "fontSize": "12px",
          "font-weight": "bolder"
        });
        $('.otp_inputt1').addClass('errorBorder');
        clearInterval(interval);
        $(".request_otp_join").attr("disabled", true);
        //new
        $('#resendhide').css("cursor", '');
        var element1 = $('#resendhide');
        element1.attr('onclick', 'resendOtp()');
        $('#timecount').html('');
      }
    },error:function(data){
      $('#join-wrong-otp-error').text('Invalid OTP, Try again').css({
        "color": "red",
        "fontSize": "12px",
        "font-weight": "bolder"
      });
      $('.otp_inputt1').addClass('errorBorder');

      clearInterval(interval);
      $(".request_otp_join").attr("disabled", true);
      //new
      $('#resendhide').css("cursor", '');
      var element1 = $('#resendhide');
      element1.attr('onclick', 'resendOtp()');
      $('#timecount').html('');
    }
  });
}

function show() {
    var promoinput = document.getElementById("promoinput");
    var promobtn = document.getElementById("promobtn");
    promoinput.style.display = 'block';
    promobtn.style.display = 'none';
 }

function setCookie(name, value, days) {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toGMTString();
	}
	document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function checkKeys(input) {
  if (input.value.length === 1) {
    if($(input).next().length) {
      $(input).next().focus();
    }
  }
  if (input.value.length === 0) {
    if($(input).prev().length) {
      $(input).prev().focus();
    }
  }

  var otpBoxes = $('.otp2');
  var isOtpFilled = true;

  for (var i = 0; i < otpBoxes.length; i++) {
    if (!otpBoxes[i].value) {
      isOtpFilled = false;
      break;
    }
  }

  if (isOtpFilled) {
    $('#verifyCampaignJoinNowOTP').prop('disabled', false);
  } else {
    $('#verifyCampaignJoinNowOTP').prop('disabled', true);
  }
}

$('.otp2').on('keydown input', function (event) {
  var key = event.key;
  var input = $(this);

  if (key === "Backspace") {
    event.preventDefault();
    input.val('');
    if (input.prev().length) {
      input.prev().focus();
    }
  } else if (key === "ArrowLeft") {
    if (input.prev().length) {
      input.prev().focus();
    }
  } else if (key === "ArrowRight") {
    if (input.next().length) {
      input.next().focus();
    }
  } else if (/^\d$/.test(key)) {
    event.preventDefault();
    input.val(key);
    if (input.next().length) {
      input.next().focus();
    }

  } else if (key === "v" && event.ctrlKey) {
    // handle paste event
    setTimeout(function () {
      // var value = input.val().trim().slice(0, 6);
      var value = input.val().replace(/\D/g,'').slice(0, 6); 
      input.val(value);
      if (value.length === 6 && input.next().length) {
        input.next().focus();
      }
    }, 0);
  }

  checkOtpInputbox();
});

$(function(){

  $( "#promocode" ).bind( 'paste',function()
  {
      setTimeout(function()
      { 
         var data= $( '#promocode' ).val() ;
         var dataFull = data.replace(/[^\w\s]/gi, '');
         $( '#promocode' ).val(dataFull);
      });

   });
});

$("#toggleRegisterForm").on('click', function () {
  $(".join_otp").hide(300, "linear");
  $(".join_send_otp").show(300, "linear");
  $(".otp2").val("");
})

$('#promocode').on('input keydown keyup', function () {
  this.value = this.value.replace(/[^a-zA-Z0-9]/g, ""); 
});

$('.otp_inputt1').on('keydown', function() {
  $('.otp_inputt1').removeClass('errorBorder');
});

$('#change-reg-mob-no').on('click', function (e) {
  e.preventDefault();
  $(".otp_inputt1").val('');
  $(".join_otp").hide();
  $('.join_send_otp').show();
  setTimeout(function () {
    $('#mobile_number').focus()
  }, 1000);
  $('#mobile_number').val('');
});

//enable req otp button if 10 digit no
$('.pw-land-mob-no').on('keyup', function(e) {
  var $this = $(this); 
  if ($this.val().trim().length >= 10) {
      $('.ba-otp-btn').prop('disabled', false);
  }else{
      $('.ba-otp-btn').prop('disabled', true);
  }     
});

/* SAS/firebase otp */
let isOtpTypeSAS;
function getOtpType() {
  return new Promise(function (resolve, reject) {
    if (isOtpTypeSAS !== undefined) {
      resolve(isOtpTypeSAS);
      return;
    }
    $.ajax({
      type: 'get',
      headers: {
        'accept': 'application/json',
      },
      url: signUpUrl+'/api/v1/enable-sas',
      data: {},
      success: function (data) {
        if (data.statusCode == 200) {
          isOtpTypeSAS = data.response.isSasEnable;
          resolve(isOtpTypeSAS);
        } else {
          reject("Error in AJAX request");
        }
      },
      error: function () {
        reject("Error in AJAX request");
      }
    });
  });
}