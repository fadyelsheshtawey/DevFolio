import Typed from './typed.js';

let i = 0,a=0,b=0,c=0;

   

$('document').ready(function(){

  
      if (window.matchMedia("(max-width: 769px)").matches) {
      $(".afterWithScrolling").css('display','none')
    } else {
      $(".afterWithScrolling").css('display','block')
    }


      let typed = new Typed('#typed', {
          // Waits 1000ms after typing "First"
          strings: ['Frontend Developer', 'Graphic Designer', 'Web Designer','CEO DevFolio'],
          backSpeed: 30,
          typeSpeed: 70,
          loop:true,
          autoInsertCss: true,
          backDelay: 2000,});

      


      let wScroll = $(window).scrollTop();
      if(wScroll==0)
      {
      $(".navbar-light .navbar-nav .nav-link").mouseenter(function(){
      $(this).children(".afterWithScrolling").css({"width":"60%","background-color": "#fff"})


      })
      $(".navbar-light .navbar-nav .nav-link").mouseleave(function(){
      $(this).children(".afterWithScrolling").css({"width":"0%","background-color": "transparent"})


      })
      }

      $(window).scroll(function(){
      let aboutScroll = $("#about").offset().top;
      let serviceCountScroll = $("#service-count").offset().top;
      let serviceScroll = $("#service").offset().top;
      let worksScroll = $("#works").offset().top;
      let blogScroll = $("#blog").offset().top;
      let contactScroll = $("#contact").offset().top;
      let wScroll = $(window).scrollTop();


      if(wScroll > (aboutScroll-150)){
      $(".navbar").css("background-color","white")
      $(".navbar-light .navbar-nav .nav-link").addClass("text-info")
      $(".navbar-light .navbar-nav .nav-link").removeClass("text-white")

      $(".navbar .navbar-brand").addClass("text-info")
      $(".navbar").removeClass("py-4")
      $(".navbar").addClass("shadow")
    

      }
      else{
      $(".navbar").css("background-color","transparent")
      $(".navbar-light .navbar-nav .nav-link").removeClass("text-info")
      $(".navbar-light .navbar-nav .nav-link").addClass("text-white")
      $(".navbar .navbar-brand").removeClass("text-info")
      $(".navbar").addClass("py-4")
      $(".navbar").removeClass("shadow")

      }

      if(wScroll > (serviceCountScroll-250)){
      setInterval(worksCompletedCount,60)
      setInterval(yearsOfExperienceCount,200)
      setInterval(totalClientsCount,5)
      setInterval(awardWonCount ,60)
      }

      if(wScroll < aboutScroll)
      {
      $(".navbar-light .navbar-nav .nav-link").mouseenter(function(){
      $(this).children(".afterWithScrolling").css({"width":"60%","background-color": "#fff"})


      })
      $(".navbar-light .navbar-nav .nav-link").mouseleave(function(){
      $(this).children(".afterWithScrolling").css({"width":"0%","background-color": "transparent"})


      })

      $(".navbar-light .navbar-nav .nav-link .afterWithScrolling").css({"width":"0%","background-color": "transparent"})

      }
      if(wScroll > aboutScroll-80 && wScroll <  serviceScroll-150)
      {
      $(".navbar-light .navbar-nav .nav-link .afterWithScrolling").eq(1).css({"width":"60%","background-color": "#007bff"})
      $(".navbar-light .navbar-nav .nav-link .afterWithScrolling").eq(1).parent().parent().siblings().children().children(".navbar-light .navbar-nav .nav-link .afterWithScrolling").css({"width":"0%","background-color": "transparent"})

      }

      else if(wScroll > serviceScroll && wScroll <  worksScroll-80)
      {
      $(".navbar-light .navbar-nav .nav-link .afterWithScrolling").eq(2).css({"width":"60%","background-color": "#007bff"})
      $(".navbar-light .navbar-nav .nav-link .afterWithScrolling").eq(2).parent().parent().siblings().children().children(".navbar-light .navbar-nav .nav-link .afterWithScrolling").css({"width":"0%","background-color": "transparent"})

      }
      else if(wScroll > worksScroll-80 && wScroll <  blogScroll-100)
      {
      $(".navbar-light .navbar-nav .nav-link .afterWithScrolling").eq(3).css({"width":"60%","background-color": "#007bff"})
      $(".navbar-light .navbar-nav .nav-link .afterWithScrolling").eq(3).parent().parent().siblings().children().children(".navbar-light .navbar-nav .nav-link .afterWithScrolling").css({"width":"0%","background-color": "transparent"})

      }
      else if(wScroll >  blogScroll-100 && wScroll < contactScroll-100)
      {
      $(".navbar-light .navbar-nav .nav-link .afterWithScrolling").eq(4).css({"width":"60%","background-color": "#007bff"})
      $(".navbar-light .navbar-nav .nav-link .afterWithScrolling").eq(4).parent().parent().siblings().children().children(".navbar-light .navbar-nav .nav-link .afterWithScrolling").css({"width":"0%","background-color": "transparent"})

      }
      else if(wScroll > contactScroll-100)
      {
      $(".navbar-light .navbar-nav .nav-link .afterWithScrolling").eq(5).css({"width":"60%","background-color": "#007bff"})
      $(".navbar-light .navbar-nav .nav-link .afterWithScrolling").eq(5).parent().parent().siblings().children().children(".navbar-light .navbar-nav .nav-link .afterWithScrolling").css({"width":"0%","background-color": "transparent"})

      }
      else if(wScroll > contactScroll-150 )
      {
      $(".navbar-light .navbar-nav .nav-link .afterWithScrolling").eq(6).css({"width":"60%","background-color": "#007bff"})
      $(".navbar-light .navbar-nav .nav-link .afterWithScrolling").eq(6).parent().parent().siblings().children().children(".navbar-light .navbar-nav .nav-link .afterWithScrolling").css({"width":"0%","background-color": "transparent"})

      }
      })


      $(".navbar-light .navbar-nav .nav-link").click(function(){
      let linkName = $(this).text()

      let selectorLink = `#${linkName}`.toLocaleLowerCase()


      $("html,body").animate({scrollTop:$(selectorLink).offset().top},1500)
      })


      })
function yearsOfExperienceCount(){
  if(a!=230)
{
a++
$(".counter").eq(1).html(a)
}}
function worksCompletedCount(){
  if(i!=850)
{
i++
$(".counter").eq(0).html(i)
}}

function totalClientsCount(){
  if(b!=9450)
{
b++
$(".counter").eq(2).html(b)
}}
function awardWonCount(){
  if(c!=780)
{
  c++
  $(".counter").eq(3).html(c)
}}