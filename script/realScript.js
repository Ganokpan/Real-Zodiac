// Variables
// Today Date
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + "-" + mm + "-" + dd;

// Birthday
var b_day;
var b_day_mmdd;
var b_day_name;

// Zodiac Sign
var z_sign;

// Calculated Sign
var cal;

// Zenith
var z_star;

// Time
var time; // Format 24 Hours
var forgot;

// Fade in texts
$("#skip01").fadeIn(500);
$("#t1").fadeIn(3000);
$("#t1").delay(1000).fadeOut(3000);
$("#t2").delay(7000).fadeIn(3000);
$("#t2").delay(1000).fadeOut(3000);
$("#t3").delay(14000).fadeIn(3000);
$("#t3").delay(1000).fadeOut(3000);
$("#t4").delay(21000).fadeIn(3000);
$("#t4").delay(1000).fadeOut(3000);
$("#skip01, #darken").delay(24000).fadeOut(3000);
$("#t5").delay(28000).fadeIn(3000);

// First Submit
$("#first_submit").click(function () {
  // Birthday
  const monthNames = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤศภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];
  var b_day_input = $("#date_input").val();
  b_day = new Date(b_day_input);
  var b_dd = String(b_day.getDate()).padStart(2, "0");
  var b_mm = String(b_day.getMonth() + 1).padStart(2, "0"); //January is 0
  var b_yyyy = b_day.getFullYear();
  b_day = b_yyyy + "-" + b_mm + "-" + b_dd;
  b_day_mmdd = b_mm + "-" + b_dd;
  b_day_name =
    b_dd.replace(/^0+/, "") +
    " " +
    monthNames[parseInt(b_mm) - 1] +
    " " +
    b_yyyy;
  if (b_day > today) {
    $("#error01").fadeIn(500);
    $("#error01").delay(3500).fadeOut(500);
  } else {
    real(b_day_mmdd);
    $("#t5").fadeOut(3000);
    $("#darken").fadeIn(3000);
    $("#t6").delay(3000).fadeIn(3000);
    if (b_day_mmdd >= "03-22" && b_day_mmdd <= "04-21") {
      $("#t6-01").delay(7000).fadeIn(3000);
      z_sign = 1;
    } else if (b_day_mmdd >= "04-22" && b_day_mmdd <= "05-21") {
      $("#t6-02").delay(7000).fadeIn(3000);
      z_sign = 2;
    } else if (b_day_mmdd >= "05-22" && b_day_mmdd <= "06-21") {
      $("#t6-03").delay(7000).fadeIn(3000);
      z_sign = 3;
    } else if (b_day_mmdd >= "06-22" && b_day_mmdd <= "07-21") {
      $("#t6-04").delay(7000).fadeIn(3000);
      z_sign = 4;
    } else if (b_day_mmdd >= "07-22" && b_day_mmdd <= "08-21") {
      $("#t6-05").delay(7000).fadeIn(3000);
      z_sign = 5;
    } else if (b_day_mmdd >= "08-22" && b_day_mmdd <= "09-21") {
      $("#t6-06").delay(7000).fadeIn(3000);
      z_sign = 6;
    } else if (b_day_mmdd >= "09-22" && b_day_mmdd <= "10-21") {
      $("#t6-07").delay(7000).fadeIn(3000);
      z_sign = 7;
    } else if (b_day_mmdd >= "10-22" && b_day_mmdd <= "11-21") {
      $("#t6-08").delay(7000).fadeIn(3000);
      z_sign = 8;
    } else if (b_day_mmdd >= "11-22" && b_day_mmdd <= "12-21") {
      $("#t6-09").delay(7000).fadeIn(3000);
      z_sign = 9;
    } else if (
      (b_day_mmdd >= "12-22" && b_day_mmdd <= "12-31") ||
      (b_day_mmdd >= "01-01" && b_day_mmdd <= "01-20")
    ) {
      $("#t6-10").delay(7000).fadeIn(3000);
      z_sign = 10;
    } else if (b_day_mmdd >= "01-21" && b_day_mmdd <= "02-20") {
      $("#t6-11").delay(7000).fadeIn(3000);
      z_sign = 11;
    } else if (b_day_mmdd >= "02-21" && b_day_mmdd <= "03-21") {
      $("#t6-12").delay(7000).fadeIn(3000);
      z_sign = 12;
    }
    $("#t6-13").delay(11000).fadeIn(3000);
    $("#t6").delay(9000).fadeOut(3000);
    $("#t7, #skip02").delay(18000).fadeIn(3000);
    $("#t7").delay(1000).fadeOut(3000);
    $("#t8").delay(25000).fadeIn(3000);
    $("#t8").delay(1000).fadeOut(3000);
    $("#t9").delay(32000).fadeIn(3000);
    $("#t9").delay(1000).fadeOut(3000);
    $("#t10").delay(39000).fadeIn(3000);
    $("#t10").delay(1000).fadeOut(3000);
    $("#t11").delay(46000).fadeIn(3000);
    $("#t11").delay(1000).fadeOut(3000);
    $("#skip02").delay(30000).fadeOut(3000);
    $("#t12").delay(53000).fadeIn(3000);
  }
});

