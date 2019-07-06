var index = 1;
        showSlide(index);		

        function navigateSlides(n) {
            showSlide(index += n);		
        }

        function showCurrentSlide(n) {
            showSlide(index = n);
        }

        function showSlide(n) {		
            var slides = document.getElementsByClassName('slide');	
            if (n > slides.length) {
                index = 1;
            }
            if (n < 1) {
                index = slides.length;
            }
            for (var i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[index - 1].style.display = "block";
        }

        var slideshow=new TINY.slider.slide('slideshow',{
            id:'slider',
            auto:4,
            resume:false,
            vertical:false,
            navid:'pagination',
            activeclass:'current',
            position:0,
            rewind:false,
            elastic:true,
            left:'slideleft',
            right:'slideright'
        });

        var toTop = document.getElementById('toTop');

		window.onscroll = function(){
			if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				toTop.style.display = "block";
			} else {
				toTop.style.display = "none";
			}
		}

		toTop.addEventListener('click', function(){
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		});

        //modal
        $('#logoId').on('click', function(){
            $('#modal').show(2000);      
        })
        $('#closeBtn').on('click', function(e) {
            $('#modal').hide();
            $('body').removeClass('hovered');
            console.log(e);
        })