var ui = {
	init:function(){
		this.gnbAction();
		this.gnbCheck();		
		this.snbAction();
		this.snbCheck();
		this.tabMenu();
		this.tabBtns();
		this.toggWrap();
		this.foldingWrap();
		this.btnSwitch();
		this.popupFn();
		this.setTermFn();
		this.setSearchFn();
		this.tagList();
		this.qnaList();
		this.toggReviews();
		this.setStars();
		this.scrollTopFixed();
		this.prdBottomFixed();
		this.prdDetailBtns();
		this.searchBrand();
		this.tipFn();
		this.gnbFn();
		this.changeRsn();
		this.emgClose();
		this.brandHeader();
	},
	gnbAction:function(){
		$(document).on("click","#gnb .gnb_wrap ul > li > a",function(){
			var gnbWrap = $(this).parents(".gnb_wrap");
			var thisLi = $(this).parent("li");

			thisLi.siblings("li").removeClass("active");
			thisLi.addClass("active");
		});
	},
	// [D] 2020.04.20 활성화된 메뉴 화면에서 안보일시 스크롤 이동스크립트
	gnbCheck:function(){
		if($(".gnb_wrap").length > 0){
			var $wrap = $('.gnb_wrap .swiper-wrapper');
			var $tg = $('.gnb_wrap .swiper-wrapper li');
			var $active = $('.gnb_wrap .swiper-wrapper .active');
			var $pos = $active.position().left;
			var $bw = $(window).width() - 70;
			
			if($pos > $bw){				
				$wrap.scrollLeft($pos - $bw + 70);
			}
		}
	},
	// [D] 2020.04.20 활성화된 메뉴 화면에서 안보일시 스크롤 이동스크립트
	snbCheck:function(){
		if($(".snb_wrap").length > 0){
			var $wrap = $('.snb_wrap .swiper-wrapper');
			var $tg = $('.snb_wrap .swiper-wrapper li');
			var $active = $('.snb_wrap .swiper-wrapper .active');
			var $pos = $active.position().left;
			var $bw = $(window).width() - 70;
			
			if($pos > $bw){				
				$wrap.scrollLeft($pos - $bw + 70);
			}
		}
	},
	snbAction:function(){
		$(document).on("click","#gnb .cate_wrap ul > li > a",function(){
			var gnbWrap = $(this).parents(".gnb_wrap");
			var thisLi = $(this).parent("li");

			thisLi.siblings("li").removeClass("active");
			thisLi.addClass("active");
		});
	},
	tabMenu:function(){
		$(document).on("click",".tab_menu li a",function(){
			var tabMenu = $(this).parents(".tab_menu");
			var thisLi = $(this).parent("li");
			var thisIdx = thisLi.index();
			var tabCon = tabMenu.siblings(".tab_cont");

			if(thisLi.hasClass("active")) return;

			thisLi.siblings("li").removeClass("active");
			thisLi.addClass("active");
			tabCon.find(".cons").hide();
			tabCon.find(".cons").eq(thisIdx).show();
		});
	},
	tabBtns:function(){
		$(document).on("click",".tab_btns li a",function(){
			var tabMenu = $(this).parents(".tab_btns");
			var thisLi = $(this).parent("li");

			if(thisLi.hasClass("active")) return;

			thisLi.siblings("li").removeClass("active");
			thisLi.addClass("active");
		});
	},
	toggWrap:function(){
		$(document).on("click",".togg_wrap .togg_btn",function(){
			var wrap = $(this).parents(".togg_wrap");
			var btn = $(this);
			var con = wrap.find(".togg_con");
			if(btn.hasClass("active")){
				btn.removeClass("active")
				con.removeClass("active")
			}else{
				btn.addClass("active")
				con.addClass("active")
			}
		});
	},
	foldingWrap:function(){
		$(document).on("click",".folding_wrap .fold_btn",function(){
			var wrap = $(this).parents(".folding_wrap");
			var btn = $(this);
			var con = wrap.find(".fold_con");
			if(btn.hasClass("active")){
				btn.removeClass("active")
				con.removeClass("active")
			}else{
				btn.addClass("active")
				con.addClass("active")
			}
		});
	},
	gnbAction:function(){
		$(document).on("click","#gnb .gnb_wrap ul > li > a",function(){
			var gnbWrap = $(this).parents(".gnb_wrap");
			var thisLi = $(this).parent("li");

			thisLi.siblings("li").removeClass("active");
			thisLi.addClass("active");
		});
	},
	snbAction:function(){
		$(document).on("click","#gnb .cate_wrap ul > li > a",function(){
			var gnbWrap = $(this).parents(".gnb_wrap");
			var thisLi = $(this).parent("li");

			thisLi.siblings("li").removeClass("active");
			thisLi.addClass("active");
		});
	},
	tabMenu:function(){
		$(document).on("click",".tab_menu li a",function(){
			var tabMenu = $(this).parents(".tab_menu");
			var thisLi = $(this).parent("li");
			var thisIdx = thisLi.index();
			var tabCon = tabMenu.siblings(".tab_cont");

			if(thisLi.hasClass("active")) return;

			thisLi.siblings("li").removeClass("active");
			thisLi.addClass("active");
			tabCon.find(".cons").hide();
			tabCon.find(".cons").eq(thisIdx).show();
		});
	},
	tabBtns:function(){
		$(document).on("click",".tab_btns li a",function(){
			var tabMenu = $(this).parents(".tab_btns");
			var thisLi = $(this).parent("li");

			if(thisLi.hasClass("active")) return;

			thisLi.siblings("li").removeClass("active");
			thisLi.addClass("active");
		});
	},
	toggWrap:function(){
		$(document).on("click",".togg_wrap .togg_btn",function(){
			var wrap = $(this).parents(".togg_wrap");
			var btn = $(this);
			var con = wrap.find(".togg_con");
			if(btn.hasClass("active")){
				btn.removeClass("active")
				con.removeClass("active")
				wrap.removeClass("active")
			}else{
				btn.addClass("active")
				con.addClass("active")
				wrap.addClass("active")
			}
		});
	},
	foldingWrap:function(){
		$(document).on("click",".folding_wrap .fold_btn",function(){
			var wrap = $(this).parents(".folding_wrap");
			var btn = $(this);
			var con = wrap.find(".fold_con");
			if(btn.hasClass("active")){
				btn.removeClass("active")
				con.removeClass("active")
			}else{
				btn.addClass("active")
				con.addClass("active")
			}
		});
	},
	btnSwitch:function(){
		$(document).on("click",".btn_switch",function(){
			var btn = $(this);
			if(btn.hasClass("dis")) return;
			if(btn.hasClass("active")){
				btn.removeClass("active");
			}else{
				btn.addClass("active");
			}
		});
	},
	popupFn:function(){


		$(document).on("click",".pop_open",function(){
			var nowScrollTop = $("body").scrollTop();
			$("body").addClass("layer_activated");
			$("body").scrollTop(nowScrollTop);
			var target = $($(this).data("target"));


			if(target.hasClass("type_slide_r")){
				target.addClass("slide_active");
			}else{
				target.stop().fadeIn(200);
			}

			// [D] 200513 결함 #5222 대응
			var schScrollTop = $("html").scrollTop();
			target.attr('data-sc',schScrollTop);
		});
		
		// [D] 200429 결함 #5220 대응
		$(document).on("click", ".pop_close", function (e) {
			var target = $(this).parents(".layer_pop_wrap");
			target.stop().fadeOut(200);
			var nowScrollTop = $("body").scrollTop();
			$("body").scrollTop(nowScrollTop);
			$("body").removeClass("layer_activated");

			// [D] 200513 결함 #5222 대응
			var schScrollTop = target.attr('data-sc');			
			$("html").scrollTop(schScrollTop)
		});

		$(document).on("click",".layer_pop_wrap.type_slide_r",function(e){
			var realTarget = $(e.target);
			var target = $(this).parents(".layer_pop_wrap");

			if(target.hasClass("type_slide_r")){
				target.removeClass("slide_active");
			}else if($(this).hasClass("type_slide_r")){
				if(realTarget.hasClass("pop_inner")){
					$(this).removeClass("slide_active");
					$("body").removeClass("layer_activated");
				}				
			}else{
				target.stop().fadeOut(200);
			}
			var nowScrollTop = $("body").scrollTop();
			$("body").scrollTop(nowScrollTop);
		});
		// [D] 200429 결함 #5220 대응 끝

		$(document).on("click",".pop_cube",function(){
			var nowScrollTop = $("body").scrollTop();
			$("body").addClass("layer_activated");
			$("body").scrollTop(nowScrollTop);
			var target = $($(this).data("target"));	
			target.stop().fadeIn(200);		
			var $li = $('.logo_wrap li');
			$li.removeClass('move');	
			 
			var cubeSwiper = new Swiper(".logo_wrap",{});	
			cubeSwiper.destroy();
			 
			var cubeSwiper = new Swiper(".logo_wrap",{
				slidesPerView: 'auto',
		      	centeredSlides: true,
		      	on: {
				    init: function () {					      
				      this.slideTo(2, 1000);			      
				      
				    },
				}
			});
			  
		});

		$(document).on("click",".pop_close_cube",function(e){
			var realTarget = $(e.target);
			var target = $(this).parents(".layer_pop_wrap");
			var $li = $('.logo_wrap li');
			$li.addClass('move');	
			
			target.stop().fadeOut(200);

			var nowScrollTop = $("body").scrollTop();
			$("body").scrollTop(nowScrollTop);
			$("body").removeClass("layer_activated");
		});

	},
	setTermFn:function(){
		var divDim = "<div class='dimmed close_set'></div>";
		$(document).on("click",".btn_set_term",function(){
			var nowScrollTop = $("body").scrollTop();
			$("body").toggleClass("layer_activated");
			$("body").scrollTop(nowScrollTop);
			if($(".mod_set_term .dimmed").length < 1) $(".mod_set_term").append(divDim);
			$(".mod_set_term").toggleClass("active"); // [D] 200422 addClass -> toggleClass 수정
		});
		$(document).on("click",".mod_set_term .close_set",function(){
			$(".mod_set_term").removeClass("active");
			var nowScrollTop = $("body").scrollTop();
			$("body").scrollTop(nowScrollTop);
			$("body").removeClass("layer_activated");
		});
	},
	setSearchFn:function(){
		var divDim = "<div class='dimmed close_set'></div>";
		$(document).on("click",".mod_set_search .sch_input_box input",function(){
			var nowScrollTop = $("body").scrollTop();
			$("body").addClass("layer_activated");
			$("body").scrollTop(nowScrollTop);

			var prt = $(this).parents(".mod_set_search");
			if(prt.find(".dimmed").length < 1) prt.append(divDim);
			prt.addClass("active");
		});
		$(document).on("click",".mod_set_search .close_set",function(){
			var prt = $(this).parents(".mod_set_search");
			prt.removeClass("active");

			var nowScrollTop = $("body").scrollTop();
			$("body").scrollTop(nowScrollTop);
			$("body").removeClass("layer_activated");
		});
	},
	tagList:function(){
		$(document).on("click",".tag_list li a",function(){
			var thisLi = $(this).parent();
			if(thisLi.hasClass("active")) return;

			thisLi.addClass("active").siblings().removeClass("active");
		});
	},
	qnaList:function(){
		$(document).on("click",".mod_qna_list .btn_folder",function(){
			var prt = $(this).parent().parent();
			var btn = $(this);
			if(prt.hasClass("active")){
				prt.removeClass("active")
			}else{
				prt.addClass("active")
			}
		});
	},
	toggReviews:function(){
		$(document).on("click",".reviews .btn_togg_data",function(){
			var wrap = $(this).parents(".summary_detail");
			var btn = $(this);
			if(btn.hasClass("active")){
				btn.removeClass("active");
				wrap.find(".sum_data").show();
				wrap.find(".full_data").hide();
			}else{
				btn.addClass("active");
				wrap.find(".sum_data").hide();
				wrap.find(".full_data").show();
			}
		});
	},
	setStars:function(){
		$(document).on("click",".mod_star_wrap02 li a",function(){
			var wrap = $(this).parents(".mod_star_wrap02");
			var prt = $(this).parent();
			var idx = prt.index();
			for(var i=0;i<5;i++){
				if(i<=idx){
					wrap.find("li").eq(i).addClass("active");
				}else{
					wrap.find("li").eq(i).removeClass("active");
				}
			}
		});
	},
	scrollTopFixed:function(){
		var winTop = $(window).scrollTop();
		var fixWrap = $(".pos_fixed");
		if(fixWrap.length < 1) return;
		fixWrap.each(function(){
			var _this = $(this);
			var fixEl = _this.find(".fix_el");

			if($("#header.fixed").length > 0 && _this.attr("id") != "header"){
				var thisTop = _this.offset().top - $("#header").height();
				fixEl.css("top",$("#header").height()+"px");

				// [D] 200519 기획전 탭 main에 노출시 동작
				if($("#header.type_gnb").length > 0){
					fixEl.css("top",$("#header").height()-51+"px");
				}
			}else{
				var thisTop = _this.offset().top;
			}
			
			if(winTop >= thisTop){
				_this.css("height",fixEl.outerHeight());
				_this.addClass("fixed");
			}else{
				_this.css("height","");
				_this.removeClass("fixed");
			}
		});
	},
	//상품상세 - s
	prdBottomFixed:function(){
		if($(".prd_detail").length > 0){
			var winTop = $(window).scrollTop();
			var fixWrap = $(".fix_bottom_wrap");

			$(window).on('scroll', function(){
				var scrTop = $(window).scrollTop();
				// var activeTop = $(".parallax_wrap02").offset().top;

				if (scrTop > winTop) {
					fixWrap.addClass("fixed");
				} else {
					$(".parallax_wrap01 > div").css("transform", "translateY(" + winTop / 4 + "px)");
					//	fixWrap.removeClass("fixed");
				}
				scrTop = winTop;
				
				setTimeout(function () {
					if($(window).scrollTop() < 0){
						scrTop = 0;
					}
					if ($(window).scrollTop() === 0){
						$(".parallax_wrap01 > div").css("transform", "translateY(0)");
						$("#header.type_prd_detail").show();
						$("#header.type_prd_detail").find(".inner.ver02").show();
						$('.btn_top').removeClass('up');
						fixWrap.removeClass("fixed");
					}
				}, 1);
			});
		}
	},
	prdDetailBtns:function(){
		if($(".prd_detail").length > 0){
			$(document).on("click","#btn_buy01",function(){
				var nowScrollTop = $("body").scrollTop();
				$("body").addClass("layer_activated");
				$("body").scrollTop(nowScrollTop);
				$(".buy_detail_wrap").addClass("active");
			});
			$(document).on("click",".util_btn a.btn_wish",function(){
				var nowScrollTop = $("body").scrollTop();
				$("body").addClass("layer_activated");
				$("body").scrollTop(nowScrollTop);
				$(".buy_detail_wrap").addClass("active");
			});

			$(document).on("click",".buy_detail_wrap .btn_close",function(){
				$(".buy_detail_wrap").removeClass("active");
				var nowScrollTop = $("body").scrollTop();
				$("body").scrollTop(nowScrollTop);
				$("body").removeClass("layer_activated");
			});
		}
	},
	//상품상세 - e
	//카테고리 브랜드검색 - s
	searchBrand:function(){
		if($("#cate_brand_list").length > 0){
			$(document).on("click","#cate_brand_list .sort_type a",function(){
				var sortBox = $(this).parents(".sort_box");
				var thisLi = $(this).parent();
				var idx = thisLi.index();
				if(thisLi.hasClass("active")) return;

				thisLi.addClass("active").siblings().removeClass("active");
				sortBox.find(".tag_list").hide();
				sortBox.find(".tag_list").eq(idx).show();
			});
		}
	},
	//카테고리 브랜드검색 - e
	tipFn:function(){
		$(document).on('click', '.btn_tip', function(e){
			$(e.target).find('.txt').addClass('active');
		});
		
		var tipTxt = $('.btn_tip').find('.txt');
		$('body').on('click', function(e){
			if (!$('.btn_tip').has(e.target).length) tipTxt.removeClass('active');
		});
	},
	//[D] 200504 스크립트 수정
	gnbFn:function(){
		$(document).ready(function(){
			var prevSt = 108;
			$(window).on('scroll', function(){
				var crtSt = $(this).scrollTop();
				if( $(window).scrollTop() < 0 ){
					crtSt = 0;
				}
				if( crtSt > prevSt ){
					$('#header.type_gnb > .inner, .btn_top, #header .filter_wrap, #header .filter_apply').addClass('up');
					$('#naviBar').addClass('down');
					if( $('#naviBar').length ){
						$('body').removeClass('navi_up');
					}
				} else if( crtSt <= prevSt ) {
					$('#naviBar').removeClass('down');
					if( $('#naviBar').length ){
						$('body').addClass('navi_up');
					}
				}
				if( crtSt === 0 ){
					$('#header.type_gnb > .inner, .btn_top, #header .filter_wrap, #header .filter_apply').removeClass('up');
					$('#naviBar').removeClass('down');
					$('.btn_top').removeClass('up');
				}
				prevSt = crtSt;
			});
		});
	},
	changeRsn:function(){
		var trr = $('.reason_opts').find('input'),
			trg = $('.reason_cont').find('.box_gray');

		trr.on('click', function(e){
			var optIdx = $(e.target).closest('li').index();
			trg.removeClass('active');
			trg.eq(optIdx).addClass('active');
		});
	},
	//[D] 200428 메인 공지 닫기 스크립트 추가
	emgClose: function(){
		var emgWrap = $('.emg_notice_wrap'),
			emgClose = emgWrap.find('.btn_close');
		emgClose.on('click', function(){ emgWrap.hide(); });
	},
	//[D] 200428 브랜드 헤더 배경 스크립트 추가
	brandHeader: function(){
		var brandHd = $('#header.type_brand > .inner');
		$(window).scroll(function(){
			var scrTop = $(window).scrollTop();
			brandHd.addClass('bg_black');
			if (scrTop <= 50) { brandHd.removeClass('bg_black') }
		});
	}
}

$(document).ready(function(){
	ui.init();
});

$(window).on("scroll mousewheel touchmove",function(){
	ui.scrollTopFixed();
	if($(".prd_detail").length > 0){
		ui.prdBottomFixed();
	}
});


//Dark Mode
function userTheme() {
	window.__THEME_MODE = 'light';
	if (!!window.matchMedia) {
		window.__THEME_MODE = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'auto';
	}
  document.getElementsByTagName('html')[0].classList[window.__THEME_MODE === 'dark' ? 'add' : 'remove']('darkmode');
}

if (!!window.matchMedia) {
	['light', 'dark'].forEach(mode => {
		window.matchMedia(`(prefers-color-scheme: ${mode})`).addListener(e => {
			if(!!e.matches) {
				userTheme();
			}
		});  
	});
}
userTheme();
//Dark Mode //