// Second Submit
$("#second_submit").click(function () {
  // time = $("#time_input").val();
  // if (time == "") {
  //   $("#error02").fadeIn(500);
  //   $("#error02").delay(3500).fadeOut(500);
  // } else {
  //   zenith(cal, time);
  forgot = 0;
  // }
});

// Forgot Time
$("#forgot").click(function () {
  // time = "12:00";
  // zenith(cal, time);
  forgot = 1;
});

// Part 3
$(".toPartThree").click(function () {
  time = $("#time_input").val();
  if (time == "" && forgot == 0) {
    $("#error02").fadeIn(500);
    $("#error02").delay(3500).fadeOut(500);
  } else {
    $("#t12").fadeOut(3000);
    $("#darken, #skip03").fadeIn(3000);
    if (forgot == 0) {
      time = $("#time_input").val();
      zenith(cal, time);
      $("#t13-1").delay(3000).fadeIn(3000);
      $("#t13-1").delay(1000).fadeOut(3000);
    } else {
      time = "12:00";
      zenith(cal, time);
      $("#t13-2").delay(3000).fadeIn(3000);
      $("#t13-2").delay(1000).fadeOut(3000);
    }
    $("#t14").delay(10000).fadeIn(3000);
    $("#t14").delay(1000).fadeOut(3000);
    $("#t15").delay(17000).fadeIn(3000);
    $("#t15").delay(1000).fadeOut(3000);
    $("#t16").delay(24000).fadeIn(3000);
    $("#t16").delay(1000).fadeOut(3000);
    $("#t17").delay(31000).fadeIn(3000);
    $("#t17").delay(1000).fadeOut(3000);
    $("#t18").delay(38000).fadeIn(3000);
    $("#t18").delay(1000).fadeOut(3000);
    $("#skip03").delay(30000).fadeOut(3000);
    $("#spinning").delay(45000).fadeIn(3000);
    $(".box_cal, .sun").delay(48000).fadeIn(1500);
    switch (cal) {
      case 1:
        $(".box_cal")
          .delay(1500)
          .queue(function () {
            $(".box_cal").css({ transform: "rotate(-1080deg)" });
          });
        $("#spinning").delay(10000).fadeOut(3000);
        $("#t19").delay(60000).fadeIn(3000);
        $("#t19-01, #toLast").delay(63000).fadeIn(3000);
        break;
      case 2:
        $(".box_cal")
          .delay(1500)
          .queue(function () {
            $(".box_cal").css({ transform: "rotate(-1110deg)" });
          });
        $("#spinning").delay(10000).fadeOut(3000);
        $("#t19").delay(60000).fadeIn(3000);
        $("#t19-02, #toLast").delay(63000).fadeIn(3000);
        break;
      case 3:
        $(".box_cal")
          .delay(1500)
          .queue(function () {
            $(".box_cal").css({ transform: "rotate(-1140deg)" });
          });
        $("#spinning").delay(10000).fadeOut(3000);
        $("#t19").delay(60000).fadeIn(3000);
        $("#t19-03, #toLast").delay(63000).fadeIn(3000);
        break;
      case 4:
        $(".box_cal")
          .delay(1500)
          .queue(function () {
            $(".box_cal").css({ transform: "rotate(-1170deg)" });
          });
        $("#spinning").delay(10000).fadeOut(3000);
        $("#t19").delay(60000).fadeIn(3000);
        $("#t19-04, #toLast").delay(63000).fadeIn(3000);
        break;
      case 5:
        $(".box_cal")
          .delay(1500)
          .queue(function () {
            $(".box_cal").css({ transform: "rotate(-1200deg)" });
          });
        $("#spinning").delay(10000).fadeOut(3000);
        $("#t19").delay(60000).fadeIn(3000);
        $("#t19-05, #toLast").delay(63000).fadeIn(3000);
        break;
      case 6:
        $(".box_cal")
          .delay(1500)
          .queue(function () {
            $(".box_cal").css({ transform: "rotate(-1230deg)" });
          });
        $("#spinning").delay(10000).fadeOut(3000);
        $("#t19").delay(60000).fadeIn(3000);
        $("#t19-06, #toLast").delay(63000).fadeIn(3000);
        break;
      case 7:
        $(".box_cal")
          .delay(1500)
          .queue(function () {
            $(".box_cal").css({ transform: "rotate(-1260deg)" });
          });
        $("#spinning").delay(10000).fadeOut(3000);
        $("#t19").delay(60000).fadeIn(3000);
        $("#t19-07, #toLast").delay(63000).fadeIn(3000);
        break;
      case 8:
        $(".box_cal")
          .delay(1500)
          .queue(function () {
            $(".box_cal").css({ transform: "rotate(-1290deg)" });
          });
        $("#spinning").delay(10000).fadeOut(3000);
        $("#t19").delay(60000).fadeIn(3000);
        $("#t19-08, #toLast").delay(63000).fadeIn(3000);
        break;
      case 9:
        $(".box_cal")
          .delay(1500)
          .queue(function () {
            $(".box_cal").css({ transform: "rotate(-1320deg)" });
          });
        $("#spinning").delay(10000).fadeOut(3000);
        $("#t19").delay(60000).fadeIn(3000);
        $("#t19-09, #toLast").delay(63000).fadeIn(3000);
        break;
      case 10:
        $(".box_cal")
          .delay(1500)
          .queue(function () {
            $(".box_cal").css({ transform: "rotate(-1350deg)" });
          });
        $("#spinning").delay(10000).fadeOut(3000);
        $("#t19").delay(60000).fadeIn(3000);
        $("#t19-10, #toLast").delay(63000).fadeIn(3000);
        break;
      case 11:
        $(".box_cal")
          .delay(1500)
          .queue(function () {
            $(".box_cal").css({ transform: "rotate(-1380deg)" });
          });
        $("#spinning").delay(10000).fadeOut(3000);
        $("#t19").delay(60000).fadeIn(3000);
        $("#t19-11, #toLast").delay(63000).fadeIn(3000);
        break;
      case 12:
        $(".box_cal")
          .delay(1500)
          .queue(function () {
            $(".box_cal").css({ transform: "rotate(-1410deg)" });
          });
        $("#spinning").delay(10000).fadeOut(3000);
        $("#t19").delay(60000).fadeIn(3000);
        $("#t19-12, #toLast").delay(63000).fadeIn(3000);
        break;
    }
  }
});

