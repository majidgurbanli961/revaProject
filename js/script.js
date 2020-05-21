$(document).ready(function () {


    // this function add active class to visible nav bar
    function activeClassAdder() {
        $(document).on('click', '.visible-nav-bar-content', function () {
            if ($('.visible-nav-bar-content').hasClass("active-nav-bar-content")) {
                $('.visible-nav-bar-content').removeClass('active-nav-bar-content');
            }


            $(this).addClass("active-nav-bar-content");
        })

    }
    // function goes from visible nav bar to non visible
    function angleLeftClicker() {
        $(document).on('click', '.custom-left', function () {
            $('.visible-jquery').toggleClass('visible-nav-bar');
            $('.visible-jquery').toggleClass('not-visible-nav-bar');
            $('.visible-nav-bar-main').animate({ width: '60px' }, 500);
            $('.visible-jquery').animate({ width: '120px' }, 500);
            

            $('.visible-nav-bar-content').animate({ width: '60px', height: '30px' }, 500);
            $('.jquery-content span').toggleClass('not-visible');
            $('.jquery-nav-bar-footer').toggleClass('visible-nav-bar-footer');
            $('.jquery-nav-bar-footer').toggleClass('not-visible');
            $('.jquery-nav-bar-top').toggleClass('visible-nav-bar-top');
            $('.jquery-nav-bar-top').toggleClass('not-visible-nav-bar-top');
            $('.visible-nav-bar-angle').css('margin-left', '10px');
            $('.visible-nav-bar-angle').css('margin-top', '10px');


            // $('.visible-nav-bar-angle').toggleClass('not-visible-angel');
            $('.custom-left-ide').removeClass('fa-angle-left');
            $('.custom-left-ide').removeClass('custom-left');
            $('.custom-left-ide').addClass('fa-angle-right');
            $('.custom-left-ide').addClass('custom-right');
      

            $('.custom-slider').animate({
                left: "120px"


            }, 500)

        })
    }
    // goes from non visible to nav bar
    function angleRightClicker() {
        $(document).on('click', '.custom-right', function () {
            $('.visible-jquery').toggleClass('visible-nav-bar');
            $('.visible-jquery').toggleClass('not-visible-nav-bar');
            $('.visible-nav-bar-main').animate({ width: '110px' }, 500);
            $('.visible-nav-bar-content').animate({ width: '110px', height: '57px' }, 500);
            $('.visible-jquery').animate({ width: '220px' }, 500);

            $('.jquery-content span').toggleClass('not-visible');
            $('.jquery-nav-bar-footer').toggleClass('visible-nav-bar-footer');
            $('.jquery-nav-bar-footer').toggleClass('not-visible');
            $('.jquery-nav-bar-top').toggleClass('visible-nav-bar-top');
            $('.jquery-nav-bar-top').toggleClass('not-visible-nav-bar-top');
            $('.visible-nav-bar-angle').css('margin-left', 0);
            $('.visible-nav-bar-angle').css('margin-top', 0);
            // $('.visible-nav-bar-angle').toggleClass('not-visible-angel');
            $('.custom-left-ide').removeClass('fa-angle-right');
            $('.custom-left-ide').removeClass('custom-right');
            $('.custom-left-ide').addClass('fa-angle-left');
            $('.custom-left-ide').addClass('custom-left');

            $('.custom-slider').animate({
                left: "220px"



            }, 500)

        })

    }
    function activeNotVisibleClassAdder() {
        $(document).on('click', '.not-visible-nav-bar-content', function () {
            if ($('.not-visible-nav-bar-content').hasClass("active-nav-bar-content")) {
                $('.not-visible-nav-bar-content').removeClass('active-nav-bar-content');
            }


            $(this).addClass("active-nav-bar-content");
        })


    }

    // SLider Part

    // SLider
    let sliderKiller;
    let k = 0;
    let customSliderImages = [];
    function customSlider() {
        customSliderImages = $('.slide-images').toArray();
        sliderKiller = setInterval(function () {
            k++
            for (let i = 0; i < customSliderImages.length; i++) {
                $(customSliderImages[i]).css("display", "none");
                $(customSliderImages[i]).animate({
                    opacity: '0.8'
                }, 350)
            }
            if (k == customSliderImages.length) {
                k = 0;
            }
            $(customSliderImages[k]).animate({
                opacity: '1'
            }, 350)
            $(customSliderImages[k]).css("display", "block");
        }, 12000)
    }
    // change the slider in click Left
    function customMechanicSliderLeft() {
        $(document).on('click', ".custom-slider-arrow-left", function () {
            k--;
            if (k == (-1)) {
                k = customSliderImages.length - 1;
            }
            for (let i = 0; i < customSliderImages.length; i++) {
                $(customSliderImages[i]).css("display", "none");
                $(customSliderImages[i]).animate({
                    opacity: '0.8'
                }, 350)
            }
            if (k == customSliderImages.length) {
                k = 0;
            }
            $(customSliderImages[k]).animate({
                opacity: '1'
            }, 350)
            $(customSliderImages[k]).css("display", "block");

        })
    }
    function customMechanicSliderRight() {
        $(document).on('click', ".custom-slider-arrow-right", function () {
            k++
            for (let i = 0; i < customSliderImages.length; i++) {
                $(customSliderImages[i]).css("display", "none");
                $(customSliderImages[i]).animate({
                    opacity: '0.8'
                }, 350)
            }
            if (k == customSliderImages.length) {
                k = 0;
            }
            $(customSliderImages[k]).animate({
                opacity: '1'
            }, 350)
            $(customSliderImages[k]).css("display", "block");
        })
    }
    let i = 0;
    let frontEndLength;
    let frontEnd = "FRONT";
    frontEndLength = frontEnd.length;
    function slowWriter() {

        let deleteInterval = setInterval(function () {

            $('.testog').append(frontEnd[i]);
            i++;
            //   if(i==frontEndLength){
            //       $('.testog').empty();
            //   }
        }, 1000)
    }
    // decrease the width 
    function aboutLeftClicker(){
        $(document).on('click','.custom-left',function(){
            $('#about').animate({
                left: "120px"
    
    
            }, 500)

        })
      }
      function aboutRightClicker(){
        $(document).on('click','.custom-right',function(){
            $('#about').animate({
                left: "220px"
    
    
            }, 500)

        })

      }
      function servicesLeftClicker(){
        $(document).on('click','.custom-left',function(){
            $('#services').animate({
                left: "120px"
    
    
            }, 500)

        })

      }
      function servicesRightClicker(){
        $(document).on('click','.custom-right',function(){
            $('#services').animate({
                left: "220px"
    
    
            }, 500)

        })

      }
      function rightContentActiveAdd(){
          $(document).on('click','.right-content-header-content a',function(){
              let headers=[];
            
              headers=$('.right-content-header-content a').toArray();

              
              for(let i = 0; i<headers.length;i++){
                  $(headers[i]).removeClass('right-content-header-content-active');
              }
              $(this).addClass('right-content-header-content-active');
          })
      }
      function portfolioLeftClicker(){
        $(document).on('click','.custom-left',function(){
            $('#portfolio').animate({
                left: "120px"
    
    
            }, 500)

        })

      }
      function portfolioRightClicker(){
        $(document).on('click','.custom-right',function(){
            $('#portfolio').animate({
                left: "220px"
    
    
            }, 500)

        })

      }
      function testimonialLeftClicker(){
        $(document).on('click','.custom-left',function(){
            $('#testimonials').animate({
                left: "120px"
    
    
            }, 500)

        })

      }
      function testimonialRightClicker(){
        $(document).on('click','.custom-right',function(){
            $('#testimonials').animate({
                left: "220px"
    
    
            }, 500)

        })

      }
      function contactLeftClicker(){
        $(document).on('click','.custom-left',function(){
            $('#contact').animate({
                left: "120px"
    
    
            }, 500)

        })

      }
      function contactRightClicker(){
        $(document).on('click','.custom-right',function(){
            $('#contact').animate({
                left: "220px"
    
    
            }, 500)

        })

      }
      // changes none blocksinside about 
      function idChanger(){

        let blocksIds=[$('#about-me-content'),$('#profile-content'),$('#skills')];
        let headers=[];
        headers=$('.right-content-header-content').toArray();
        $(document).on('click','.right-content-header-content',function(){
           let k=$(this).attr('id');
            let kInt=parseInt(k);
            for(let i=0;i<blocksIds.length;i++){
                $(blocksIds[i]).hide();

            }
            $(blocksIds[kInt]).show(500);
            
           
        })
        
        
        
      }
      function sectionChanger(){
          let sectionsIds=[$('.custom-slider'),$('#about'),$('#services'),$('#portfolio'),$('#testimonials'),$('#contact')];
          let jqueryContents=[];
          jqueryContents=$('.jquery-content').toArray();
          $(document).on('click','.jquery-content',function(){
              let id=$(this).attr('id');
              let counterSection=parseInt(id)-100;
              for(let i=0;i<sectionsIds.length;i++){
                  sectionsIds[i].hide();
              }
              console.log(sectionsIds[counterSection]);
              
              sectionsIds[counterSection].show();

              
          })
      }
      function exitFromModal(){
          $(document).on('click','.exit-click-from-modal',function(){
              $('.modal-for-youtube').hide();
              

          });
          secondDeleteModal()
         
          
         
      }
      function addModal(){
          $(document).on('click','.link-youtube',function(){
              $('.modal-for-youtube').show();
              
          })
      }
      function secondDeleteModal(){
          let modal=document.querySelector(".modal-for-youtube");
        modal.onclick = function(event) {
        
          
            modal.style.display = "none";
        }
      }
      function portfolioActiveAdder(){
          $(document).on('click','.portfolio-headers div',function(){
              let headers=$('.portfolio-headers div').toArray();
              for(let i=0;i<headers.length;i++){
                  $(headers[i]).removeClass('portfolio-active');
              }
              $(this).addClass('portfolio-active');
          })
      }
      function porfolioToModalAdder(){
          let portfolioImages=[];
          let clonedImage;
          portfolioImages=$('.portfolio-photo-div-content img').toArray()
          let indexOfImage;
          $(document).on('click','.info-project i',function(){
           
            indexOfImage=parseInt($(this).attr('id'))-200;
            clonedImage=$(portfolioImages[indexOfImage]).clone();
            $('.portfolio-modal-content-photo ').empty();
            $('.portfolio-modal-content-photo ').append(clonedImage);
            $('.portfolio-modal-content-photo img').css('width','100%');
            $('.portfolio-modal-content-photo img').css('height','100%');
            $('.portfolio-modal').show();

     
            
            
          })
          

      }
      function portfoliModalExitter(){
          $(document).on('click','.portfolio-modal-content-info i',function(){
             $('.portfolio-modal').hide();
          })
          let modal=document.querySelector(".portfolio-modal");
          modal.onclick = function(event) {
          
            
              modal.style.display = "none";
          }

      }
      function whichPortfolio(){
          let divImages=[];
          divImages=$('.portfolio-photo-div').toArray();
            $(document).on('click','.web-design',function(){
          
                for(let i=0;i<divImages.length;i++){
                    $(divImages[i]).addClass('not-active');
                }
                $(divImages[2]).removeClass('not-active');
                $(divImages[4]).removeClass('not-active');
                $(divImages[8]).removeClass('not-active');


            })
            $(document).on('click','.graphic-design',function(){
          
                for(let i=0;i<divImages.length;i++){
                    $(divImages[i]).addClass('not-active');
                }
                $(divImages[1]).removeClass('not-active');
                $(divImages[5]).removeClass('not-active');
                $(divImages[7]).removeClass('not-active');


            })
            $(document).on('click','.marketing',function(){
          
                for(let i=0;i<divImages.length;i++){
                    $(divImages[i]).addClass('not-active');
                }
                $(divImages[0]).removeClass('not-active');
                $(divImages[3]).removeClass('not-active');
                $(divImages[6]).removeClass('not-active');


            })
            $(document).on('click','.all',function(){
          
                for(let i=0;i<divImages.length;i++){
                    $(divImages[i]).removeClass('not-active');
                }
              

            })
          
          
      }
      function contactButtonAnimation(){
          $(document).on('mouseover','.btn',function(){
           
            $('.btn-after').animate({
                opacity:'1'
                

            },10);

              $('.btn-after').animate({
                  left : '80%'

              },500);
              
          })
      }
      function contactButtonAnimationSecond(){
        $(document).on('mouseout','.btn',function(){
            // $('.btn-after').hide()
            $('.btn-after').animate({
                left : '60%'

            },500);
        })
      }
      function mapOpener(){
          $(document).on('click','.open-map',function(){
              $('.open-map-map').slideToggle(2000);
          })

      }
      function hamburgerRotater(){
          $(document).on('click','.last-hamburger',function(){
              $(this).toggleClass('change');
          })
      }
      function hamburgerClicker(){
          $(document).on('click','.last-hamburger',function(){
             
            $('.visible-jquery').css('animation-name','show-nav-bar');  
            $('.visible-jquery').css('animation-duration','1s');  

            if($('.last-hamburger').hasClass('change')){
                $('.visible-jquery').css('animation-name','hide-nav-bar');  

         }

          
          })

      }
      function giveZIndex(){
        if($('.last-hamburger').is(':visible')){
            $('.visible-jquery').css('z-index','999');
            $('.visible-jquery').css('left','-35px');
            $('.visible-jquery').css('top','-30px');

          //   left: -35px;
          //   top: -30px;
          //   height: 100vh;
        }else{
            console.log("Entered");
            
          $('.visible-jquery').css('z-index','0');
          $('.visible-jquery').css('left','0px');
          $('.visible-jquery').css('top','0px');
            

        }
          $(window).resize(function(){
           
              

          if($('.last-hamburger').is(':visible')){
              $('.visible-jquery').css('z-index','999');
              $('.visible-jquery').css('left','-35px');
              $('.visible-jquery').css('top','-30px');

            //   left: -35px;
            //   top: -30px;
            //   height: 100vh;
          }else{
              console.log("Entered");
              
            $('.visible-jquery').css('z-index','0');
            $('.visible-jquery').css('left','0px');
            $('.visible-jquery').css('top','0px');
              

          }
        });
      }
      function testImageChanger(){
          let images=[];
          images=$('.clicked-img').toArray();
          let texts=[];
          texts[0]='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          texts[1]=' Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam'
            texts[2]='Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.'
            texts[3]='Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.';
            texts[4]='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.';
            $(document).on('click','.clicked-img',function(){
                let index=parseInt($(this).attr('id'))-900;
               let customSrc=$(images[index]).attr('src');
               console.log(customSrc);
            //    $('.img-main').removeAttr('src');
               
               $('.img-main').attr('src',customSrc);
               $('.test-text').empty();
               $('.test-text').append(texts[index]);
                
            })
      }
      function preloader(){
          $(window).on('load',function(){
              console.log("Loading")
              $('.pre-loader').delay(4000).fadeOut(1000);
          })
      }
      preloader();
      testImageChanger()
      giveZIndex();
      hamburgerClicker();
    activeClassAdder();
    angleLeftClicker();
    angleRightClicker();
    customSlider();
   hamburgerRotater();

    $(document).on('mouseover', '.custom-slider img', function () {
        clearInterval(sliderKiller);
    })
    $(document).on('mouseover', '.custom-slider-arrow-left', function () {
        clearInterval(sliderKiller);
    })
    $(document).on('mouseover', '.custom-slider-arrow-right', function () {
        clearInterval(sliderKiller);
    })
    $(document).on('mouseleave', '.custom-slider img', function () {
        customSlider();
    })
    customMechanicSliderLeft();
    customMechanicSliderRight();
    activeNotVisibleClassAdder();
    slowWriter();
    aboutLeftClicker();
    aboutRightClicker();
    rightContentActiveAdd();
    idChanger();
    sectionChanger();
    servicesLeftClicker();
    servicesRightClicker();
    addModal();
    exitFromModal();
    portfolioLeftClicker();
    portfolioRightClicker();
    portfolioActiveAdder();
    porfolioToModalAdder();
    portfoliModalExitter();
    // console.log($(window).height());
    whichPortfolio();
    testimonialLeftClicker();
    testimonialRightClicker()
    contactLeftClicker();
    contactRightClicker();
    contactButtonAnimation();
    contactButtonAnimationSecond();
    mapOpener();

    


});