$(document).ready(() => {
    // Click Events
    $(".hint-box").on("click", () => {
      $(".hint").slideToggle(800);
    });
  
    //wrong answers
    $(".wrong-answer-one").on("click", () => {
      $(".wrong-text-one").fadeOut("slow");
      $(".frown").show();
    });
    $(".wrong-answer-two").on("click", () => {
      $(".wrong-text-two").fadeOut("fast");
      $(".frown").show();
    });
    $(".wrong-answer-three").on("click", () => {
      $(".wrong-text-three").fadeOut();
      $(".frown").show();
    });
  
    //correct answers
    $(".correct-answer").on("click", () => {
      $(".frown").hide();
      $(".smiley").show();
      $(".wrong-answer-one").fadeout("slow");
      $(".wrong-answer-two").fadeout("slow");
      $(".wrong-answer-three").fadeout("slow");
    });
  });
  