// Final Part
$("#toLast").click(function () {
  $("#skip04").fadeIn(3000);
  $(".box_cal").css({ display: "none" });
  $(".sun").css({ display: "none" });
  $("#t19").fadeOut(3000);
  $("#t20").delay(4000).fadeIn(3000);
  $("#t20").delay(1000).fadeOut(3000);
  $("#t21").delay(11000).fadeIn(3000);
  $("#t21").delay(1000).fadeOut(3000);
  $("#t22").delay(18000).fadeIn(3000);
  $("#t22").delay(1000).fadeOut(3000);
  $("#skip04").delay(22000).fadeOut(3000);
  $("#spinning").delay(25000).fadeIn(3000);
  $(".box_zen").delay(28000).fadeIn(1500);
  switch (z_star) {
    case 1:
      $(".box_zen")
        .delay(1500)
        .queue(function () {
          $(".box_zen").css({ transform: "rotate(-1080deg)" });
        });
      $("#spinning").delay(10000).fadeOut(3000);
      $("#t23").delay(40000).fadeIn(3000);
      $("#t23-01, #toSum").delay(43000).fadeIn(3000);
      break;
    case 2:
      $(".box_zen")
        .delay(1500)
        .queue(function () {
          $(".box_zen").css({ transform: "rotate(-1110deg)" });
        });
      $("#spinning").delay(10000).fadeOut(3000);
      $("#t23").delay(40000).fadeIn(3000);
      $("#t23-02, #toSum").delay(43000).fadeIn(3000);
      break;
    case 3:
      $(".box_zen")
        .delay(1500)
        .queue(function () {
          $(".box_zen").css({ transform: "rotate(-1140deg)" });
        });
      $("#spinning").delay(10000).fadeOut(3000);
      $("#t23").delay(40000).fadeIn(3000);
      $("#t23-03, #toSum").delay(43000).fadeIn(3000);
      break;
    case 4:
      $(".box_zen")
        .delay(1500)
        .queue(function () {
          $(".box_zen").css({ transform: "rotate(-1170deg)" });
        });
      $("#spinning").delay(10000).fadeOut(3000);
      $("#t23").delay(40000).fadeIn(3000);
      $("#t23-04, #toSum").delay(43000).fadeIn(3000);
      break;
    case 5:
      $(".box_zen")
        .delay(1500)
        .queue(function () {
          $(".box_zen").css({ transform: "rotate(-1200deg)" });
        });
      $("#spinning").delay(10000).fadeOut(3000);
      $("#t23").delay(40000).fadeIn(3000);
      $("#t23-05, #toSum").delay(43000).fadeIn(3000);
      break;
    case 6:
      $(".box_zen")
        .delay(1500)
        .queue(function () {
          $(".box_zen").css({ transform: "rotate(-1230deg)" });
        });
      $("#spinning").delay(10000).fadeOut(3000);
      $("#t23").delay(40000).fadeIn(3000);
      $("#t23-06, #toSum").delay(43000).fadeIn(3000);
      break;
    case 7:
      $(".box_zen")
        .delay(1500)
        .queue(function () {
          $(".box_zen").css({ transform: "rotate(-1260deg)" });
        });
      $("#spinning").delay(10000).fadeOut(3000);
      $("#t23").delay(40000).fadeIn(3000);
      $("#t23-07, #toSum").delay(43000).fadeIn(3000);
      break;
    case 8:
      $(".box_zen")
        .delay(1500)
        .queue(function () {
          $(".box_zen").css({ transform: "rotate(-1290deg)" });
        });
      $("#spinning").delay(10000).fadeOut(3000);
      $("#t23").delay(40000).fadeIn(3000);
      $("#t23-08, #toSum").delay(43000).fadeIn(3000);
      break;
    case 9:
      $(".box_zen")
        .delay(1500)
        .queue(function () {
          $(".box_zen").css({ transform: "rotate(-1320deg)" });
        });
      $("#spinning").delay(10000).fadeOut(3000);
      $("#t23").delay(40000).fadeIn(3000);
      $("#t23-09, #toSum").delay(43000).fadeIn(3000);
      break;
    case 10:
      $(".box_zen")
        .delay(1500)
        .queue(function () {
          $(".box_zen").css({ transform: "rotate(-1350deg)" });
        });
      $("#spinning").delay(10000).fadeOut(3000);
      $("#t23").delay(40000).fadeIn(3000);
      $("#t23-10, #toSum").delay(43000).fadeIn(3000);
      break;
    case 11:
      $(".box_zen")
        .delay(1500)
        .queue(function () {
          $(".box_zen").css({ transform: "rotate(-1380deg)" });
        });
      $("#spinning").delay(10000).fadeOut(3000);
      $("#t23").delay(40000).fadeIn(3000);
      $("#t23-11, #toSum").delay(43000).fadeIn(3000);
      break;
    case 12:
      $(".box_zen")
        .delay(1500)
        .queue(function () {
          $(".box_zen").css({ transform: "rotate(-1410deg)" });
        });
      $("#spinning").delay(10000).fadeOut(3000);
      $("#t23").delay(40000).fadeIn(3000);
      $("#t23-12, #toSum").delay(43000).fadeIn(3000);
      break;
  }
});

