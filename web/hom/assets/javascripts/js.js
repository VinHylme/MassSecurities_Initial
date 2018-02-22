$( document ).ready(function() {
    var lets = document.getElementsByClassName('box_container actived');
    $("#analog_c_box").click(function(){
        $(lets).removeClass("actived");
        $(this).addClass("actived");
        $(".content_cctv h1").text("Analog CCTV Systems");
        $(".content_cctv p").text("Cameras on an modern analog CCTV system send their video in the traditional base band format over coax or UTP cabling back to a digital video recorder (DVR). Here, video is digitized and stored on hard drives.");
    });

    $("#hd_c_box").click(function(){
      $(lets).removeClass("actived");
      $(this).addClass("actived");
      $(".content_cctv h1").text("Full HD CCTV Systems");
      $(".content_cctv p").text("Professional NVR security kit with 2TB pre-installed hard drive and 8-channel recording system. Supplied with 4 x 1080p HD bullet-style cameras with the ability to add an additional 4 cameras for full 8-camera monitoring. HD cameras have night vision up to 30m and can be used indoors or out. Hard drive can record for up to 48 days non-stop, or even longer with motion detection. Incident footage can be transfered to a thumb drive.")
    });
    $("#dvr_c_box").click(function(){
      $(lets).removeClass("actived");
      $(this).addClass("actived");
      $(".content_cctv h1").text("DVR CCTV Systems");
      $(".content_cctv p").text("A CCTV digital video recorder (or “DVR” for short) is essentially a computer that saves security video images to a hard drive. Most security cameras in use today capture an analog picture. The DVR converts the analog signal to digital and then compresses it.")
    });
    $("#hdd_c_box").click(function(){
      $(lets).removeClass("actived");
      $(this).addClass("actived");
      $(".content_cctv h1").text("HDD CCTV Systems");
      $(".content_cctv p").text("surveillance HDDs are built to record data 24×7 from multiple camera streams or channels. While this increased workload can be mimicked on a desktop-class drive, the device will eventually fail under constant, 24×7 operation, resulting in compromises to both performance (the number of streams supported) and reliability. Video-optimised drives provide reliability beneits far beyond desktop drives, which are designed to run lighter workloads - perhaps only eight hours a day, ive days a week. ")
    });
    $("#ip_c_box").click(function(){
      $(lets).removeClass("actived");
      $(this).addClass("actived");
      $(".content_cctv h1").text("I.P. CCTV Systems");
      $(".content_cctv p").text("An Internet protocol camera, or IP camera, is a type of digital video camera commonly employed for surveillance, and which, unlike analog closed circuit television (CCTV) cameras, can send and receive data via a computer network and the Internet");
    });

    $("#tvi_c_box").click(function(){
      $(lets).removeClass("actived");
      $(this).addClass("actived");
      $(".content_cctv h1").text("TVI CCTV Systems");
      $(".content_cctv p").text("TVI stands for Transport Video Interface and is the latest technology in HD analogue transmission. offers the same plug and play ease of install associated with a standard definition analogue system but is capable of delivering upto 1080p (2.1 megapixel) resolution images. TVI gives HD quality at a cost equivalent to most standard definition analogue systems.")
    })


  /*=----------------------------------------------------=*/

    $("#wireless_c_box").click(function(){
      $("#wireless_c_box").addClass('current');
      $("#wired_c_box").removeClass('current');
      $("#content_alarm").css("visibility","visible");
      $("#content_alarm h1").text("Wireless Alarms");
      $("#content_alarm p").text("The main difference between wireless intruder alarms and hard-wired intruder alarms is that the main component parts of the device communicate via radio signals as opposed to an electrical wired connection. At Keyways, Altrincham we can supply, install and maintain wireless burglar alarms. Wireless burglar alarms are considered to be just as reliable as hard-wired burglar alarms but it important to remember that they more suited to houses and smaller businesses as opposed to large commercial buildings as they have a limited transmission distance. ");
      $("#wireless_1").css("display","block");
      $("#wired_1").css("display","none");
    });
    $("#wired_c_box").click(function(){
      $("#wired_c_box").addClass('current');
      $("#wireless_c_box").removeClass('current');
      $("#content_alarm").css("visibility","visible");
      $("#content_alarm h1").text("Wired Alarms");
      $("#content_alarm p").text("Wired/hybrid alarm systems are suitable for medium to large-scale objects such as commercial buildings, factory floors and offices. In the commercial sector, wired alarms are usually the system of choice, as an installation is generally easier and mostly longer distances have to be covered. Wired/hybrid alarm systems make sense in the private sector when the building is under construction or is being renovated.");
      $("#wired_1").css("display","block");
      $("#wireless_1").css("display","none");

    });

    $(".smallerboxes_fire").click(function(){
      var cu_div = document.getElementsByClassName("smallerboxes_fire main");
      $(this).insertBefore($(cu_div));
      var ned = $(cu_div).removeClass('main');
      $(ned).addClass('small');

      $(this).addClass('main');
      $(this).removeClass('small');

    })

    /*=----------------------------------------------------------------------------=*/
$('select').val('1');
    $("#select").change(function(){
        var val = $(this).val();
       switch(val){
        case "1": $(".control-group").css("display","block");
                  $(".control-group1_2").css("display","none");
                  $(".control-group1_3").css("display","none");
                  $(".control-group1_4").css("display","none");
                  $(".control-group1_5").css("display","none");
                  break;
        case "2": $(".control-group1_2").css("display","block");
                  $(".control-group1_3").css("display","none");
                  $(".control-group1_4").css("display","none");
                  $(".control-group1_5").css("display","none");
                  $(".control-group").css("display","none");
                  break;
        case "3": $(".control-group1_2").css("display","none");
                  $(".control-group1_3").css("display","block");
                  $(".control-group1_4").css("display","none");
                  $(".control-group1_5").css("display","none");
                  $(".control-group").css("display","none");
                  break;
        case "4": $(".control-group1_2").css("display","none");
                  $(".control-group1_3").css("display","none");
                  $(".control-group1_4").css("display","block");
                  $(".control-group1_5").css("display","none");
                  $(".control-group").css("display","none");
                  break;
        case "5": $(".control-group1_2").css("display","none");
                  $(".control-group1_3").css("display","none");
                  $(".control-group1_4").css("display","none");
                  $(".control-group1_5").css("display","block");
                  $(".control-group").css("display","none");
                  break;
      }

    });
    var picker = new Pikaday({field:$('#datepicker')[0]});
    var picker2 = new Pikaday({field:$('#datepicker2')[0]});
    var picker3 = new Pikaday({field:$('#datepicker3')[0]});
    var picker4 = new Pikaday({field:$('#datepicker4')[0]});
    var picker5 = new Pikaday({field:$('#datepicker5')[0]});


    $("#a_1").click(function(){
      $("select").val(2).change();
    });
    $("#an_1").click(function(){
      $("select").val(1).change();
    });
    $("#f_1").click(function(){
      $("select").val(3).change();
    });
    $("#m_2").click(function(){
      $("select").val(4).change();
    });
    $("#m_1").click(function(){
      $("select").val(5).change();
    });

    // Get the modal
    var modal = document.getElementById('mymodal');

    // Get the button that opens the modal
    var btn = document.getElementById("aboutus_l");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