// Summary
$("#toSum").click(function () {
  summary();
  $("#t23").fadeOut(3000);
  $("#skip05").fadeIn(500);
  $("#t24").delay(3000).fadeIn(3000);
  $("#t24").delay(1000).fadeOut(3000);
  $("#t25").delay(8000).fadeIn(3000);
  $("#t25").delay(1000).fadeOut(3000);
  $("#t26").delay(15000).fadeIn(3000);
  $("#t26").delay(1000).fadeOut(3000);
  $("#t27").delay(22000).fadeIn(3000);
  $("#t27").delay(1000).fadeOut(3000);
  $("#t28").delay(29000).fadeIn(3000);
  $("#t28").delay(1000).fadeOut(3000);
  $("#t29").delay(36000).fadeIn(3000);
  $("#t29").delay(1000).fadeOut(3000);
  $("#t30").delay(43000).fadeIn(3000);
  $("#t30").delay(1000).fadeOut(3000);
  $("#skip05").delay(47000).fadeOut(3000);
  $("#summary").delay(50000).fadeIn(3000);
});

// Get Summary
function summary() {
  const zodiacNames = [
    "ราศีเมษ",
    "ราศีพฤษภ",
    "ราศีเมถุน",
    "ราศีกรกฎ",
    "ราศีสิงห์",
    "ราศีกันย์",
    "ราศีตุลย์",
    "ราศีพิจิก",
    "ราศีธนู",
    "ราศีมังกร",
    "ราศีกุมภ์",
    "ราศีมีน",
  ];
  const zenithNames = [
    "กลุ่มดาวราศีกันย์",
    "กลุ่มดาวงู",
    "กลุ่มดาวคนแบกงู",
    "กลุ่มดาวนกอินทรี",
    "กลุ่มดาวม้าบิน",
    "กลุ่มดาวราศีมีน",
    "กลุ่มดาวราศีเมษ",
    "กลุ่มดาวราศีพฤษก",
    "กลุ่มดาวนายพราน",
    "กลุ่มดาวราศีเมถุน",
    "กลุ่มดาวราศีกรกฎ",
    "กลุ่มดาวราศีสิงห์",
  ];
  $("#sum_date").text(b_day_name);
  $("#sum_time").text(time);
  $("#sum_zodiac").text(zodiacNames[z_sign - 1]);
  $("#sum_real").text(zodiacNames[cal - 1]);
  $("#sum_zenith").text(zenithNames[z_star - 1]);
}

// Calculated Zodiac
function real(b_day_mmdd) {
  if (b_day_mmdd >= "04-19" && b_day_mmdd <= "05-13") {
    cal = 1;
  } else if (b_day_mmdd >= "05-14" && b_day_mmdd <= "06-19") {
    cal = 2;
  } else if (b_day_mmdd >= "06-20" && b_day_mmdd <= "07-20") {
    cal = 3;
  } else if (b_day_mmdd >= "07-21" && b_day_mmdd <= "08-09") {
    cal = 4;
  } else if (b_day_mmdd >= "08-10" && b_day_mmdd <= "09-15") {
    cal = 5;
  } else if (b_day_mmdd >= "09-16" && b_day_mmdd <= "10-30") {
    cal = 6;
  } else if (b_day_mmdd >= "10-31" && b_day_mmdd <= "11-22") {
    cal = 7;
  } else if (b_day_mmdd >= "11-23" && b_day_mmdd <= "12-17") {
    cal = 8;
  } else if (
    (b_day_mmdd >= "12-18" && b_day_mmdd <= "12-31") ||
    (b_day_mmdd >= "01-01" && b_day_mmdd <= "01-18")
  ) {
    cal = 9;
  } else if (b_day_mmdd >= "01-19" && b_day_mmdd <= "02-15") {
    cal = 10;
  } else if (b_day_mmdd >= "02-16" && b_day_mmdd <= "03-11") {
    cal = 11;
  } else if (b_day_mmdd >= "03-12" && b_day_mmdd <= "04-18") {
    cal = 12;
  }
  return cal;
}

// Calculate Zenith
function zenith(cal, time) {
  z_star = cal - 1;
  if (time >= "00:00" && time < "02:00") {
    z_star += 1;
  } else if (time >= "02:00" && time < "04:00") {
    z_star += 2;
  } else if (time >= "04:00" && time < "06:00") {
    z_star += 3;
  } else if (time >= "06:00" && time < "08:00") {
    z_star += 4;
  } else if (time >= "08:00" && time < "10:00") {
    z_star += 5;
  } else if (time >= "10:00" && time < "12:00") {
    z_star += 6;
  } else if (time >= "12:00" && time < "14:00") {
    z_star += 7;
  } else if (time >= "14:00" && time < "16:00") {
    z_star += 8;
  } else if (time >= "16:00" && time < "18:00") {
    z_star += 9;
  } else if (time >= "18:00" && time < "20:00") {
    z_star += 10;
  } else if (time >= "20:00" && time < "22:00") {
    z_star += 11;
  } else if (time >= "22:00" && time <= "23:59") {
    z_star += 12;
  }
  if (z_star >= 13) z_star -= 12;
  return z_star;
}

// Buttons

$("#skip01").click(function (e) {
  e.preventDefault();
  $(".textbox, .btn_skip, #darken").stop(true, true).fadeOut(1000);
  $("#t5").delay(1000).fadeIn(3000);
  $("#skip01, #darken").fadeOut(500);
});

$("#skip02").click(function (e) {
  e.preventDefault();
  $(".textbox, .btn_skip, #darken").stop(true, true).fadeOut(1000);
  $("#t12").delay(1000).fadeIn(3000);
  $("#skip02, #darken").fadeOut(500);
});

$("#skip03").click(function (e) {
  e.preventDefault();
  $(".textbox, .btn_skip").stop(true, true).fadeOut(1000);
  $("#skip03").fadeOut(500);
  switch (cal) {
    case 1:
      $("#t19-01").css({ display: "block" });
      $("#t19, #t19-01, #toLast").delay(1000).fadeIn(3000);
      break;
    case 2:
      $("#t19-02").css({ display: "block" });
      $("#t19, #t19-02, #toLast").delay(1000).fadeIn(3000);
      break;
    case 3:
      $("#t19-03").css({ display: "block" });
      $("#t19, #t19-03, #toLast").delay(1000).fadeIn(3000);
      break;
    case 4:
      $("#t19-04").css({ display: "block" });
      $("#t19, #t19-04, #toLast").delay(1000).fadeIn(3000);
      break;
    case 5:
      $("#t19-05").css({ display: "block" });
      $("#t19, #t19-05, #toLast").delay(1000).fadeIn(3000);
      break;
    case 6:
      $("#t19-06").css({ display: "block" });
      $("#t19, #t19-06, #toLast").delay(1000).fadeIn(3000);
      break;
    case 7:
      $("#t19-07").css({ display: "block" });
      $("#t19, #t19-07, #toLast").delay(1000).fadeIn(3000);
      break;
    case 8:
      $("#t19-08").css({ display: "block" });
      $("#t19, #t19-08, #toLast").delay(1000).fadeIn(3000);
      break;
    case 9:
      $("#t19-09").css({ display: "block" });
      $("#t19, #t19-09, #toLast").delay(1000).fadeIn(3000);
      break;
    case 10:
      $("#t19-10").css({ display: "block" });
      $("#t19, #t19-10, #toLast").delay(1000).fadeIn(3000);
      break;
    case 11:
      $("#t19-11").css({ display: "block" });
      $("#t19, #t19-11, #toLast").delay(1000).fadeIn(3000);
      break;
    case 12:
      $("#t19-12").css({ display: "block" });
      $("#t19, #t19-12, #toLast").delay(1000).fadeIn(3000);
      break;
  }
});

$("#skip04").click(function (e) {
  e.preventDefault();
  $(".textbox, .btn_skip").stop(true, true).fadeOut(1000);
  $("#skip04").fadeOut(500);
  switch (z_star) {
    case 1:
      $("#t23-01").css({ display: "block" });
      $("#t23, #t23-01, #toSum").delay(1000).fadeIn(3000);
      break;
    case 2:
      $("#t23-02").css({ display: "block" });
      $("#t23, #t23-02, #toSum").delay(1000).fadeIn(3000);
      break;
    case 3:
      $("#t23-03").css({ display: "block" });
      $("#t23, #t23-03, #toSum").delay(1000).fadeIn(3000);
      break;
    case 4:
      $("#t23-04").css({ display: "block" });
      $("#t23, #t23-04, #toSum").delay(1000).fadeIn(3000);
      break;
    case 5:
      $("#t23-05").css({ display: "block" });
      $("#t23, #t23-05, #toSum").delay(1000).fadeIn(3000);
      break;
    case 6:
      $("#t23-06").css({ display: "block" });
      $("#t23, #t23-06, #toSum").delay(1000).fadeIn(3000);
      break;
    case 7:
      $("#t23-07").css({ display: "block" });
      $("#t23, #t23-07, #toSum").delay(1000).fadeIn(3000);
      break;
    case 8:
      $("#t23-08").css({ display: "block" });
      $("#t23, #t23-08, #toSum").delay(1000).fadeIn(3000);
      break;
    case 9:
      $("#t23-09").css({ display: "block" });
      $("#t23, #t23-09, #toSum").delay(1000).fadeIn(3000);
      break;
    case 10:
      $("#t23-10").css({ display: "block" });
      $("#t23, #t23-10, #toSum").delay(1000).fadeIn(3000);
      break;
    case 11:
      $("#t23-11").css({ display: "block" });
      $("#t23, #t23-11, #toSum").delay(1000).fadeIn(3000);
      break;
    case 12:
      $("#t23-12").css({ display: "block" });
      $("#t23, #t23-12, #toSum").delay(1000).fadeIn(3000);
      break;
  }
});

$("#skip05").click(function (e) {
  e.preventDefault();
  $(".textbox, .btn_skip").stop(true, true).fadeOut(1000);
  $("#summary").delay(1000).fadeIn(3000);
  $("#skip05").fadeOut(500);
});

$("#btn_home").click(function () {
  window.location.href = "index.html";
});
